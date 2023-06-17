import React, { useState } from "react";

function Buyer() {
  return <div>Buyer</div>;
}

function Patient() {
  return <div>Patient</div>;
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

function Sidebar() {
  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  )
}

function Home() {
  const [showPatient, setShowPatient] = useState(false);
  const [showBuyer, setShowBuyer] = useState(false);
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}

export { Home };
