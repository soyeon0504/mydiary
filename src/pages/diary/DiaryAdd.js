import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
        <Header handleClickMenu = {handleClickMenu}icon="bt_back.svg">
        <p>My Diary Add</p>

        </Header>
        <Main>
        <h2 style={{textAlign:"center", color:"pink"}}>다이어리 추가 화면</h2>
        </Main>
        <Footer>
        <p>Copyright 2023. 다이어리 추가 화면</p>
        </Footer>
    </>
  )
}

export default DiaryAdd