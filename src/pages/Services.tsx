import { useState, useEffect } from 'react';
import axios from 'axios';

interface Service {
  _id: string;
  name: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;