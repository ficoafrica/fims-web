import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  hasFarm: true,
  activeFarm: "",
  firstVisit: true,
  load: true,
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
    },
    setLoad:(state,action)=>{
      state.load = action.payload
    },
    resetAuth:(state)=>{
      state.isLoggedIn = false;
      state.hasFarm = true;
      state.activeFarm = "";
      state.firstVisit = true;
      state.load = true;
      state.farms = [];
      state.user = {};
    }
  }
});

export const { setLoggedIn, setUser, setHasFarms, setFarms, setActiveFarm, setFirstVisit, setLoad, resetAuth } = authSlice.actions;

export default authSlice.reducer;

