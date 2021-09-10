import React, { useContext } from 'react'
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';
import { AuthContext } from '../contex';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return ( 
  <div>
    <h1>Page for login</h1>
    <form onSubmit={login}>
      <MyInput type="text" placeholder= "Enter login" />
      <MyInput type="password" placeholder= "Enter password" />
      <MyButton>Log in</MyButton>
    </form>
  </div>
   );
}
 
export default Login;