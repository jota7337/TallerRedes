
import './colores.css'
function Espacio(){

    return(
        <div>
    <section className="section" id="resume">
        <div className="container">
            <h2 className="mb-5"><span className="text-danger">Mi</span> Resume</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Experencia</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            
                            <h6 className="title text-danger">2019-2020</h6>
                            <p>HTML-CSS</p>
                            <p className="subtitle">En este tiempo lleve acabo mini proyectos en html y css, ya que apenas estab conociendo estas herrmintas en el colegio</p>
                            <hr/>
                            <h6 className="title text-danger">2020-2021</h6>
                            <p>Java</p>
                            <p className="subtitle">En la Universidad del Bosque aprendi a manejar java , haciendo proyectos como sistemas de facturacion , registro y demas</p>
                            <hr/>
                            <h6 className="title text-danger">2021-2022</h6>
                            <p>Herramientas</p>
                            <p className="subtitle">En la Universidad del Bosque aprendi a lo basico de crear paginas web , y nuevas herramienta como SQL , PHYTON , PHP Y otras mas </p>
                            <hr/>
                            <h6 className="title text-danger">2021-2022</h6>
                            <p>Paginas Web / REact /Spring Boot</p>
                            <p className="subtitle">Ahora en estos momentos ando aprendiendo , las paginas web a profundida , manejando react  </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Educacion</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">2020</h6>
                            <p>Colegio Fernando Soto Aparicio</p>
                            <p className="subtitle">En el transcurso de mi tiempo en este colegio, cultivé un profundo aprecio por todo lo relacionado con los sistemas. Fue aquí donde descubrirá la fascinación por entender el funcionamiento interno de las cosas, desde la complejidad de los sistemas informáticos hasta la organización eficiente de procesos. Este entorno educativo me brindó no solo conocimientos sólidos, sino también la oportunidad de explorar y desarrollar habilidades que han influido significativamente en mi percepción del mundo de los sistemas. </p>
                            <hr/>
                            <h6 className="title text-danger">2021-...</h6>
                            <p>Universidad del Bosque </p>
                            <p className="subtitle">n la universidad, encontró un entorno excepcional que ha sido fundamental para mi aprendizaje y aprecio hacia la tecnología. Este espacio académico no solo me ha brindado conocimientos avanzados, sino que también ha fomentado un ambiente estimulante donde la tecnología se convierte en una herramienta poderosa para la innovación y el progreso. A través de cursos, proyectos y la interacción con profesores y compañeros apasionados, desarrolló una comprensión más profunda y una apreciación más rica por las complejidades y posibilidades que ofrece la tecnología. </p>
                            <hr/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Herramientas</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>hTL &amp; CSS</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "97%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <h6>JavaScript</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "85%"}}  aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <h6>pHp</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}}  aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <h6>SQL</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <h6>Java</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <h6>Spring Boot</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Lenguajes</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>Ingles</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            
                            <h6>Español</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
           
        
    );
}

export default Espacio