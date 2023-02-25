import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Template(props) {
  return <div id="PAGE_TEMPLATE" className="template--default">
    <Header />
    <main id="main">
      { props.children }
    </main>
    <Footer />
  </div>
}