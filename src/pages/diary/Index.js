import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Index = () => {
  return (
    <>
    <Header>My Diary</Header>
    <Main>
    <h2 style={{textAlign:"center", color:"yellowgreen"}}>다이어리 첫화면</h2>
    </Main>
    <Footer>
    <p>Copyright 2023. 다이어리 첫화면</p>
    </Footer>
    </>
  )
}

export default Index