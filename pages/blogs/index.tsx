import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout'

type Props = {
  id:number,
  name:string,
  email:string,
  address:object,
  phone:string,
  website:string,
  company:object,


}


const index = ({user}:{user:[Props]})=> {
  // console.log(user.length)
  return (
    <Layout>
      {
          user.map((elem,index)=>{
          return <p>{elem.name}</p>
        })
      }
    </Layout>
  )
}

export const getServerSideProps:GetServerSideProps=async({req,res})=>{
  // res.setHeader()
  const response= await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await response.json();
  // console.log(typeof(data));
  return {
      props:{
        user:data
      },
  }
}

export default index