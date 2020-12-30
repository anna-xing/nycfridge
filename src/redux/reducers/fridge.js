import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fridges: [],
  loading: false,
  submitted: false,
  currentFridge: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FRIDGE_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.LOAD_FRIDGES:
      return {
        ...state,
        fridges: action.data,
        loading: false
      }
    case actionTypes.GET_FRIDGE:
      return {
        ...state,
        currentFridge: action.data,
        loading: false
      }
    case actionTypes.ADD_FRIDGE_START:
      return {
        ...state,
        loading: true,
        submitted: false
      }
    case actionTypes.SET_CURRENT:
      return {
        ...state,
        currentFridge: action.data
      }
    case actionTypes.CHECK_START: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.ADD_FRIDGE:
      const newFridge = {
        ...action.data,
        id: action.id,
        confirmed: false
      }
      return {
        ...state,
        fridges: state.fridges.concat(newFridge),
        loading: false,
        submitted: true
      }
    case actionTypes.UPDATE_FRIDGE:
      let updatedF = state.fridges.map(f => {
        if (f.id === state.currentFridge){
          f = action.data
        }
        return f;
      });
      return {
        ...state,
        fridges: updatedF,
      }
    case actionTypes.POST_CHECK_IMAGE:
      return {
        ...state,
        currentFridge: {
          ...state.currentFridge,
          imageURL: action.url
        },
        loading:false
      }
    case actionTypes.CHECK_FRIDGE:
    let updatedFridges = state.fridges.map(f => {
        if (f.id === state.currentFridge){
          if (!f.checks) f.checks = {};
          f.checks[action.id] = action.data;
        }
        return {
          ...f,
          lastCheck: action.id
        }
      });
      return {
        ...state,
        fridges: updatedFridges,
      }
      
    case actionTypes.GET_FRIDGE_CHECKS:
      return {
        ...state,
        currentFridge: {
          ...state.currentFridge,
          checks: action.data
        }
      }
    case actionTypes.CONFIRM_FRIDGE:
      const fridges = state.fridges;
      let updated = fridges.map(f => {
        if (f.id === action.id){
          f.confirmed = true;
        }
        return f;
      });
      return {
        ...state,
        fridges: updated,
        currentFridge: {
          ...state.currentFridge,
          confirmed: true
        }
      }
    default: 
      return state;
  }
}

export default reducer;