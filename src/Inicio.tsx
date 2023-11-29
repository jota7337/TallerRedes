import './colores.css'
import fondo from './assets/viaje.gif'
function Iniciair(){
 

    return (

        <div>
   <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                   
                    <li className="nav-item">
                        <a href="#about" className="nav-link">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" className="nav-link">Resumen</a>
                    </li>
                </ul>
                <ul className="navbar-nav brand">
                    <img src={fondo} alt="" className="brand-img"/>
                 
                </ul>
                <ul className="navbar-nav ml-auto">
                  
                   
                    <li className="nav-item last-item">
                        <a href="#contact" className="nav-link">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    );

    }
export default Iniciair