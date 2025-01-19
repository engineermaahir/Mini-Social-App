const Header = ({user,setUser}) => {
  return <>
  <span>Welcom {user}!</span>
  <button onClick={() => {
    setUser("")
  }}>Logout</button>
  </>
}

export default Header