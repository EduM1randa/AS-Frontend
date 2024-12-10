import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import DefaultLayout from '../layout/DefaultLayout';

export default function ResetPassword() {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Aquí iría la lógica para verificar el código y cambiar la contraseña
    // Simulamos un retraso
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <DefaultLayout>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Restablecer Contraseña</h1>
          <label htmlFor="code">Código</label>
          <input 
              id="code"
              type="text" 
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Ingresa el código recibido"
          />
          <label htmlFor="newPassword">Nueva Contraseña</label>
          <input 
              id="newPassword"
              type="password" 
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Ingresa tu nueva contraseña"
          />
          <button type="submit" disabled={isLoading}>
              {isLoading ? "Cargando ..." : "Restablecer contraseña"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </section>
    </DefaultLayout>
  );
}