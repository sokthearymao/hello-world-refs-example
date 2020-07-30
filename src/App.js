import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* ErrorBoundary will display an error and return a fallback UI */}
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary> 

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary> 
        
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> 
      </div>
    )
  }
}

export default App
