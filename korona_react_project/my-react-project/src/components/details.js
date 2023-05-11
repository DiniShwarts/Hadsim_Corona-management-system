import React, { useState, useEffect } from 'react';
import { getAllCorona_detail } from '../services/corona_details_service';
import { useLocation } from 'react-router';

export default function Details() {
  const [vaccine, setVaccine] = useState([]);
  const { state } = useLocation();
  const { user } = state;

  async function fetchData() {
    const coronaDetails = await getAllCorona_detail();
    setVaccine(coronaDetails);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const vaccineById = vaccine.find((p) => p.id_link === user._id);

  return (
    <>
      <div>{user.name}</div>
      <div>{user.identity}</div>
    </>
  );
}
