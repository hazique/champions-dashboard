import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function AxiosSetup(props) {

  let resp;
  axios.defaults.withCredentials = true;

  const classes = useStyles();

  useEffect(() => {

    const credentialsFromSSM = {
      username: '4500116',
      password: 'Dev112233#'
    }

    axios.post("https://okta.dev.brightmls.com/api/v1/authn", credentialsFromSSM, {
      withCredentials: true,
      headers: {
        'SameSite': 'None',
        'Content-Type': 'application/json',
      }
    }).then(
      (response) => {
        resp = response.data;
        console.log(resp);

        axios.get("https://okta.dev.brightmls.com/oauth2/default/v1/authorize",
          {
            params:
            {
              client_id: "0oa162oe57x2HJQwc4x7",
              sessionToken: resp.sessionToken,
              scope: 'openid',
              response_type: 'code',
              redirect_uri: "https://bright-reso.dev.brightmls.com/RESO/OData/"
            },
            headers: {
              'SameSite': 'None',
              'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
              'Access-Control-Allow-Credentials': true,
              'Referrer-Policy': 'origin-when-cross-origin'
            },
            withCredentials: true,
          }
          ).then((response) => {
            console.log(response.data);

          }, (error) => {
            console.log(error.response)
          });

      },
      (error) => {
        console.log(error.response);
      });
  }, []);


  return (
    <div className={classes.root}>

      {resp}

    </div>

  );

}