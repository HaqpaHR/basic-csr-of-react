import axios from 'axios';

export const FETCH_REQUEST_QUERY = 'fetch_request_query';

export const fetchRequestQuery = async (dispatch) => {
  const res = await axios.get('https://httpbin.org/get');

  dispatch({
    type: FETCH_REQUEST_QUERY,
    payload: res,
  });
};
