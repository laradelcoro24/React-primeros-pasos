import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwittterFollowCard'

export function App() {

  const [name, setName]= useState('laradelcoro24')
  return(

    <section className="App">
      <TwitterFollowCard isFollowing userName={name}>Lara Del Coro</TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="ginadelcoro">Gina Del Coro</TwitterFollowCard>
      

    <button onClick={()=> setName('marita16')}> Cambiar nombre</button>
  </section>
  )
  

}