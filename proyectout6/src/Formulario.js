import React, { Component } from 'react';


class Formulario extends Component{
    render (){    
        return (
            <div>
                <h3>Formulario</h3>
                <form>
                    <input type="text" placeholder="Nombre..."></input>
                </form>
            </div>
        );
    }
}

export default Formulario;