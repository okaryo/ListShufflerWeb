import * as React from "react"
import * as ReactDOM from "react-dom"
import Header from './components/Header'
import Container from '@material-ui/core/Container'

const App = () => {
  return(
    <div>
      <Header />
      <Container maxWidth="sm">
      </Container>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

export default App