import useFetch from "../../hooks/useFetch"
import GenreList from '../GenreList/GenreList.jsx'

export default function SideBar() {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const genres = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);

    return (
        <>
        <div className="mt-3 vh-100 py-4 bg-style-side font-side">
            <h2>Generi</h2>
             <GenreList genres={genres}/>
            <h2>Piattaforme</h2>
        </div>
        </>
    )
}