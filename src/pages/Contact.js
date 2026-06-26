import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

const quickLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matheus-marquesdrs/' },
  { label: 'GitHub', href: 'https://github.com/MatheusMMarques' },
  { label: 'Currículo', href: '/Matheus_Marques_Curriculo.pdf' },
  { label: 'E-mail', href: 'mailto:matheusdosreis2004@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setEmailSent(false);
    setEmailError('');

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
      setEmailError('Não foi possível enviar agora. Tente novamente ou use os links de contato.');
    }).finally(() => {
      setIsSending(false);
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setEmailSent(false);
    setEmailError('');
  };

  return (
    <section className='contact-container section-container'>
      <div className='infos-content section-inner'>
        <div className='about-me-box portfolio-card'>
          <span className="contact-label section-eyebrow">CONTATO</span>
          <div className='title-contact'>
            <h2>VAMOS CONVERSAR?</h2>
          </div>
          <p>
            Este portfólio reúne parte da minha evolução como desenvolvedor, minha forma de pensar soluções
            e os tipos de projeto que venho explorando.
          </p>
          <p>
            Tenho interesse em backend, APIs, interfaces, integrações, performance e em aprender tecnologias que
            façam sentido para cada contexto.
          </p>
          <p>
            Para trocar uma ideia sobre tecnologia, projetos ou oportunidades futuras, você pode me chamar pelo
            LinkedIn, e-mail ou enviar uma mensagem pelo formulário.
          </p>

          <div className="quick-links tag-list">
            {quickLinks.map((link) => (
              <a className="pill-link" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className='form-content portfolio-card'>
          <div className="form-heading">
            <div className='title-contact'>
              <h2>ENVIE UMA MENSAGEM</h2>
            </div>
            <p>Use o formulário para uma mensagem direta ou escolha um dos links ao lado.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="field-control" htmlFor="name">
                <span>Nome</span>
                <input type="text" id="name" name="name" placeholder='Seu nome' value={formData.name} onChange={handleChange} required />
              </label>
              <label className="field-control" htmlFor="email">
                <span>E-mail</span>
                <input type="email" id="email" name="email" placeholder='Seu e-mail' value={formData.email} onChange={handleChange} required />
              </label>
            </div>
            <label className="field-control" htmlFor="message">
              <span>Mensagem</span>
              <textarea id="message" name="message" placeholder='Conte rapidamente sobre a oportunidade, projeto ou mensagem' value={formData.message} onChange={handleChange} required />
            </label>
            <button className='btn' type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
          <div className="form-feedback" aria-live="polite">
            {emailSent && <p className="success-message">Mensagem enviada com sucesso.</p>}
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
