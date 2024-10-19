import { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, booking);
      alert('Booking submitted successfully!');
      setBooking({ name: '', email: '', service: '', date: '' });
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    }
  };

  return (
    <div className="booking">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={booking.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={booking.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <select
          name="service"
          value={booking.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="carpentry">Carpentry</option>
        </select>
        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;