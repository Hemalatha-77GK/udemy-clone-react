import Navbar from "./components/navbar"
import Categories from './components/categories'
import Runningline from './components/runningline'
import Saleimage from './components/saleimage';
import Coursecard from './components/Coursecard';
import Topics from './components/topics';
import Popular from './components/popular';
import Footer from './components/footer';


function App()
{
return(
    <div>
         <Navbar></Navbar>
  <Categories></Categories>
  <Runningline></Runningline>
  <Saleimage></Saleimage>
  <Coursecard></Coursecard>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
    </div>
)

}
export default App