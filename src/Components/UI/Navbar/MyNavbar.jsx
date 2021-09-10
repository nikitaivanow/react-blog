import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contex';
import MyButton from '../button/MyButton';

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return ( 
    <div className="navbar">
      <MyButton onClick={()=>logout()}>EXIT</MyButton>
        <div className="navbar__links">
          <Link to="/about">About site</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
   );
}
 
export default NavBar;