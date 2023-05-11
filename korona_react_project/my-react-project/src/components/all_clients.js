

import React, { useEffect, useState } from 'react';
import { getAllPersonal_details } from '../services/personal_detail_service';
import { getAllCorona_detail } from '../services/corona_details_service';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import moment from 'moment'
// import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

export default function ClientTable() {
  const [clients, setClients] = useState([]);
  let personalDetails=[]
  let coronaDetails=[]

  useEffect(() => {
    async function fetchData() {
       personalDetails = await getAllPersonal_details ();
      coronaDetails = await getAllCorona_detail();
   } },[])

   console.log(personalDetails)

  const [image, setImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  return (
    <div>
      
      <h1 style={{ textAlign: 'center' }}>Details of members of the health fund</h1>
     
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ textAlign: 'center', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Profil</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Identity</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>City</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Street</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Num</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Date of Birth</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Phon</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Mobile Phone</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Corona Vaccination Date</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Vaccine Manufacturer</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Date Receiving Positive Result</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Date Recovery Disease</th>
            </tr>
          </thead>

          <tbody>
                {
                  personalDetails.map((client) => {

                      // coronaDetails.map((corona) => {
                    { console.log(client)}
                        
              <tr key={client._id}>
                {/* <td style={{ border: '1px solid black', padding: '10px' }}><ListItemAvatar>
             <Avatar alt="Profile Picture" img="" /></ListItemAvatar></td> */}
                {/* <td style={{ border: '1px solid black', padding: '10px' }}>
                <ListItem>
      <ListItemAvatar>
        <label htmlFor="profile-image">
          <Avatar alt="Profile Picture"  src={""} />
        </label>
        <input
          id="profile-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </ListItemAvatar>
      <ListItemText />
    </ListItem>
                </td> */}
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.name}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.identity}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.address.city}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.address.street}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.address.num}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{moment(client.date_of_birth).format('DD/MM/YYYY')}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.phon}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{client.mobile_phon}</td>
                {/* <td style={{ border: '1px solid black', padding: '10px' }}>{corona.corona_vaccination_date}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{corona.vaccine_manufacturer}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{corona.date_receiving_positive_result}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{corona.date_recovery_disease}</td> */}
              </tr>
                        })}   )    
          </tbody>
        </table>
      </div>
    </div>
  );
}