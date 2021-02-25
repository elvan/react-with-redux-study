// @ts-nocheck

import React from 'react';
import oauthConfig from '../config/oauthConfig';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: oauthConfig.clientId,
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
