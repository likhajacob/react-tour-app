function TourCard({ tour, removeTour }) {
    const { id, name, info, image, price } = tour;
  
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <img src={image} alt={name} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    );
  }
  
  export default TourCard;
  
