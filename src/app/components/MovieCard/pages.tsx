
import { Movie } from '@/app/types';
import Link from 'next/link';
import './index.scss';
export interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {
    return (
        <li className='movie-card'>
            <Link href={`/movie/${movie.imdbID}`}>
                <div className="movie-post">
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "default-image-url"} alt={`${movie.Title} Poster`} />
                </div>
                <div className="movie-info">
                    <p className="movie-title">{movie.Title}</p>
                    <p className='movie-year'>{movie.Year}</p>
                </div>
            </Link>
        </li>
    );
}
