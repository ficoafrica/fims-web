import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  hasFarm: true,
  activeFarm: "",
  firstVisit: true,
  farms: [],
  user: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn:(state, action)=>{
      state.isLoggedIn = action.payload;
    },
    setUser:(state, action)=>{
      state.user = action.payload;
    },
    setHasFarms:(state, action)=>{
      state.hasFarm = action.payload
    },
    setFarms:(state,action)=>{
      state.farms = action.payload
    },
    setActiveFarm:(state,action)=>{
      state.activeFarm = action.payload
    },
    setFirstVisit:(state,action)=>{
      state.firstVisit = action.payload
    }
  }
});

export const { setLoggedIn, setUser, setHasFarms, setFarms, setActiveFarm, setFirstVisit } = authSlice.actions;

export default authSlice.reducer;

