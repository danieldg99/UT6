import React, { Component } from 'react';
import Image from 'react-image';

class Selectores extends Component{
    render (){    
        return (
            <div>
                <h2>Selector por atributos</h2>
                <h3>Enlace</h3>
                <a href="#">Sin target</a>
                <a href="#" target="">Con target vacio</a>
                <a href="#" target="_blank">Con target _blank</a>
                <a href="#" target="_self">Con target _self</a>
                <h3>Imagen</h3>
                <Image src={require("./img/k2.jpg")} alt={'Montaña K2'}/>
            </div>
        );
    }
}

export default Selectores;
