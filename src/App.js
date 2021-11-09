import React, { Component } from 'react';
import Header from './landing_components/Header'; 
import Footer from './landing_components/Footer'

class App extends React.Component {
    render() { 
        return (<React.Fragment>
            <Header/>
            <Footer/>
        </React.Fragment>);
    }
}
 
export default App;