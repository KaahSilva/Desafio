"use client";

import { useState } from 'react';

import './index.scss';
import MovieList from '../MovieList/pages';


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    <MovieList/>
  };

  return (
    <nav className='navbar'>
      <h1 className="page-title">filmes</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <MovieList/>
    </nav>
  );
}