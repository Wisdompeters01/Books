import React from "react";
import styled from "styled-components";
import vid from "../assets/vid.mp4";
import {FaSearch} from "react-icons/fa";


const Hero = () => {
  const Data = [
    {
      text: "Romance",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Comedy",
    },
    {
      text: "Music",
    },
    {
      text: "Music",
    },
    {
      text: "Romance",
    },
    {
      text: "Music",
    },
    {
      text: "Music",
    },
    {
      text: "Music",
    },
  ]
    return (
      <Container>
         <Contain>
        <video src = {vid} autoPlay playsInline loop muted/>
        <Cover/>

        <Div>
          {Data.map((props) => (
              <Box>{props.text}</Box>
          ))}
        
        </Div> 
        <SubHero>         

          <Div1>
            <h1>Explore the world’s leading Books<br/>and Authors</h1>               
             <p>Millions of designers and agencies around the world showcase their portfolio work <br/> on Dribbble - the home to the world’s best design and creative professionals.</p>
            <InputDiv>
            <Input>
            <FaSearch/>
            <input type="text" placeholder="Search By Author Name" />
            </Input>
            </InputDiv>
          </Div1>
        </SubHero>
      </Contain>

      
      </Container>
    )
}

export default Hero;

// const = styled.div``
// const = styled.div``
// const = styled.div``
// const = styled.div``


const Box = styled.div`
// height: 23px;
// width: 50px;
border-radius: 20px;
padding: 10px 25px;
background-color: rgba(0, 0, 0, 0.3);
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 17px;
font-weight: 500;
cursor: pointer;
&:hover{
  background-color: white;
  color: black;
  font-size: 15px;
  font-weight: 100px;
}
`

const Div = styled.div`
height: 80px;
width: 90%;
// background-color: red;
position: absolute;
top: 150px;
display: flex;
justify-content: center;
align-items: center;
overflow-y: auto;

&::-webkit-scrollbar{
  display: none;
}
`


const Input = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: grey;
background-color: white;
padding: 10px 20px;
border-radius: 30px;
width: 55%;
height: 37px;
input{
  outline-width: 0;
border: 0;
  margin-left: 10px;
  flex: 1;
  font-size: 20px;
  color: gray;
}
`
const InputDiv = styled.div`
height: 11vh;
display: flex;
justify-content: center;
align-items: center;
`

const Div1 = styled.div`
position: absolute;

h1{
  color: white;
  font-size: 30px;
}
p{
  color: white;
}
`

const SubHero = styled.div`
height: 50vh;
width: 45vw;
bottom: 30px;
// background-color: blue;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

`

const Cover = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
position: absolute;
`

const Contain = styled.div`
height: 87vh;
width: 100%;
// background-color: blue;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
video{
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
}
`

const Container = styled.div`
height: 87vh;
width: 100%;
background-color: blue;
position: relative;
`






// import React from "react"; 
// import styled from "styled-components";
// import vid from "../assets/vid.mp4"
// import {FaSearch} from "react-icons/fa";


// const Hero = () => {
  
//   const Data = [
//     {
//       text: "Romance",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Comedy",
//     },
//     {
//       text: "Music",
//     },
//     {
//       text: "Music",
//     },
//     {
//       text: "Romance",
//     },
//     {
//       text: "Music",
//     },
//     {
//       text: "Music",
//     },
//     {
//       text: "Music",
//     },
//   ]
//     return (
//       <Container>
//         <video src = {vid} autoPlay playsInline loop muted/>
//         <Cover/>

//         <SubHero>
//           <Div>
//             {Data.map (({text}) => (
//               <Box bg = "1" cl = "" >{text}</Box>
//             ))}
//           </Div>          

//           <Div1>
//             <h1>Explore the world's leading Books<br/>and Authors</h1>                <p>Millions of designers and agencies around the world showcase their portfolio work <br/> on Dribbble - the home to the world's best design and creative professionals.</p>
//             <InputDiv>
//             <Input>
//             <FaSearch/>
//             <input type="text" placeholder="Search By Author Name" />
//             </Input>
//             </InputDiv>
//           </Div1>



//         </SubHero>
        
//       </Container>
//     )
// }

// export default Hero;

// // const = styled.div``
// // const = styled.div``
// // const = styled.div``
// // const = styled.div``

// const Box = styled.div<{bg: string, cl:string}>`
// height: 100%;
// width: 100%;
// padding: 10px 15px;
// // background-color: rgba(0, 0, 0, 0.5);
// position: absolute;
// `

// const Div = styled.div`
// height: 20%;
// width: 85%;
// display: flex;
// justify-content: space-between ;
// align-items: center;
// font-size: 18px;
// `


// const Input = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 23px;
// color: grey;
// background-color: white;
// padding: 10px;
// border-radius: 24px;
// width: 55%;
// height: 37px;
// input{
//   outline-width: 0;
// border: 0;
//   margin-left: 5px;
//   flex: 1;
//   font-size: 23px;
//   color: gray;
// }
// `
// const InputDiv = styled.div`
// height: 11vh;
// display: flex;
// justify-content: center;
// align-items: center;
// `

// const Div1 = styled.div`
// position: absolute;

// h1{
//   color: white;
//   font-size: 30px;
// }
// p{
//   color: white;
// }
// `

// const SubHero = styled.div`
// height: 50vh;
// width: 45vw;
// bottom: 30px;
// // background-color: blue;
// position: absolute;
// display: flex;
// justify-content: center;
// align-items: center;
// text-align: center;

// `

// const Cover = styled.div`
// width: 100%;
// height: 100%;
// background-color: rgba(0, 0, 0, 0.4);
// position: absolute;
// `

// const Container = styled.div`
// height: 87vh;
// width: 100%;
// // background-color: blue;
// display: flex;
// align-items: center;
// justify-content: center;
// position: absolute;
// video{
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   position: absolute;
// }
// `