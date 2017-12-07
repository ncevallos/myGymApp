import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';
import Admin from "../../pages/Admin";

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.state = {user:null};
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-238744.oktapreview.com',
      clientId: '0oad59830wQklq6Ah0h7',
      redirectUri: 'http://localhost:3000',
      authParams: {
        responseType: 'id_token'
      }
    });
  
    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

 componentDidMount(){
    this.widget.session.get((response) => {
      if(response.status !== 'INACTIVE'){
        this.setState({user:response.login});
      }else{
        this.showLogin();
      }
    });
  }

  showLogin(){
    Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
        console.log('HERERERER')
        debugger;
        this.setState({user: response.claims.email});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(){
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }

  render(){
    return(
      <div>
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <Admin></Admin>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>
    );
  }
}