import "./App.css";
import { useState } from "react";
import {Ekle} from './components/Ekle'
import {Layout} from './components/Layout'
import {Listele} from './components/Listele'

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
      {/* <div className="container">
        <div className="baslik">başlık</div>
        <div className="content">
          <div className="sol">
            <Ekle onSave={handleKisiEkle} />
            <Listele list={kisiler} />
          </div>
          <div className="sag"  >
            sağ
          </div>
        </div>
      </div> */}
      <Layout sol={<><Ekle onSave={handleKisiEkle} />
            <Listele list={kisiler} /></>}
              sag={"sag"}
              baslik={"baslik artık prop"}
            />
    </div>
  );
}



export default App;
