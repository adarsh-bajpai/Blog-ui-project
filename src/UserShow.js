import React,{ useState, useEffect } from 'react'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import UsersList from './UsersList'

const UserShow = (props)=>{
    const [name, setName]= useState([])
    const [title, setTitle]= useState([])
    const [body, setBody]= useState([])
    const [comments, setComments] = useState([])

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
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response)=>{
                  const result = response.data
                  setTitle(result)
             })
             .catch((err)=>{
                 alert(err.message)
             })
    },[id])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response)=>{
                  const result = response.data
                  setBody(result)
             })
             .catch((err)=>{
                 alert(err.message)
             })
    },[id])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
             .then((response)=>{
                  const result = response.data
                  setComments(result)
             })
             .catch((err)=>{
                 alert(err.message)
             })
    },[id])
    
    return (
    <div> 
        <h4> Name of the Author - {name.name} </h4>
        <h4> Title - {title.title} </h4>
        <h4> Body - {body.body}</h4> <hr/>
        <h4> Comments <br/> {comments.body} </h4>
    </div>
    )
}

export default UserShow
