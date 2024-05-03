import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Apps from "../components/Apps"; // Supondo que você tenha um componente para Apps
import ServerStatus from "../components/ServerStatus"; // E um para Status do Servidor

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "users":
        return <Users />;
      case "apps":
        return <Apps />;
      case "serverStatus":
        return <ServerStatus />;
      default:
        return <div>Selecione uma opção no menu lateral.</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar onMenuSelect={handleMenuSelect} />
      <main className="flex-1 p-10">{renderContent()}</main>
    </div>
  );
}
