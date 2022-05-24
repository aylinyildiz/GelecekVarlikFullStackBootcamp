import './App.css';
import { useState } from 'react';

//state i çalıştırınca fonksiyon yeniden çalışır. yeni bir görüntü oluşur ve içerik değişir
function App() {
  const [sayi, setSayi]=useState(0)
  const [geriSayim, setGeriSayim] = useState(10)
  return (
    <div className="App">
      <button onClick={()=>{
        setSayi(sayi+1) //batching
        setGeriSayim(geriSayim-1)
      }}>Tıkla</button>
      <Gosterge numara={sayi} renk={sayi > 5 ? "red" : "yellow" }/>
      <Gosterge numara={geriSayim} renk={geriSayim > 5 ? "silver" : "magenta"}/>
    </div>
  );
}

function Gosterge(props){
  return <p
  style={{
    backgroundColor:props.renk
  }}
  >{props.numara}</p>
}

export default App;
