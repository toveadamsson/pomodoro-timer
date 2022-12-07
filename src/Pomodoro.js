import React, { useState, useEffect } from 'react'
import './Pomodoro.css'
import Image from './images/gear.svg'

function Pomodoro () {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [running])


  return (
    <div className='wrapper'>
      <div className='ring'>
        <svg width='518' height='518' viewBox='0 0 518 518'>
          <circle stroke-width='9px' x='0' y='y' cx='259' cy='259' r='254' />
        </svg>
      </div>

      <div className='timer'>
        <div className='time'>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>

        <button onClick={() => setRunning(true)} className='start'>
          start
        </button>
        <button onClick={() => setRunning(false)} className='start'>
          stop
        </button>
        <button onClick={() => setTime(0)} className='start'>
          reset
        </button>
        <button className='settings'>
          <img src={Image} alt='Settings' />
        </button>
      </div>
    </div>
  )
}

export default Pomodoro
