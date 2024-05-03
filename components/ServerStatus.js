import React from "react";

const ServerStatus = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700">
        Status do Servidor
      </h2>
      <div className="mt-2 p-3 bg-green-200 rounded text-green-800">
        <p>Tudo está operando normalmente.</p>
      </div>
    </div>
  );
};

export default ServerStatus;
