import React, { Fragment } from 'react';
import '../styles/App.scss';
import {Container, Row, Col,} from 'react-bootstrap'
import Header from './header'
import Footer from './footer'


export default class App extends React.Component 
{
  render() 
  {
    return (
      <Fragment>
        <Header />
        <div style={{height: '80vh'}}>content</div>
        <Footer />
      </Fragment>
    );
  }
}
