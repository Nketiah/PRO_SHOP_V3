"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/app/slices/usersApiSlice'
import { setCredentials } from '@/app/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/store'


const LoginPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const router = useRouter()
const dispatch = useAppDispatch()



// you get isLoading, error out of the box
const [login, {isLoading, error}] = useLoginMutation()
const { user } = useAppSelector((state)=> state.auth)



const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
   try {
        //const {data} = await login({email,password}).unwrap()
        if(email === "ab@gmail.com" && password === "1234"){
          const data = {id:"fgfdgfd",username:"kwame",email:"ab@gmail.com"}
           dispatch(setCredentials({...data}))
           router.push("/")
        }
        
   } catch (error) {
     console.log("Error: " + error)
   }
}


useEffect(() => {

if(user){
  router.push("/")
}

}, [user])




  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="email" />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginPage