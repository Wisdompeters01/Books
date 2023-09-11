import React from "react";
import { styled } from "styled-components";
import v from "../assets/img1.jpg"
import u from "../assets/img2.jpg"
import w from "../assets/img3.png"
import x from "../assets/img4.jpg"
import y from "../assets/img5.jpg"
import z from "../assets/img6.jpg"
import CardBox from "./CardBox";

const CardScreen = () => {

  return (
    <div>
      <Container>
        <Main>
          <CardBox Image={v} avatar="K H" avatarName="Kevin Hart" numb="4" bg="aquamarine" bgr="crimson" te="Comedy" tex="I Can't Make this up"/>
          <CardBox Image={u} avatar="D" avatarName="Daniel Micheal" numb="0" bg="skyblue" bgr="darkorange"  te="Music" tex="My Pride"/>
          <CardBox Image={w} avatar="P" avatarName="Peter" numb="7" bg="blue" bgr="lightgray"  te="Training" tex="Today na fire"/>
          <CardBox Image={x} avatar="B" avatarName=" Bukola" numb="25" bg="lightblue" bgr="gold"  te="Resource" tex="Do hard Things"/>
          <CardBox Image={y} avatar="D" avatarName="Denny Black" numb="10" bg="crimson" bgr="dodgerblue"  te="Science" tex="I Can do this"/>
          <CardBox Image={z} avatar="V D" avatarName="Valerian Dc" numb="6" bg="lightgreen" bgr="darkorange"  te="Technology" tex=" Make this work"/>
         
        </Main>
      </Container>
    </div>
  )}

  export default CardScreen;

  const Main = styled.div`
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;


  `
  const Container = styled.div`
  height: 100%;
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `