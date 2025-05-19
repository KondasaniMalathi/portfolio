import { useEffect, useState } from 'react'
import { about } from '../../portfolio'
// import logo from '../../assets/logo.png'
import './HomePage.css'

const HomePage = () => {
  const { name, role } = about

  // Typing animation state
  const [typedName, setTypedName] = useState('')
  useEffect(() => {
    if (!name) return undefined
    let i = 0
    const interval = setInterval(() => {
      setTypedName(name.slice(0, i + 1))
      i += 1
      if (i === name.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [name])

  return (
    <div className='about center'>
      {/* <img src={logo} alt='Logo' className='about__logo' /> */}

      {name && (
        <div className='homepage__titles'>
          <h1>
            Hi, I am{' '}
            <span className='about__name'>
              {typedName}
              {typedName.length < (name ? name.length : 0) && (
                <span className='about__cursor'>|</span>
              )}
              .
            </span>
          </h1>
          {role && <h2 className='about__role'>{role}.</h2>}
        </div>
      )}
    </div>
  )
}

export default HomePage
