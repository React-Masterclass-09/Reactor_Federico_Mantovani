import Card from "../Card/Card.jsx" 

export default function List ({games}){
    return (
        <div className="container-fluid">
        <div className="row">
            {games.map(game => {
                return (
                    <Card game={game} key={game.id}/>
                )
            })}
        </div>
    </div>
    )
}