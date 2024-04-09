import {Link} from 'react-router-dom'

export default function GenreLink ({genre}) {
    return (
        <li key={genre.id}>
            <Link className="decoration side-link" to={`/genre/${genre.slug}`}>{genre.name}</Link>
        </li>
    )
}