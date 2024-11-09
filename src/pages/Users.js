
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Location:</strong> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
          <p><strong>Coordinates:</strong> Lat {user.location.coordinates.latitude}, Long {user.location.coordinates.longitude}</p>
          <p><strong>Timezone:</strong> {user.location.timezone.description} (Offset: {user.location.timezone.offset})</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.login.username}</p>
          <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})</p>
          <p><strong>Registered:</strong> {new Date(user.registered.date).toLocaleDateString()} (Age: {user.registered.age})</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Cell:</strong> {user.cell}</p>
          <p><strong>Nationality:</strong> {user.nat}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
