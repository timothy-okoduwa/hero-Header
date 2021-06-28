import React from 'react'
import style from 'styled-components'
import vid from '../Login/images/bb.mp4'

const Body = () => {
      return (
          <Main>
                <Container>
                <video src={vid} autoPlay ={true} loop={true} muted/>
                <Wrapper>
                      <InfoHead>Know about us...</InfoHead>
                      <Second>What makes us who we ARE!!!</Second>
                      <Third>
                            <Sign>SIGN IN</Sign>
                            <Know>KNOW MORE</Know>

                      </Third>
                </Wrapper>
                </Container>
               
          </Main>
      )
}

export default Body
const Main = style.div `

`

const Container = style.div `
display:flex;
justify-content:center;
align-items:center;
height:70vh;
width:100%;
background-color:#ff8605;
position:relative;
flex-direction:column;
// object-fit:contain;

// border:5px solid;
video{
      object-fit:cover;
      height:70vh;
      width:100%;
     
}
`
const Wrapper = style.div `
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
position:absolute;
color:white;

`
const InfoHead = style.div `
font-size:49px;
font-width:bold;

padding:-4px;
`
const Second = style.div `
padding:10px;
font-size:17px;

`
const Third = style.div `

display:flex;
flex-direction:row;
justify-content:space-between;
// padding:7px;
`
const Sign = style.div `
margin-right:30px;
background-color:red;
width:85px;
height:30px;
padding-left:22px;
padding-top:5px;
border-radius:5px;
cursor:pointer;
display:flex;
jutify-content:center;

`
const Know = style.div `
background-color:gray;
width:110px;
padding-left:10px;
padding-top:6px;
border-radius:5px;
cursor:pointer;

`