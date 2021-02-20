import Logo from '../Logo/logo'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'
import Gallery from '../../gallery/gallery'
import { initDevTools } from 'inferno-devtools';
import './layout.css'
initDevTools();

export default function Layout({ props }) {
  return (
    <div
      id={'body'}
    >
      <Logo />
      <Nav />
      {this.props}
      <Gallery />
      <Footer />
    </div>
  )
}

