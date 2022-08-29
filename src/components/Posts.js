import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Posts = () => {
    const params = useParams()
    const [robopost, setRoboposts] = useState([]);
    const { id } = params

    useEffect(() => {
        axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}/posts`

        ).then(res => {
            setRoboposts(res.data);
        })
    }, [])
    console.log(robopost);
    return (
        <div className="container">
            {robopost && robopost.map((robo, i) => {
                return (<div className='row col-3 text-truncate tc grow bg-light-green br4 pa4 ma3 dib bw2 shadow-5 '>
                    <img src={`https://robohash.org/${id}?size=300x300`} alt="..." />
                    <div key={robo.i}>
                        <h5 className="card-title">USERID : {robo?.userId}</h5>
                        <h4>ID : {robo.id}</h4>
                        <p className="card-text">Read all the information about the...</p>
                        <a href={`https://jsonplaceholder.typicode.com/users/${id}/posts`} className="btn btn-primary">Click here to know more!</a>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Posts;