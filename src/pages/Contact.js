import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_00tiis6', 'template_uo0e31o', e.target, 'jLPG2nGVbws-MneN6')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });

    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='contact-container'>
      <div className='infos-content'>
        <div className='about-me-box'>
          <div className='title-contact'>
            <h2>UM POUCO MAIS SOBRE MIM</h2>
          </div>
          <span>
            Meu nome é Matheus Marques dos Reis, natural de Florianópolis/SC. Além de apreciar momentos com minha família e praticar esportes, tenho uma paixão de longa data pela tecnologia. Desde minha formação em Desenvolvimento de Sistemas no SENAI, tenho buscado aprofundar meus conhecimentos em Análise e Desenvolvimento de Sistemas na Faculdade CESUSC. Estou determinado a crescer continuamente, adquirindo novos conhecimentos e habilidades para enfrentar desafios na área de tecnologia. Se você está em busca de um profissional comprometido e entusiasmado, estou pronto para contribuir de forma significativa em seu projeto.
          </span>
        </div>

        <div className='form-content'>
          <div className='title-contact'>
            <h2>CONTATO</h2>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder='Seu Nome' value={formData.name} onChange={handleChange} required />
              <input type="email" id="email" name="email" placeholder='Seu Email' value={formData.email} onChange={handleChange} required />
            </div>
            <textarea id="message" name="message" placeholder='Sua Mensagem' value={formData.message} onChange={handleChange} required />
            <button className='btn' type="submit">Enviar</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact
