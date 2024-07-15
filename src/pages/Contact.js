import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      setEmailSent(true);
      setEmailError('');
    }, (error) => {
      console.error('Error sending email:', error.text);
      setEmailError('Erro ao enviar o email. Por favor, tente novamente.');
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
    setEmailSent(false); // Reset the emailSent state when the user modifies the form
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
          {emailSent && <p className="success-message">Email enviado com sucesso!</p>}
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
      </div>
    </section>
  );
}

export default Contact;
