import { useState } from "react";
import Styled  from "./Ekle.styled";

//tıklama => event, karşılığı => handler
function Ekle({ onSave }) {
  const [isim, setIsim] = useState("");
  return (
    <>
      <Styled>
        <span className="baslik">Buradan kisi ekleyin</span>
        <input
          value={isim} // value ya ismi dinletmek gerekiyor
          onChange={(e) => {
            setIsim(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onSave(isim);
            setIsim(""); //inputun içini boşaltması için
          }}
        >
          Ekle
        </button>
      </Styled>
    </>
  );
}
export default Ekle;
