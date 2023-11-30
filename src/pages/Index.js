import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Index = (props) => {
  return (
    <>
    <Header>
    <p>My Diary First</p>
    </Header>

    <Main>
      <h2 style={{textAlign:"center", color:"hotpink"}}>웹서비스 첫화면</h2>
    </Main>

    <Footer>
      <p>Copyright 2023. 첫화면</p>
    </Footer>
    </>
  );
};

Index.propTypes = {}

export default Index