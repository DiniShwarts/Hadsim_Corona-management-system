import axios from './axios.js'

export function getAllPersonal_details() {
    return fetch('http://localhost:4004/Personal_detail')
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })
}
export function addPersonal_details(newPersonal_details) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

   
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newPersonal_details),
    };

    return fetch('http://localhost:4004/Personal_detail', requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })

}

