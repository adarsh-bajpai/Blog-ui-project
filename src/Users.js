import React, { useState, useEffect} from 'react'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = (props)=>{
    const [user , setUser ]= useState([])


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                 const result= response.data
                 setUser(result)
             })
             .catch((err)=>{
                 alert(err.message)
             })
    },[])

    return (
        <div>
            <h2> Information Regarding the Authors in the Blog </h2>
            <h2> Authors  -  {user.length} </h2>
            <ul>
                {
                    user.map((ele) =>{
                       return <li key={ele.id}><Link to={`/users/${ele.id}`}> {ele.name} </Link></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users