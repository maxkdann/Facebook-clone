function App() {
  const get = async () => {
    const res = fetch("http://localhost:8000");
    console.log(res);
  };
  get();
  return <div>welcome to frontend</div>;
}

export default App;
