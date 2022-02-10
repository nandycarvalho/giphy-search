import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import giphySearch from './services/giphySearch';
import App from './App';

jest.mock('./services/giphySearch');

const successfullApi = {
  data: {
    data: [
      {
        title: 'title test',
        id: 'test-id',
        images:{
          fixed_width:{
            url:'test-image-url',
            width: '200',
            height: '103'
          }
        }
      }
    ]
  }
}

describe('<App />', () => {
  describe('Succefull API Load', () => {
    test('SearchBar and SearchResult work correctly', async () => {
      giphySearch.mockResolvedValueOnce(successfullApi);

      render(<App />);
      const inputSearch = screen.getByPlaceholderText('Type your search');
      fireEvent.change(inputSearch, { target: { value: 'pug' } });
      fireEvent.keyDown(inputSearch, { key: 'Enter' });
      
      expect(inputSearch.value).toBe('pug');
      
      await waitFor(() => {
        const giphyImages = screen.getByAltText(/title test/i)
        expect(giphyImages).toBeVisible();
      })
    })
  });
});
