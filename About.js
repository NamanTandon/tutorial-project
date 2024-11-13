import React from 'react'
import Title from '../components/Title'
import UnorderedList from '../components/UnorderedList'
function About() {
  return (
    <><h1>This is about screens</h1>
   <Title name = {"Naman"}
           roomNo = {"123"}
           empId =  {"33"} 
   
   />
   {/* <Title name = "Sanjay"/>
   <Title name = "Tandon"/> */}
   <UnorderedList/> 
   
   
   
   </>
   
  )
}

export default About
