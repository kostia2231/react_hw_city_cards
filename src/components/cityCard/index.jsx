import styles from "../cityCard/cityCard.module.css";

function CityCard({ city }) {
  if (!city) {
    return;
  }

  return (
    <>
      <h2>{city.name}</h2>
      <img className={styles} src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </>
  );
}

export default CityCard;
