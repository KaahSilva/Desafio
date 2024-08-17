import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '@/app/types';


export default function MovieDetail() {
    const router = useRouter();
    const { imdbID } = router.query;
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        if (imdbID) {
            axios.get('https://www.omdbapi.com/', {
                params: {
                    apikey: '6ed8d353',
                    i: imdbID
                }
            }).then(response => {
                setMovie(response.data);
            }).catch(error => {
                console.error('Erro ao buscar detalhes do filme:', error);
            });
        }
    }, [imdbID]);

    if (!movie) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Rating:</strong> {movie.imdbRating}</p>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
}