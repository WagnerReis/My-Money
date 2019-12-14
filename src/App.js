import React from "react"
import useGet from './useGet'

const url = "https://mymoney-react.firebaseio.com/movimentacoes.json";

function App() {
  const data = useGet(url)
  return (
    <div>
      <h1>MyMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
