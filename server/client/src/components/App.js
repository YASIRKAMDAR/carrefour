import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import LoginForm from './LoginForm';
import Results from './Results';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/login" component={LoginForm} />
                <Route exact path="/" component={Results} />
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;