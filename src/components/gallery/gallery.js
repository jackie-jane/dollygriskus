import { Component } from 'inferno'
import './db.json'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageArray: []
    }
  }
  componentDidMount() {
    let db = 'db.json'
    fetch(db).then(data => {
      this.setState({ imageArray: data })
    })
  }
  render() {
    return (
      <div>
        this is a gallery component
      </div>
    )
  }
}
