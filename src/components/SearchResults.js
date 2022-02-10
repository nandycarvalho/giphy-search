import React from 'react';
import Container from './Container';

const SearchResults = ({ dataSearch }) => (
  <Container classNames={'-result'}>
    {dataSearch.map((giphy) => {
      const {id, images, title} = giphy
      const {fixed_width:{url, width, height}} = images

      return (
        <a href={giphy.url} key={id} className="giphy__item" target="_blank" rel="noreferrer">
          <img src={url} width={width} height={height} alt={title} />
        </a>
      )
    })}
  </Container>
  
);

export default SearchResults;
