import { useState, useEffect } from 'react'

function getTime() {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const meridian = ''

    // setting hours
    if (hours >= 12) {
      meridian = 'PM'
    } if (hours > 12) {
      hours = hours - 12
    } else {
      meridian = 'AM'
    }
  
    // setting minutes
    if (minutes < 10) {
      minutes = '0' + minutes
    } 
  
    // setting seconds
    if (seconds < 10) {
      seconds = '0' + seconds
    }
  
    return hours + ':' + minutes + ':' + seconds + ' ' + meridian
}
  
function Time() {
    const [currentTime, setCurrentTime] = useState('')
    useEffect(() => {
      const time = getTime()
  
      const timer = setInterval(() => {
        const currentTime = getTime()
        setCurrentTime(currentTime)
      }, 1000)
  
      setCurrentTime(time)
  
      return () => {
        clearInterval(timer)
      }
    }, [])
  
    return <>{currentTime}</>
}
export default Time