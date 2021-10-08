import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = (props)=>{
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
             .then((response)=>{
                const result = response.data
                setPost(result)
             })
              .catch((err)=>{
                  alert(err.meaasge)
             })
    },[])

    return (
        <div>
            <h2> Total Number of Posts - {post.length} </h2>
            <ul>
                {
                    post.map((ele)=>{
                      return( <li key={ele.id}> <Link to={`/posts/${ele.id}`}> {ele.title} </Link> </li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Posts