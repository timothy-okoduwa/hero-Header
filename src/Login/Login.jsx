import React from 'react'
import style from 'styled-components'
import logo from './images/logo.png'
const Login = () => {
      return (
            <div>
                  <Header>
                    <Logo>
                       <img src={logo} alt='img'/>
                    </Logo>
                       <Buuton>
                           <button>Login</button>
                       </Buuton>
                  </Header>
            </div>
      )
}

export default Login


const Header = style.div `
height:64px;
width:100%;
background-color:#090B13;
display:flex;
justify-content:space-between;
// position:fixed;

`
const Logo = style.div `
height:5px;
width:10px;

`
const Buuton= style.div `
margin-right:20px;
margin-top:15px;
button{
      height:38px;
      width:80px;
}

`