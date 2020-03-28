import React ,{ useState } from 'react';


import { Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './style.css';
import logoImg from '../../assets/img/logo.svg';

import api from '../../services/api'


export default function NewIncident() {
    const [title, setTitle] =  useState([])
    const [description, setDescription] =  useState([])
    const [value, setValue] =  useState([])

    const ongId = localStorage.getItem('ongId')
    const history = useHistory()
    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        try{
            await api.post('incidents',data,{
                headers:{
                    Authorization: ongId
                }

            })
            history.push('/profile')
        }catch(err){
            alert('Erro ao cadastrar')
        }
    }


    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft  size={16} color="#E02041"/>Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>

                    <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e =>setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e =>setDescription(e.target.value)}
                    
                    ></textarea>
                    
                    <input 
                    value={value}
                    placeholder="Valores em reais"
                    onChange={e =>setValue(e.target.value)} />
                    
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>

    );
}