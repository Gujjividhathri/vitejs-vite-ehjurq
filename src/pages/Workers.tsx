import { useState, useEffect } from 'react';
import axios from 'axios';

interface Worker {
  _id: string;
  name: string;
  skills: string[];
  rating: number;
}

const Workers = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/workers`);
        setWorkers(response.data);
      } catch (error) {
        console.error('Error fetching workers:', error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <div className="workers">
      <h2>Our Workers</h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker._id}>
            <h3>{worker.name}</h3>
            <p>Skills: {worker.skills.join(', ')}</p>
            <p>Rating: {worker.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workers;