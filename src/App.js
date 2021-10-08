import React from 'react'
// eslint-disable-next-line no-unused-vars
import Styles from './Styles.css'
//import background from './backgound/500.jpg'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserList from './UsersList'
import UserShow from './UserShow'
import Posts from './Posts'
import Contact from './Contacts'



const App = (props) => {
     
    return (
        <div>
           <h1> Blog UI Project </h1><hr/>
            <p>
            <Link to='/'> Home | </Link>
            <Link to='/users'> Users |</Link>
            <Link to='/posts'> Posts |</Link>
            <Link to='/contact'> Contact </Link></p>
           
           <Route path='/' component={Home} exact={true}/>
           <Route path='/users' component={Users} exact={true}/>
           <Route path='/users/:id' component={UserList}/>
           <Route path='/posts' component={Posts} exact={true}/>
           <Route path='/posts/:id' component={UserShow} exact={true}/>
           <Route path='/contact' component={Contact}/>
        </div>   
    )
}

export default App