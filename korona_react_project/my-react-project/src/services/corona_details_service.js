import axios from './axios'

export function getAllCorona_detail() {
    return fetch('http://localhost:4004/Corona_detail')
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })
}
export function addCorona_detail(newCorona_detail) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newCorona_detail),
    };
    return fetch('http://localhost:4004/Corona_detail', requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })
}
