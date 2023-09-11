import styled from "styled-components";
import {BsSearch} from "react-icons/bs";
import img from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <Container>
                <Image>
                    <Logo src={img}/>
                   <NavLink to="/" style={{ textDecoration: "none" }}>
                   <Text>BookStore</Text>
                   </NavLink>
                </Image>

                <End>
                    <Search>
                        <BsSearch/>
                    </Search>
                    <NavLink to="/upload" style={{ textDecoration: "none" }}>
                    <Button>Uploads Books</Button>
                </NavLink>
                </End>
            </Container>
        </div>
    )
}

export default Header;
const Text = styled.div`
font-size: 27px;
font-weight: bold;
color: #000;`

const Button = styled.div`
width: 150px;
height: 40px;
border-radius: 8px;
display: flex;
margin: 10px;
color: white;
font-size: 18px;
font-weight: 500;
margin-right: 50px;
justify-content: center;
align-items: center;
background-color: #e73b7d;
cursor: pointer;
`

const Search = styled.div`
font-size: 17px;
cursor: pointer;
color: #C0C0C0;
margin-top: 7px;
margin-right: 5px;
`

const End = styled.div`
display: flex;
align-items: center;
justify-content: center;`

const Logo = styled.img`
width: 70%;
height: 70%;
cursor: pointer;
object-fit: contain;
`

const Image = styled.div`
height: 50px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
margin: 35px;
color: black;
`

const Container = styled.div`
height: 85px;
width: 100%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
// padding: 20px 2px 20px 2px;
`






































// import React from 'react'
// import {styled} from "styled-components"
// import img from "../assets/logo.jpg"
// // import { BsSearch } from "react-icons/bs";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//         <Container>
//             <Image>
//                 <Logo src={img} /> 
//                 <Text>BookStore</Text>
//             </Image>

//             <End>
//                 <Search>search</Search>
//             </End>

//             <Button>Button</Button>
//         </Container>
//     </div>
//   )
// }

// export default Header;

// const Container = styled.div`
// background-color: crimson;
// height: 50px;
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 20px 10px 20px 0px;
// `;

// const Image = styled.div`
// height: 50px;
// width: 200px;
// background-color: purple;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// const Logo = styled.img`
// width: 100%;
// height: 100%;
// object-fit: contain;
// cursor: pointer;
// `; 

// const End = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// const Search = styled.div`
// font-size: 20px;
// `;

// const Button = styled.div`
// width: 100px;
// height: 30px;
// display: flex;
// align-items: center;
// justify-content: center;
// background-color: #e73b7d;
// `;

// const Text = styled.div`
// font-size: 18px;
// font-weight: border;
// `;

