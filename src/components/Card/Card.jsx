
export default function Card({game}){
    return (
        <div className="col-12 col-md-3 mb-3">
            <div className="card width-personal">
                <img src={game.background_image} className="card-img-top img-fluid" alt="Immagine di Copertina" />
                <div className="card-body bg-color-card">
                    <p className="card-text font-color">{game.name}</p>
                </div>
            </div>
        </div>
    )
}