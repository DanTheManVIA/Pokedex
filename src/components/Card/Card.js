import "./Card.css"
export default function Card({name, pokeImageUrl, onClick}) {
    return (
      <div className="card" onClick={onClick}>
          <h2 className="uppercase">{name}</h2>
          <img src={pokeImageUrl} alt={name}/>
      </div>  
    );
}