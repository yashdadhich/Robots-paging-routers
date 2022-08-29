import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Post = () => {
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
              return( 
                <div className="container">
                {robopost&&robopost.map((robo,i)=>{
                   return( <div className='row-sm tc grow bg-light-green br4 pa1 ma3 dib bw3 shadow-5 col-lg-4 text-truncate'>
                    <div className="col-large-12">
                        <img src={`https://robohash.org/${id}?size=200x200`} />
                    </div>
                    <div className="col-large-12"><h4> USERID : {robo?.userId} </h4>
                        <h4>ID : {robo.id}</h4>
                        <h1>TITLE : {robo.title}</h1>
                    </div>
                    <div className="col-large-12"> <p>:{robo.body}</p></div>
                </div>
                )})}
            </div>
    )
            }

export default Post;