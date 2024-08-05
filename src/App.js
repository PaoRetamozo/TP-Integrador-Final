import './COMPONENTES/menu.css';
import "./COMPONENTES/inicio.css";
import "./COMPONENTES/footer.css";
import Inicio from "./COMPONENTES/inicio";
import Sobremi from "./COMPONENTES/sobremi";
import Curriculum from "./COMPONENTES/curriculum";
import Contacto from "./COMPONENTES/contacto";
import Footer from "./COMPONENTES/footer";
import Menu from './COMPONENTES/menu';
function App(){
  return(
    <div>
      <Menu/>
      <Inicio />
      <Sobremi />
      <Curriculum />
      <Contacto />
      <Footer />
    </div>
  )
}
export default App;
