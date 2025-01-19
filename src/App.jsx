import { useEffect, useState } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
const App = () => {
  const [user,setUser] = useState("")

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `please Login`
  },[user])

  if(!user) return <Login setUser ={setUser}/>

  return <>
  <Header user={user} setUser={setUser}/>
  <CreatePost/>
  </>

}

export default App