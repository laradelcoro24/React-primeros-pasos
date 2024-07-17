import './App.css'
import { TwitterFollowCard } from './TwittterFollowCard'

export function App() {
//users renderizados
  const users=[
    {
      userName: 'laradelcoro24',
      name: 'Lara Del Coro',
      isFollowing: true
    },
    {
      userName: 'gina12',
      name: 'Gina Del Coro',
      isFollowing: false
    },
    {
      userName: 'marita16abat',
      name: 'Maria Abatedaga',
      isFollowing: true
    }
  ]

  return(
    <section className="App">
      {
        users.map(user =>{
          const {userName,name,isFollowing}= user
          return(
            
            <TwitterFollowCard 
            key={userName}
            userName={userName} 
            initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
           
          
        })
      }

    </section>
  )

}