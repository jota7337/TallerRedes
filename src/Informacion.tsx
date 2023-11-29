import './colores.css'

function Informacion1() {

    return(
  
 

   <div className="contedor">
  
  <div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Quien Soy</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">Ingeniero de Sistemas</h5>
                <p className="mt-20">oy una persona a la que le apasiona la tecnología; mi interés y aprecio por este fascinante campo surgieron durante mis años de colegio. Fue en ese entorno educativo donde descubrirá el emocionante mundo de la tecnología y todas sus posibilidades infinitas. Desde entonces, mi curiosidad por aprender cosas nuevas ha sido una constante en mi vida. Disfruto explorando las últimas innovaciones, adquiriendo nuevos conocimientos y manteniéndome al tanto de las tendencias tecnológicas emergentes.</p>
            
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Informacion Personal</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Cumpleaños</span> : 09/21/2002</li>
                    <li><span>Email</span> : jyateb@unbosque.edu.co</li>
                    <li><span>Telefono</span> : +57 3125910173</li>
                    <li><span>Dirrecion</span> :  Cra 8 a bis / Alemania</li>
                </ul>
                
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Mi Experiencia</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Proyecto 2021</h6>
                        <p className="subtitle"> Java </p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Proyecto 2022</h6>
                        <p className="subtitle">Spring Boot </p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Proyecto 2023</h6>
                        <p className="subtitle">React js</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>

   </div>

   


    );
}

export default Informacion1