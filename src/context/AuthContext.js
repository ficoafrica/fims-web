import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setUser, setHasFarms, setFarms, setActiveFarm, setFirstVisit, setLoad, resetAuth } from '../store/auth/authSlice';
import authFetch from '../services/axios';
import { toast } from 'react-toastify';

const AuthContext = React.createContext();

const userRoles = {
  manager: {
    id: 1,
    name: 'Manager'
  },
  deputy: {
    id: 2,
    name: 'Deputy'
  },
  worker: {
    id: 3,
    name: 'Worker'
  },
}


const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [loadLayout, setLoadLayout] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = async(formData) =>{
    const {name, email, password, password2} = formData;
    setLoading(true)
    if (password !== password2){
      toast.error("Passwords don't match")
      setLoading(false)
    } else if (password.length < 8){
      toast.error("Password must have 8 characters")
      setLoading(false)
    } else {
      try {
        let res = await authFetch.post('account/create-manager', {email, username: name, password, role: userRoles.manager.name})
        if(res.data.success){
          setLoading(false)
          dispatch(setLoggedIn(true))
          dispatch(setUser(res.data.data))
          dispatch(setHasFarms(false))
          toast.success("User created")
          localStorage.setItem('access', res.data.token.access);
          localStorage.setItem('refresh', res.data.token.refresh);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          navigate('/auth/workspace')
        }
      } catch (err) {
        setLoading(false)
        toast.error(err.response?.data.message)
      }
    }
  }


  const signIn = async(formData) =>{
    try{
      setLoading(true)
      let res = await authFetch.post('account/login', formData)
      if(res.data.success){
          setLoading(false);
          toast.success("User Logged In")
          dispatch(setLoggedIn(true))
          dispatch(setUser(res.data.data))
          localStorage.setItem('access', res.data.token.access);
          localStorage.setItem('refresh', res.data.token.refresh);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          navigate('/auth/workspace')
      }
    } catch (err){
        setLoading(false)
        toast.error("Email or Password is invalid")
    }
  }

  const signOut = async() =>{
    try{
      let refresh = localStorage.getItem('refresh');
      let res = await authFetch.post('account/logout', {refresh_token: refresh})
      if(res) {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        localStorage.removeItem('farms')
        dispatch(resetAuth())
        toast.warn("Logged out")
        navigate('/auth/signin')
      }
    } catch (error){
      console.log(error.response)
    }
  }


  const createFarms = async(formData) =>{
    try {
      setLoading(true)
      let res = await authFetch.post('farm/create-farm', formData)
      if(res.data.success){
        setLoading(false)
        dispatch(setFarms([res.data.data]))
        localStorage.setItem('farms', JSON.stringify({farm: [res.data.data]}))
        toast.success(`Welcome to ${res.data.data.name}`)
        navigate(`/dashboard/${res.data.data.id}`)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.response?.data.message)
    }
  }


  const getFarms = async() =>{
    try {
      setIsLoading(true);
      let res = await authFetch('farm/farms')
      if(res.data.success){
        setIsLoading(false)
        if (res.data.data.length > 0){
          dispatch(setFarms(res.data.data))
          localStorage.setItem('farms', JSON.stringify({farm: res.data.data}))
        } else {
          dispatch(setHasFarms(false))
        }
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error.response?.data.message)
    }
  }


  const viewFarm = async(id, clicked) =>{
    try {
      setLoadLayout(clicked ? false : true)
      setLoading(clicked ? true : false)
      let res = await authFetch(`farm/farm/${id}`)
      if (res.data.success){
        console.log(res.data.message)
        dispatch(setActiveFarm(id))
        dispatch(setFirstVisit(false))
        dispatch(setLoad(false))
        if (clicked) {
          navigate(`/dashboard/${id}`)
          setLoading(false)
          toast.success("Welcome")
        } else {
          dispatch(setHasFarms(true))
          setLoadLayout(false)
        }
      }
    } catch(error) {
      console.log(error.response?.data.message)
      navigate('/auth/workspace')
      setLoadLayout(false)
    }
  }


  const initUser = () =>{
    const access = localStorage.getItem('access');
    const user = localStorage.getItem('user');
    const farms = localStorage.getItem('farms')

    if (access && user){
      dispatch(setLoggedIn(true))
      dispatch(setUser(JSON.parse(user)))
      if (farms){
        dispatch(setFarms(JSON.parse(farms).farm))
      } else {
        dispatch(setHasFarms(false))
      }
      console.log('restored user')
    } else {
      dispatch(setLoggedIn(false))
      dispatch(setUser({}))
      dispatch(setFarms([]))
      console.log('checked user')
    }
  }


  useEffect(()=>{
    initUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        loading,
        isLoading,
        viewFarm,
        getFarms,
        createFarms,
        loadLayout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () =>{
  return useContext(AuthContext)
}

export {AuthContext, AuthProvider}