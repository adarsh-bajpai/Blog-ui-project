import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Users from './Users'

const UserList = (props)=>{
    const [name , setName] = useState([])
    const [title, setTitle] = useState([])
    const { id } = props.match.params


    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result = response.data
                setName(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
             .then((response)=>{
                 const result = response.data
                 setTitle(result)
             })
             .catch((err)=>{
                 alert(err.message)
             })
    },[id])
    
    return (
    <div>
        <h3> User Name - {name.name} </h3>
        <h3> Post Written by Author are Given Below </h3>
        <ul>
            {
                title.map((ele)=>{
                    return ( <li key={ele.id}><Link to={`/posts/${ele.id}`}> {ele.title}</Link> </li> )
                })
            }
        </ul>
    </div>)
}
export default UserList