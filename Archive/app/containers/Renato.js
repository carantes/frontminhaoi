import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import Isvg from 'react-inlinesvg'

import * as Actions from './../actions'

class Renato extends Component {
  render() {
  	let { user } = this.props
    return (
    	 <div>
        <ul className="form__items">
          <li className="form__item">
            <div className="form__item__icon">
              <Isvg src="" />
            </div>
            <div className="form__item__data">
              <h2>Oi, { user.get('email')},</h2>
              <p>Você tem um novo data.tipoProduto da Oi data.terminalContrato.</p>
              <p>Em breve, você terá acesso online a todos os serviços e facilidades da Minha Oi. A gente te avisa por email!</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item__icon conta-desk">
              <Isvg src="/assets/icons/form/conta-desk.svg" />
            </div>
            <div className="form__item__data">
              <h2>Conta online solicitada</h2>
              <p>Para você receber a fatura direto no seu email</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item__icon instalacao-desk">
              <Isvg src="/assets/icons/form/instalacao-desk.svg" />
            </div>
            <div className="form__item__data">
              <h2>Instalação do Fixo</h2>
              <p>Acompanhe a visita do técnico</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item__icon recarga-desk">
              <Isvg src="/assets/icons/form/recarga-desk.svg" />
            </div>
            <div className="form__item__data">
              <h2>Recarga</h2>
              <p>Faça em um recarga online para pré, controle e Oi Galera</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item__icon duvidas-desk">
              <Isvg src="/assets/icons/form/duvidas-desk.svg" />
            </div>
            <div className="form__item__data">
              <h2>Dúvidas Frequentes</h2>
              <p>Veja as perguntas frequentes</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__item__icon fale">
              <Isvg src="/assets/icons/form/fale-desk.svg" />
            </div>
            <div className="form__item__data">
              <h2>Fale com a Oi</h2>
              <p>Veja nossos canais de atendimento</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) { 
  return {
    user : state.App.get('user')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Renato)