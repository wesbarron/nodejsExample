import React, { Component } from 'react';

class Home extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI();
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      try{
        const response = await fetch('/api/');
        const initialCow = await response.json();
        console.log(initialCow.text());
        const cow = initialCow.img;
        console.log(cow);
        this.setState({ cow });
      }catch(err){
        console.log(err);
      }
    }
  
  //   callBackendAPI = () => {
  //   console.log('yeah');
  //   var body={}; 
  //   .then(res => {console.log(res); res.json().then(data => {
  //     console.log("data", JSON.stringify(data, null, 4));
  //     this.setState({data})
  //   })});
  //   console.log(this.state.data);
  //   return this.state.data;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        Render the newly fetched data inside of this.state.data
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default Home;