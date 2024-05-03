import React, { useState } from "react";
import Modal from "react-modal";

const initialAppsData = [
  {
    id: 1,
    name: "App One",
    version: "1.0.3",
    abi: "64 bits",
    packageName: "com.example.appone",
    apiKey: "abc123",
    isActive: true,
  },
  {
    id: 2,
    name: "App Two",
    version: "2.5.1",
    abi: "32 bits",
    packageName: "com.example.apptwo",
    apiKey: "def456",
    isActive: true,
  },
  {
    id: 3,
    name: "App Three",
    version: "3.8.0",
    abi: "64 bits",
    packageName: "com.example.appthree",
    apiKey: "ghi789",
    isActive: true,
  },
];

// Ensure that modal is attached to the root element in your HTML document
Modal.setAppElement("#__next");

const Apps = () => {
  const [apps, setApps] = useState(initialAppsData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);

  const openModal = (app) => {
    setCurrentApp(app);
    setModalIsOpen(true);
  };
  const toggleAppActivation = (id) => {
    const updatedApps = apps.map((app) =>
      app.id === id ? { ...app, isActive: !app.isActive } : app
    );
    setApps(updatedApps);
  };

  const removeApp = (id) => {
    const updatedApps = apps.filter((app) => app.id !== id);
    setApps(updatedApps);
  };

  const regenerateApiKey = (id) => {
    const newKey = Math.random().toString(36).substring(2, 15);
    const updatedApps = apps.map((app) =>
      app.id === id ? { ...app, apiKey: newKey } : app
    );
    setApps(updatedApps);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = (fields) => {
    const updatedApps = apps.map((app) =>
      app.id === currentApp.id ? { ...app, ...fields } : app
    );
    setApps(updatedApps);
    closeModal();
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700">Aplicativos</h2>
      <ul className="space-y-2">
        {apps.map((app) => (
          <li key={app.id} className="bg-white p-3 rounded shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-900 font-medium">Nome: {app.name}</p>
                <p className="text-gray-500">Versão: {app.version}</p>
                <p className="text-gray-500">ABI: {app.abi}</p>
                <p className="text-gray-500">
                  Nome de Pacote: {app.packageName}
                </p>
                <p className="text-gray-500">API Key: {app.apiKey}</p>
                <p className="text-gray-500">
                  Status: {app.isActive ? "Ativo" : "Desativado"}
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => openModal(app)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => regenerateApiKey(app.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Regenerar API Key
                </button>
                <button
                  onClick={() => toggleAppActivation(app.id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  {app.isActive ? "Desativar" : "Ativar"}
                </button>
                <button
                  onClick={() => removeApp(app.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remover
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit App"
        className="bg-white p-5 rounded shadow-lg outline-none"
      >
        {currentApp && (
          <div>
            <h2>Editando {currentApp.name}</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleEdit({
                  name: event.target.name.value,
                  version: event.target.version.value,
                  abi: event.target.abi.value,
                  packageName: event.target.packageName.value,
                });
              }}
            >
              <label>
                Nome:
                <input
                  type="text"
                  defaultValue={currentApp.name}
                  name="name"
                  required
                />
              </label>
              <label>
                Versão:
                <input
                  type="text"
                  defaultValue={currentApp.version}
                  name="version"
                  required
                />
              </label>
              <label>
                ABI:
                <input
                  type="text"
                  defaultValue={currentApp.abi}
                  name="abi"
                  required
                />
              </label>
              <label>
                Nome de Pacote:
                <input
                  type="text"
                  defaultValue={currentApp.packageName}
                  name="packageName"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 mt-4 rounded"
              >
                Salvar Alterações
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Apps;
