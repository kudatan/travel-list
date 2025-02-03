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
  return (
    <div>
      <h1>
        <span>&#128507;</span>Far away<span>&#128507;</span>
      </h1>
    </div>
  );
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need to your trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}
