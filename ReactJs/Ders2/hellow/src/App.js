import "./App.css";
import { useState } from "react";

function App() {
  const [kisiler, setKisiler] = useState([]);
  const handleKisiEkle = (isim) => {
    setKisiler([
      ...kisiler,
      { name: isim, number: Math.ceil(Math.random() * 100) + 1 },
    ]);
  };
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid black",
          width: "900px",
          height: "900px",
          flexDirection: "column",
          display: "flex",
          margin: "auto",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            width: "900px",
            height: "100px",
          }}
        >
          başlık
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "900px",
            flexGrow: "1",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              width: "200px",
            }}
          >
            <Ekle onSave={handleKisiEkle} />
            <Listele list={kisiler} />
          </div>
          <div
            style={{
              border: "1px solid black",
              flexGrow: "1",
            }}
          >
            sağ
          </div>
        </div>
      </div>
    </div>
  );
}

//tıklama => event, karşılığı => handler
function Ekle({ onSave }) {
  const [isim, setIsim] = useState("");
  return (
    <>
      <input
      value={isim} // value ya ismi dinletmek gerekiyor
        onChange={(e) => {
          setIsim(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSave(isim);
          setIsim("");//inputun içini boşaltması için
        }}
      >
        Ekle
      </button>
    </>
  );
}

function Listele({ list }) {
  return (
    <ul>
      {list.map((kisi) => (
        <li>
          {kisi.name} - {kisi.number}
        </li>
      ))}
    </ul>
  );
}

export default App;
