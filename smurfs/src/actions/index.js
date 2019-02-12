/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const GETTINGSMURFS = 'GETTINGSMURFS';
export const ADDINGSMURF = 'ADDINGSMURF';
export const DELETINGSMURF = 'DELETINGSMURF';

export const getSmurfs = () => {
  return dispatch => {
    axios
      .get('http://www.localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        dispatch({type: GETTINGSMURFS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addingSmurf = smurf => {
  return dispatch => {
    axios
      .post('http://www.localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({type: ADDINGSMURF, payload: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deletingSmurf = id => {
  return dispatch => {
    axios
      .delete(`http://www.localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({type: DELETINGSMURF, payload: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  };
};
