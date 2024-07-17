
import './App.css'
import { TwitterFollowCard } from './TwittterFollowCard'

export function App() {


  return(

    <section className="App">
      <TwitterFollowCard  userName="laradelcoro24" initialIsFollowing={true}>Lara Del Coro</TwitterFollowCard>
      <TwitterFollowCard  userName="ginadelcoro">Gina Del Coro</TwitterFollowCard>
      

   
  </section>
  )
  

}