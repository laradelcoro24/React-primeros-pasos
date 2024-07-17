
import { useState } from "react"
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({children,userName}) {

    const [isFollowing,setIsFollowing] = useState(false)
    const text = isFollowing ?  'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' 
    const hardleCLick= ()=>{
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`
    return(
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' src={imageSrc} alt="avatar 1" />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={hardleCLick}>
            {text}
          </button>
        </aside>
      </article>
    )
  }