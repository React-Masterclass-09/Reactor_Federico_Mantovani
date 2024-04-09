import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";

export default function GenreView(){

    const games = useLoaderData();

    const {slug} = useParams();


    return (
        <>
            <Header title={`Genere: ${slug}`} subtitle="" />
            <List games={games}/>
        </>
    )
}

export async function gameByGenreLoader({params}){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}