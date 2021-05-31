import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';


const App = () => {

    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Redirect to="/" />
            <Home />
        </Switch><br/><br/><br/>
        <Footer />
        </>

    )
}

export default App;