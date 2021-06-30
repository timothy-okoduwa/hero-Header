import React from "react";
import style from "styled-components";
import s from "./smile.jpg";
const Footer = () => {
  return (
    <Main>
      <Second>
        <Content>
          <Wrap>
            <img src={s} />
            <div style={{ color: "purple", fontwidth: "bolder" }}>
              Timothy O
            </div>
          </Wrap>
          <div style={{ cursor: "pointer" }}>
            <div>our other services</div>
            <div> 'Content here, c</div>
            <div>sometimes on purpos</div>
            <div>Various versions have</div>
            <div>use Lorem Ipsum</div>
            <div>will be distracted by</div>
            <div>t is a long established</div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <div>What is Lorem Ipsum?</div>
            <div>look even slightly</div>
            <div>-characteristic words etc.</div>
            <div>looks reasonable</div>
            <div>embarrassing h</div>
            <div>The generated </div>
            <div>literature from</div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <div>Why do we use it?s</div>
            <div>passage, and</div>
            <div>consectetur, from</div>
            <div>College in Virginia</div>
            <div>literature from</div>
            <div>McClintock, a</div>
            <div>Lorem Ipsum, y</div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <div>Where can I get some?</div>
            <div>1914 translation by H. Rackham</div>
            <div> I will give you a complete</div>
            <div>of human happiness</div>
            <div> velit esse quam nihil</div>
            <div>ullam corporis suscipit</div>
            <div>porro quisquam</div>
          </div>
        </Content>
        <Copy>
          Developed by Codelab team 🚀 ©️ copyright 2021 all rights reserved✔️
        </Copy>
      </Second>
    </Main>
  );
};

export default Footer;

const Main = style.div`
height:200px;
width:100vw;
background-color:green;

`;
const Second = style.div`
height:260px;
width:100vw;
background-color:#1a1a1a;
`;
const Content = style.div`
display:flex;
margin-left:20px;
flex-direction:row;
padding-top:20px;
justify-content:space-around;
color:#ac32e4;


`;
const Copy = style.div`
font-family:poppins;
margin-top:30px;
display:flex;
justify-content:center;
color:#ac32e4;
`;
const Wrap = style.div`
height:85px;
width:90px;
background-color:red;
border-radius:53px;
margin-right:20px;
img{
  height:85px;
  width:90px;
  object-fit:cover;
  border-radius:53px;
  cursor:pointer;
  transition:all 200ms;
transform:scale(1);


&:hover{
  background-color:;
  transform:scale(1.12);
}
}
`;
