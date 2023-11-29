import './colores.css'
 function Contacto(){

    return(

        <div>
                <div className="section contact" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-form-card">
                        <h4 className="contact-title">Enviar Un Mensaje</h4>
                        <form action="">
                            <div className="form-group">
                                <input  className="form-control" type="text" placeholder="Nombre *" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email *" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="" placeholder="Mensaje *" rows={7} required></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="submit" className="form-control btn btn-primary" >Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info-card">
                        <h4 className="contact-title">Informacion</h4>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-mobile icon-md"></i>
                            </div>
                            <div className="col-10 ">
                                <h6 className="d-inline">Telefono : <br/> <span className="text-muted">3125910173</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-map-alt icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Dirreción :<br/> <span className="text-muted">Cra 8 a BIS.</span></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-1 pt-1 mr-1">
                                <i className="ti-envelope icon-md"></i>
                            </div>
                            <div className="col-10">
                                <h6 className="d-inline">Email :<br/> <span className="text-muted">jyateb@unbosque.edu.co</span></h6>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
   
    );
 }
 export default  Contacto