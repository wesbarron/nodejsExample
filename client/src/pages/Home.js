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
        }catch(err){
            console.log(err);
        }
    }
    //write the function to do fetch

    render(){
        const data = this.state.data;
        var results = data.results;
        var itemList = '';
        for(var i = 0; i < results.length; i++){
            itemList += results[i].item + ', ';
        }
        return (
            <h1>Everyone hates react</h1>
            <span>{itemList}</span>
        );
    }
}

export default Home;