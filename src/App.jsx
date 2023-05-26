import { login } from "./utils";
import "./index.css";
import { useEffect, useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. Concluido.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. Concluido.
// todo - Desabilite o botão de Login equanto você está executando o login. Concluido.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login. Concluido.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição. Concluido.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    setIsLoading(true);

    login({ email: email, password: password })
      .then(() => alert("Login Efetuado com sucesso!"))
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });

    console.log("clicou");
  };

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error}</div>}
        <div className='row'>
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='row'>
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='button'>
          <button
            onClick={handleSubmit}
            disabled={email.length === 0 || password.length < 6 || isLoading}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
