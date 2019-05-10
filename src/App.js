import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

import Footer from './Footer';
import 'tachyons';


class App extends React.Component{
    render(){
        return(<div>
             <Navbar />
             <Header />
            {/*
            <Footer /> */}
        </div>);
    }
}

export default App;
