import React, {Component} from 'react';

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }
    
static getDerivedStateFromError(error){

    return{
        error:true
    }
}
// componentDidCatch(){

// }
render(){
    if(this.state.error){
        return <h3>Something went wrong</h3>
    }
    
    return this.props.children
}
}

export default ErrorBoundary