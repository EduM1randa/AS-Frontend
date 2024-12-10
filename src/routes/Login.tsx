import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import "../styles/form.css";
import { useAuth } from "../auth/AuthProvider";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email === "" || password === "") {
          setError("¡Todos los campos son obligatorios!");
          return;
      }
      setError(null);
      setIsLoading(true);

      try {
          // const response = await loginService({ user: userName, password });
          // if (response.success) {
              // setUser([{ userName }]);
              // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
          // } else {
              setError("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
              // Puedes mostrar un mensaje de error específico aquí
          // }
      } catch (error) {
          setError("Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.");
          // Maneja el error aquí
      } finally {
          setIsLoading(false);
      }
  };

  return(
    <DefaultLayout>
      <section className="container">
          <form className="form" onSubmit={handleSubmit}>   
            <h1>Login</h1>
            <label htmlFor="email">Correo Electrónico</label>
            <input 
                id="username"
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Ingresa tu usuario"
            />
            <label htmlFor="password">Contraseña</label>
            <input 
                id="password"
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Cargando ..." : "Iniciar sesión"}
            </button>
            <Link to="/forgot-password" className="forgot-password-link">Olvidé mi contraseña</Link>
          </form>

          {error && <p className="error-message">{error}</p>}
      </section>
    </DefaultLayout>
  )
}