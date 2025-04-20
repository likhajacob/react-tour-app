import TourCard from './TourCard';

function Gallery({ tours, loading, error, selectedDestination, removeTour, refreshTours }) {
  if (loading) {
    return <h2>Loading tours...</h2>;
  }

  if (error) {
    return <h2>There was an error loading the tours.</h2>;
  }

  let filteredTours = tours;
  if (selectedDestination !== 'All Destinations') {
    filteredTours = tours.filter((tour) => tour.name === selectedDestination);
  }

  if (filteredTours.length === 0) {
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}


export default Gallery;
