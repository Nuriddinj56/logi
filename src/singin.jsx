import  { useEffect, useRef, useState } from 'react'
import Home from './home'
import './singin.css'

function Singin() {
 const name= useRef()
 const email= useRef()
 const password= useRef()
const [showHome, setShowHome]=useState(false)
const localSignup =localStorage.getItem('singup')

useEffect(()=>{
    if(localSignup){
       setShowHome(true)
    }
})

 const handleClick=()=>{
  
    if(
        name.current.value&&email.current.value&&password.current.value
    )
    {
        localStorage.setItem('name',name.current.value)
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
        localStorage.setItem('singup,',password.current.value)
        alert('successfully')
        window.location.reload()
    }
 }
  return (
    <div>
        {showHome?<Home/>:
        <div className="container">
            <div className="input_spase">
                <input placeholder='Name' type="text" ref={name} />
            </div>
            <div className="input_spase">
                <input placeholder='Email' type="text" ref={email} />
            </div>
            <div className="input_spase">
                <input placeholder='Password' type="text" ref={password} />
            </div>
            <button onClick={handleClick}>Sing Un</button>
        </div>
}
    </div>
  )
}

export default Singin