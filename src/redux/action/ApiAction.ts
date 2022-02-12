import ACTION_TYPES from './ActionTypes';

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = (data: string) => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchError = (error: string) => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});
