export default function Header({title= 'Nuovi e di tendenza', subtitle= 'Qui i nostri migliori giochi'}) {    
    return (
        <>
            <h1 className="display-5 font-color">{title}</h1>

              <h2 className="display-6 font-color">{subtitle}</h2>

        </>
    )
}