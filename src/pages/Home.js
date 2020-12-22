import React, { useEffect } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useGlobalContext } from '../context';

const Home = () => {
  const { setSearchTerm } = useGlobalContext();
  useEffect(() => setSearchTerm('a'), [setSearchTerm]); //reset list of cocktails everytime home page renders
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
