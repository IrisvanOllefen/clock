import Layout from './components/layout'
import Time from './components/time'

function HomePage() {  
  return (
      <div className="wrapper">
        <Layout />
        <div className="container">
          <h1 className="title">CLOCK</h1>
          <h2 className="question">What is the time?</h2>
          <h3 className="time"><Time /></h3>
        </div>
      </div>
  )
}

export default HomePage
