import { createSlice } from '@reduxjs/toolkit';

/* [{name: "gbariel", description: "deedo@gmail.com", photoURL: "", message: "Hello People"}] */
export const UserSlice = createSlice({
  name: 'User',
  initialState: 
  {
    User: null,
  },
  
  reducers: {
    login: (state, action) => {
      state.User = action.payload;
    },
    logout: (state) => {
      state.User = null;
    },
  },
  
});

export const { logout, login } = UserSlice.actions;

export const selectUser = (state) => state.User.User;

export default UserSlice.reducer;




















//import { fetchCount } from './counterAPI';

/* const initialState = {
  value: 0,
  status: 'idle',
};
/* extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  }, 

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
); */


/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */