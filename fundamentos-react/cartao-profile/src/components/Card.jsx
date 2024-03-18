import '../css/main.css'
import Linha from './Linha'
import TextProfile from './TextProfile'
import TextInfos from './TextInfos'
import Button from './Button'
import { useState } from 'react'
export default function Card(props) {

  // value, Funcao modificadora
  const [followText, setFollowText] = useState('Follow')
  function handleClick() {
    if (followText === 'Follow') {
      setFollowText('Unfollow')
    } else {
      setFollowText('Follow')
    }
  }

  return(
    <div className='card'>
      <img className='profile' src='https://github.com/helio2323.png' alt='profile' />
      <TextProfile>
        Helio Lima
        <button className='button' onClick={handleClick}>
        {followText}
        </button>
      </TextProfile>
      <Linha />
      <TextInfos infos='Desenvolvedor Front-End e Back-End' />
     <Linha></Linha> 
      <TextInfos infos='+55 11 99999-9999' />
      <Linha></Linha>
      <TextInfos infos='helio_lima@outlook.com.br' />
      <Linha></Linha>
      <div className='buttons'>
      <Button text='Github' />
      < Button text='Linkedin' />
      <Button text='Twitter' />

      </div>
      
            
    </div>
  )
}