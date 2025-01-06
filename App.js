import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Routes yerine Switch kullanmıyoruz.
import client from './ApolloClient';
import EventList from './EventList';
import EventDetails from './EventDetails';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1 className="app-title">Etkinlikler</h1>
          <Routes>  {/* Switch yerine Routes kullanıyoruz */}
            <Route path="/" element={<EventList />} />  {/* component yerine element kullanıyoruz */}
            <Route path="/events/:id" element={<EventDetails />} />  {/* component yerine element kullanıyoruz */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
