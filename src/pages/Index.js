import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

const Index = (props) => {
   // Link 태그 아닌 방식으로 path 전달 및 이동
   const navigate = useNavigate();
   // 기능을 정의하겠다.
   const handleClickMenu = () => {
     // 이전 path 로 가기
     navigate("/home");
   };
  return (
    <>
    <Header handleClickMenu = {handleClickMenu} icon="bt_home.svg">
      My Diary First
    </Header>

    <Main>
      <h2 style={{textAlign:"center", color:"hotpink"}}>웹서비스 첫화면</h2>
      <Link to="/diary">다이어리 가기</Link>
    </Main>

    <Footer>
      <p>Copyright 2023. 첫화면</p>
    </Footer>
    </>
  );
};

Index.propTypes = {}

export default Index