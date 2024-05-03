import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const usersData = [
  { id: 1, name: "Alice Johnson", role: "Administrador" },
  { id: 2, name: "Bob Smith", role: "Usuário" },
  { id: 3, name: "Carol White", role: "Desenvolvedor" },
];

const Users = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expirationDate, setExpirationDate] = useState(new Date());

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Usuários</h2>
      <button onClick={() => setModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Usuário</button>
      <ul className="space-y-2">
        {usersData.map((user) => (
          <li key={user.id} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
            <p className="text-gray-900 font-medium">{user.name}</p>
            <p className="text-gray-500 text-sm">{user.role}</p>
          </li>
        ))}
      </ul>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg space-y-4">
            <h3 className="font-bold text-lg">Registrar Novo Usuário</h3>
            <form>
              <div className="space-y-2">
                <label className="block">
                  Nome:
                  <input type="text" className="mt-1 p-2 block w-full border rounded" placeholder="Nome Completo"/>
                </label>
                <label className="block">
                  Idade:
                  <input type="number" className="mt-1 p-2 block w-full border rounded" placeholder="Idade"/>
                </label>
                <label className="block">
                  Usuário:
                  <input type="text" className="mt-1 p-2 block w-full border rounded" placeholder="Nome de Usuário"/>
                </label>
                <label className="block">
                  Senha:
                  <input type="password" className="mt-1 p-2 block w-full border rounded" placeholder="Senha"/>
                </label>
                <label className="block">
                  Role:
                  <select className="mt-1 p-2 block w-full border rounded">
                    <option>Usuário</option>
                    <option>Vendedor</option>
                  </select>
                </label>
                <label className="block">
                  Data de Expiração:
                  <DatePicker selected={expirationDate} onChange={(date) => setExpirationDate(date)} className="mt-1 p-2 block w-full border rounded"/>
                </label>
              </div>
              <button type="submit" className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Registrar</button>
              <button type="button" onClick={() => setModalOpen(false)} className="ml-2 mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
