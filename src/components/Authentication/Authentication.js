import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { logInUser } from '../../firebase/Authentication';
import { Snackbar } from '@material-ui/core';
import './Authentication.css';

class Authentication extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            snack:{
                message: "",
                open:false
            }
        }
    }

    handleLogIn = () => {
       logInUser().then((res) => {
            const { message, open } = res;
            this.setState({
                snack: { message, open }
            })
       });
    }

    handleClose = () =>{
        this.setState({
            snack:{
                message: "error",
                open: false,
            }
        })
    }

    render() {
      return (
        <div className="authentication">   
            <h1 className = "logo">Quity.</h1>
            <div  className="motto">
                <h1>Nu trebuie sa fii batran ca sa iesi la pensie! </h1>
                    <Button variant="contained" 
                        color="primary" 
                        onClick={()=>this.handleLogIn()}
                        endIcon={<ArrowForwardIcon/>}>
                            Autentificare
                    </Button>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "center" }}
                open={this.state.open}
                message={this.state.message}
                onClose={this.handleClose}>
            </Snackbar>
        </div>
      );
    }
  }
  
  export default Authentication;