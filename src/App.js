import React, { useState } from 'react';
import giphySearch from './services/giphySearch';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './style.scss';

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  const [valueSearch, setValueSearch] = useState('');

  async function getSearchData(){
    try{
      const result = await giphySearch(valueSearch);
      console.log('called', result);
      setDataSearch(result.data.data)
    } catch(error){
      console.log('called error');
      console.warn('error', error)
    }
  };

  function onSearch(){
    getSearchData(valueSearch)
  };

  function onInputChange(event){
    setValueSearch(event.target.value)
  }

  function onEnter(event){
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className="App">
        <SearchBar valueSearch={valueSearch}  onInputChange={onInputChange} onEnter={onEnter} onSearch={onSearch} />
        <SearchResults dataSearch={dataSearch}/>
    </div>
  );
}

export default App;
