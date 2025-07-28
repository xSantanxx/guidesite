import React from "react";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from 'axios';
import { response } from "express";


function popUpFadeOut(){
  const popUp = document.getElementById("signUpSheet");
  const button = document.getElementById("signInButton");
}

// var changeFade = React.createClass({
//   onClick: function(event){
//     setFade(true);
//     setFade(false);
//   }
// })

function App() {
  

  const sendInfo = (e) => {
    setPost({...post, [e.target.email]: e.target.event})
  }

  const [fadeIn, setFade] = useState(false);
  const [post, setPost] = useState({
    email: '',
    password: ''
  });

  // const []

  const handleSubmit = (event) => {
    event.prevenetDefault();

    const newPost = {
      email,
      password,
    };

    axios
      .post(`http://localhost${import.meta.env.VITE_BACKEND_PORT}:/sendUser`, newPOst)
      .get()
  }


  // function handleSubmit = (event) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3000/sendUser', {post})
  //   .then(response => console.log(response))
  //   .catch(err => console.log(err))
  // }
  return (

      <div className="relative h-screen w-screen bg-indigo-950 grid justify-items-center">
        <div className={`fixed bg-green-500 left-[50%] mt-6 h-20 w-20 rounded-[10vw] flex 
          items-center justify-center outline-3 hover:outline-sky-400 animate-bounce
          top-[25%] transition-all duration-500 ease-out
          ${fadeIn ? "opacity-0" : "opacity-100"}`}>
            <button disabled={fadeIn} type="button" onClick={() => {
              fadeIn ? setFade(false) : setFade(true);
            }}
          className="bg-tranparent px-5 py-5  
          rounded-[10vw] cursor-pointer 
          text-7xl opacity-100">
            !</button>
          </div>
        {/* <div className="relative bg-green-500 
        mt-6 h-20 w-20 rounded-[10vw] 
        flex items-center justify-center
        outline-3 hover:outline-sky-400
        animate-bounce
        top-[25%]"> */}
        {/* </div> */}
        <div className={`flex flex-col overflow-hidden border-2 border-solid fixed h-1/2 w-2xl left-[20%] top-[33%] rounded-2xl bg-rose-200
          transition-all duration-500 ease-in justify-items-center z-40
          ${fadeIn ? "opacity-100" : "opacity-0"}`}>
            <div onSubmit={handleSubmit} className="bg-pink-50 rounded-t-lg justify-items-start grid
            min-h-6 relative">
              <button type="button" onClick={() => setFade(false)} className="bg-red-800 rounded-full w-4 h-4
              hover:animate-pulse absolute left-0.5 top-1 cursor-pointer
              p-2 flex items-center justify-center text-xs
              font-thin text-red-50"
              ><p className="opacity-90 hover:opacity-100 duration-500 text-gray-600/100 
              text-lg">x</p></button>
              <button className="bg-amber-500 w-4 h-4 absolute left-5 top-1
              hover:animate-pulse rounded-full"></button>
              <button className="bg-green-500 w-4 h-4 absolute left-9.5 top-1
              hover:animate-pulse rounded-full"></button>
            </div>
            <h3 className="leading-relaxed text-2xl font-mon relative left-5 top-2
            text-black">Sign in our platform</h3>
            <div className="relative bg-slate-400/20 w-auto rounded-full
            h-1 top-5 mx-4"></div>
            <div className="relative top-10 mx-5 grid grid-cols-1 gap-2">
              <label htmlFor="email">Your Email</label>
              <input type="email" onChange={sendInfo}  placeholder="steve@gmail.com" name="email" className="outline-2 rounded-md
              w-[50%]"/>
            </div>
            <div className="relative top-[15%] mx-5 grid grid-cols-1 gap-2 z-40">
              <label htmlFor="password">Your Password</label>
              <input type="password" onChange={sendInfo} placeholder="●●●●●●●" name="password" className="outline-2 rounded-md
              w-[50%]"/>
            </div>
            <div className="bg-transparent relative items-center top-[20%] mx-5 w-9/10 h-[5%]">
            <div className="justify-evenly">
                <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember Me</label>
                <div className="float-right mr-4">
                  <p className="text-red-400 cursor-pointer
                  hover:underline underline-offset-1">Lost Password?</p>
                </div>
            </div>
              <div className="bg-pink-300/40 hover:bg-pink-400 relative top-[50%] h-15 w-[90%] rounded-[2vw]
              left-[5%]">
                <button onSubmit={handleSubmit} type="button" className="absolute top-4 left-[37%]">
                      Login to your account
                </button>
              </div>
              <div className="relative mt-4 top-[75%] ml-5">
                <p>Not registered? <span className="text-rose-500
                hover:underline cursor-pointer">Create account</span></p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default App
