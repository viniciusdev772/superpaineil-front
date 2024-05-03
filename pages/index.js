// pages/login.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const Field = ({ label, type, name, value, onChange }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-semibold text-gray-800">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      autoComplete={name}
      required
      className="mt-1 p-2 w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Button = ({ children, isSignup }) => (
  <button
    type="submit"
    className={`w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
      isSignup
        ? "bg-green-600 hover:bg-green-700"
        : "bg-indigo-600 hover:bg-indigo-700"
    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out`}
  >
    {children}
  </button>
);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit:", { email, password, fullName, age });
    router.push("/dashboard");
  };

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-lg rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {isSignup ? "Cadastre-se" : "Acesse sua conta"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{" "}
            <button
              onClick={toggleForm}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
            >
              {isSignup ? "acesse sua conta" : "cadastre-se"}
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Field
                label="Nome Completo"
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Field
                label="Idade"
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </>
          )}
          <Field
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            label="Senha"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button isSignup={isSignup}>
            {isSignup ? "Cadastre-se" : "Acesse"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
