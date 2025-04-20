import { useState, useEffect } from 'react';
import Gallery from "./components/Gallery";
import DestinationSelector from './components/DestinationSelector';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      const data = await response.json();
      setTours(data);
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


