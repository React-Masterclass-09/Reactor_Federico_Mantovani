import GenreLink from "../GenreLink/GenreLink"

export default function GenreList ({genres}) {
    return (

        <ul>
            {genres && genres.results.map(genre =>{
                return  (
                    <GenreLink genre={genre}/>
                )
            })}
        </ul>

    )
}