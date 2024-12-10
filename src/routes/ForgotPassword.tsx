import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import DefaultLayout from '../layout/DefaultLayout';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // lógica xd
    setTimeout(() => {
      setIsLoading(false);
      navigate('/reset-password');
    }, 2000);
  };

  return (
    <DefaultLayout>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Recuperar Contraseña</h1>
          <label htmlFor="email">Correo Electrónico</label>
          <input 
              id="email"
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
          />
          <button type="submit" disabled={isLoading}>
              {isLoading ? "Enviando ..." : "Enviar código"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </section>
    </DefaultLayout>
  );
}