import { CHANGE_SEARCH_FIELD, 
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
})

export const requestRobots = () => (dispatch) => { //Higer order function
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('htpps://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => ({ REQUEST_ROBOTS_FAILED, payload: error }))
}

