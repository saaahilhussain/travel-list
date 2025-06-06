export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What items would you like to add? : </h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
function Stats() {
  return (
    <footer className="stats">
      <em>You have X in your list, you already added X items (X%) </em>
    </footer>
  );
}
