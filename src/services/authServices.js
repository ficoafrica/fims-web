import { history } from "../helpers/history";
import authFetch from "./axios";
import { setLoggedIn, setUser } from "../store/auth/authSlice";
import { store } from '../app/store'

const {navigate} = history;


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

const signUp = async(formData) =>{
  const {name, email, password, password2} = formData;
  console.log(history.navigate)

  if (password !== password2){
    console.log("Passwords don't match")
  } else if (password.length < 8){
    console.log("Password must have 8 characters")
  } else {
    try {
      let res = await authFetch.post('account/create-manager/', {email, username: name, password, role: userRoles.manager.id})
      if(res){
        store.dispatch(setLoggedIn(true))
        store.dispatch(setUser(res.data.data))
        console.log("User created")
        localStorage.setItem('access', res.data.token.access);
        localStorage.setItem('refresh', res.data.token.refresh);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        navigate('/auth/workspace')
      }
    } catch (err) {
      console.log(err)
    }
  }
}


const signIn = async(formData) =>{
  try{
    console.log(formData)
    let res = await authFetch.post('account/login/', formData)
    if(res){
        store.dispatch(setLoggedIn(true))
        store.dispatch(setUser(res.data.data))
        console.log("User created")
        localStorage.setItem('access', res.data.token.access);
        localStorage.setItem('refresh', res.data.token.refresh);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        navigate('/auth/workspace')
    }
  } catch (err){
    console.log(err)
  }
}

const initUser = () =>{
  const access = localStorage.getItem('access');
  const user = localStorage.getItem('user')
  if (access && user){
    store.dispatch(setLoggedIn(true))
    store.dispatch(setUser(JSON.parse(user)))
    console.log('restored user')
  } else {
    store.dispatch(setLoggedIn(false))
    store.dispatch(setUser({}))
    console.log('checked user')
  }
}

export {signUp, signIn, initUser}