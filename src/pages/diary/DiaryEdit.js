import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
        <Header>
          <p>My Diary Edit</p>
        </Header>
        <Main>
        <h2 style={{textAlign:"center", color:"violet"}}>다이어리 수정 화면</h2>
        </Main>
        <Footer>
        <p>Copyright 2023. 다이어리 수정 화면</p>
        </Footer>
    </>
  )
}

export default DiaryEdit