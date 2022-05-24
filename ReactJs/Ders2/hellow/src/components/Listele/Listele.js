
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

  export default Listele