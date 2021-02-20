import { Component } from 'inferno'
import axios from 'axios'
import './db.json'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageArray: []
    }
  }
  async componentDidMount() {
    let result = await axios('db.json')
    this.setState({ imageArray: result.data })
  }
  render() {
    return (
      <div
        class={'gallery'}>
      </div>
    )
  }
}
