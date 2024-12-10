import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import "../styles/form.css";

export default function SingUp() {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
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

      if (userName === "" || password === "" || userLastName === "" || email === "") {
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
            <h1>Regístrate</h1>
            <label htmlFor="username">Usuario</label>
            <input 
                id="username"
                type="text" 
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Ingresa tu usuario"
            />
            <label htmlFor="userlastname">Apellido</label>
            <input 
                id="userlastname"
                type="text" 
                value={userLastName}
                onChange={e => setUserLastName(e.target.value)}
                placeholder="Ingresa tu apellido"
            />
            <label htmlFor="email">Email</label>
            <input
                id="email" 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Ingresa tu email" 
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
          </form>

          {error && <p className="error-message">{error}</p>}
      </section>
    </DefaultLayout>
  )
}