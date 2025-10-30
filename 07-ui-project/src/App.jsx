
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {
      img:"https://images.unsplash.com/photo-1761630601886-e90efe7fc081?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2030",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1761430187310-3a53c9eb70cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1761605160673-c364c707f11b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1761646062286-cd2f3c8574dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1952",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Understood"
    },
    {
      img:"https://images.unsplash.com/photo-1761637461022-ac8617bc8993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Dissatisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1761732971027-11ace8c1eb8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1761706660132-7005cbb3644a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit consequuntur voluptates dolorum. Minima, voluptatibus?",
      tag:"Satisfied"
    }
  ]
  return (
    <div>
      <Section1 users = {users} />
      
    </div>
  )
}

export default App
