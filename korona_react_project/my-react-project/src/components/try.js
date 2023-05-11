import React, { useEffect, useState } from 'react'
import './style.css'
import {getAllCorona_detail} from '../services/corona_details_service'
import {getAllPersonal_details} from '../services/personal_detail_service'
import moment from 'moment';
    export default function AllMembers()
    {
        const [allpersons,setAllPersons] = useState([]);
        const[vaccinations,setAllVaccinations] = useState([]);
        useEffect(() => {
            const getData = async () => {
              const result = await getAllCorona_detail();
              setAllPersons(result);
            }
            getData();
          },[]);
        useEffect(() => {
            const getDatavaccinations = async () => {
              const result = await getAllCorona_detail();
              setAllVaccinations(result);
            }
            getDatavaccinations();
          },[vaccinations]);
    
          return (
            <table className="all-persons-table">
              <thead>
                <tr>
                  <th>Profil</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>IdentityCard</th>
                  <th>DateofBirth</th>
                  <th>Phone</th>
                  <th>MobilePhone</th>
                  <th>Vaccinations</th>
                  <th>ManufacturerVaccine</th>
                  <th>DateOfResult</th>
                  <th>DateOfRecovery</th>
                </tr>
              </thead>
              <tbody >
                {allpersons.map(person => {
                  const personVaccinations = vaccinations.find(v => v.id_link=== person._id);
                  return (
                    <tr key={person.id}>
                      <td><img src={person.image}/></td>
                      <td>{person.name}</td>
                      <td>{`${person.address.city}, ${person.address.street} ${person.address.num}`}</td>
                      {/* <td>{person.identityCard}</td>
                      <td>{moment(person.DateOfBirth).format('DD/MM/YYYY')}</td>
                      <td>{person.Phone}</td>
                      <td>{person.MobilePhone}</td> */}
                      {personVaccinations!=null?(<>
                      <td>
                        <div>{personVaccinations && personVaccinations.DateOfGettingVaccinated.map((index,date)=>  (
                            <div key={date}>
                            <div>{moment(index).format('DD/MM/YYYY')}</div>
                            </div> ))}
                            </div>
                      </td>
                            <td>
                                {personVaccinations.ManufacturerVaccine.map((str,index)=>(
                                <div key={index}>
                                    <div>{str}</div>
                                </div>))}
                            </td>
                            <td>{personVaccinations && moment(personVaccinations.DateOfResult).format('DD/MM/YYYY')}</td>
                            <td>{personVaccinations &&moment(personVaccinations.DateOfRecovery).format('DD/MM/YYYY')}</td></>):(
                            <> <td>This data has not been entered yet</td>
                            <td>This data has not been entered yet</td>
                            <td>This data has not been entered yet</td></>)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
    }