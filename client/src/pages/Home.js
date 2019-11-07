import React, {Component} from 'react';

class Home extends Component{
    state = {
        data:null
    }

    componentDidMount(){
        this.callBackEnd();
    }

    callBackEnd = async () => {
        try{
            const resp = await fetch('/api');
            const respJson = await resp.json();
            console.log(respJson);
            this.setState({data:respJson});
        }catch{
            console.log(err);
        }
    }
    //write the function to do fetch

    render(){
        return (
            <h1>Everyone hates react</h1>
        );
    }
}

export default Home;