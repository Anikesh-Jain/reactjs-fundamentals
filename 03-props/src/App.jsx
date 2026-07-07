import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Anikesh Jain" age="25" img='https://images.unsplash.com/photo-1617654112368-307921291f42?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFmZXJyYXJpfGVufDB8fDB8fHww' />
      <Card user="Akshat Jain" age="19" img='https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Ali Aamir" age="26" img='https://images.unsplash.com/photo-1644419375107-fe8fbc794d7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D'/>
    </div>
  )
}

export default App
