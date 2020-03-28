import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './style.css';

import api from '../../services/api'

import heroesImg from '../../assets/img/heroes.png'
import logoImg from '../../assets/img/logo.svg'

export default function Logon(props){
    const [id, setId] = useState('')

    const history = useHistory();
    
    async  function handleLogin(e){
            e.preventDefault();
            

            try{
                const response = await api.post('session',{id})
                    localStorage.setItem('ongId', id)
                    localStorage.setItem('ongName', response.data.name);

                    history.push('/profile')

                }catch(err){
                console.log('algo de errado nao esta certo')
            }
        }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input
                     placeholder="Sua ID" 
                     value={id}
                     onChange={ e =>setId(e.target.value)}
                     />
                    <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn  size={16} color="#E02041"/>não tenho cadastro
                        </Link>
                    </form>
                
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}