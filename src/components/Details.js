import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const params = useParams()
  const [robodetails, setRobodetails] = useState([]);
  const { id } = params

  useEffect(() => {
    axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`

    ).then(res => {
      setRobodetails(res.data);
    })
  }, [])

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} />
      <div key={robodetails.id}>
        <h4> ID : {robodetails?.id} </h4>
        <h1>NAME : {robodetails.name}</h1>
        <h2>EMAIL :{robodetails.email}</h2>
        <h3>PHONE : {robodetails.phone}</h3>
        <h4><p>ADDRESS : {robodetails?.address?.city}</p></h4>
        <h4><p>STREET : {robodetails?.address?.street}</p></h4>
        <h4><p>SUITE : {robodetails?.address?.suite}</p></h4>
        <h4><p>ZIPCODE : {robodetails?.address?.zipcode}</p></h4>
      </div>
    </div>
  )
}

export default Details;