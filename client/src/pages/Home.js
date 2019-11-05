import React, {Component} from 'react';

class Home extends Component {
    state ={
        data: null
    }

    componentWillMount(){
        this.callApiFunction();
    }

    callApiFunction = () => {

    }

    render(){
        return(
            <span>some html</span>
        );
    }
}