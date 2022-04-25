import React from 'react'
class App extends React.Component {
  render() {
    return (
      <>
        <header role="banner">
          <p>Put company logo, etc. here.</p>
        </header>
        <nav role="navigation">
          <ul>
            <li>Put navigation here</li>
          </ul>
        </nav>
        <main role="main">
          <img
            alt="Small thing in screen"
            src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
          />
          <h1>Put main content here.</h1>
        </main>
        <footer role="contentinfo">
          <p>Put copyright, etc. here.</p>
        </footer>
      </>
    )
  }
}

export default App
