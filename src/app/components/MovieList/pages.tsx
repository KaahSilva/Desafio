'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
// import MovieCard from '../MovieCard/page';
// import { Movie } from '@/types';
import SearchBar from '../SearchBar/pages';
import MovieCard from '../MovieCard/pages';
import { Movie } from '@/app/types';
// import SearchBar from '../SearchBar/page';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = (query: string) => {
        axios({
            method: 'GET',
            url: 'https://www.omdbapi.com/',
            params: {
                apikey: '6ed8d353',
                s: query,
            }
        }).then(response => {
            setMovies(response.data.Search);
        }).catch(error => {
            console.error("Erro ao buscar filmes:", error);
        });
    };

    return (
        <div>
            <SearchBar onSearch={getMovies} />
            <ul className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard
                       movie={movie}
                       key={index}
                    />
                ))}
            </ul>
        </div>
    );
}