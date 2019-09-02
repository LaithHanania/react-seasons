import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{
    constructor(props){ 
        super(props); 
        this.state = { lat: null, errorMessage: '' };

    }

    componentDidMount(){
        console.log('My component was rendered to the screen');

        window.navigator.geolocation.getCurrentPosition( 
            (position) => {
                this.setState({lat: position.coords.latitude}); 
            }, 
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    componentDidUpdate(){
        console.log('My component was updated - it rerendered!');
    }

    componentWillUnmount(){

    }
    
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){ 
            return <div>Error: {this.state.errorMesage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        else{ 
            return <Spinner message = "Please accept location request"/>
        }
    }


    //React says we have to define render
    //Render is called extremely frequently so don't initiate long processes or requests in it that take time
    //Avoid doing anything other than returning JSX
    render(){ 
        return(
        <div className = "border red">
            {this.renderContent()}
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/*
    //React says we have to define render
    //Render is called extremely frequently so don't initiate long processes or requests in it that take time
    render(){ 
        return (
        <div>
            Latitude: {this.state.lat} <br/>
            Error: {this.state.errorMessage}
        </div>
        ); //{this.state.lat} deferences the state variable lat
           //Since its initialized as null, as long as its null nothing will be printed out for its value
    }
*/