import React, { Component } from 'react'
import './style.css';
export class main extends Component {
    render() {
        return (
            <div>
                <div className="imagemGoogle">
                     <img src="https://img.olhardigital.com.br/uploads/acervo_imagens/2014/05/r16x9/20140527144244_1200_675_-_google__novo_logo.jpg" width="200px"></img>
                </div>
                
                <div className="inputText">
                    <input type="text" placeholder="digite o que deseja pesquisar"></input>
                </div>
                <div id="buttonArea">
                    <button> pesquisar no google</button>
                    <button> estou com sorte </button>
                </div>
                
            </div>
        )
    }
}

export default main
