import Layout from '/components/Layout'

function HomePage() {
  return (
      <div className="wrapper">
        <Layout />
        <div className="container">
          <h1 className="title">CLOCK</h1>
          <h2 className="question">What is the time?</h2>
          <h3 className="time">This is where the time will go</h3>
        </div>
      </div>
  )
}

export default HomePage
