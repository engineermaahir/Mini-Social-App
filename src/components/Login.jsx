import { useState } from "react"

const Login = (props)=> {
  const [username,setUsername] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setUser(username)
  }
  return (
  
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" placeholder="Inter your Username" 
        onChange={(e)=> {
          setUsername(e.target.value)
        }} id="" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login