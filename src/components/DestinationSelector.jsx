function DestinationSelector({ tours, selectedDestination, setSelectedDestination }) {
    const destinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];
  
    const handleChange = (e) => {
      setSelectedDestination(e.target.value);
    };
  
    return (
      <div>
        <select value={selectedDestination} onChange={handleChange}>
          {destinations.map((destination, index) => (
            <option key={index} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;
