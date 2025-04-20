import { useState, useEffect } from 'react';
import Gallery from "./components/Gallery";
import DestinationSelector from './components/DestinationSelector';
import toursData from './toursData';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      // Simulate API fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTours(toursData);
    } catch (error) {
      console.error('Error fetching tours:', error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    fetchTours();
  };

  return (
    <div>
      <h1>Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <Gallery
        tours={tours}
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}
        removeTour={removeTour}
        refreshTours={refreshTours}
      />
    </div>
  );
}

export default App;


