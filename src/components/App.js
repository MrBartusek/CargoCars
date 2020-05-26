import React, { Fragment } from 'react';
import '../styles/App.scss';
import Header from './Header'
import Footer from './Footer'


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
