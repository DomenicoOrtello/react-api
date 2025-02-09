import { useState, useEffect } from "react";
export default function Main() {
  const [list, setList] = useState([]);
  const [article, setArticle] = useState({
    title: "",
    autore: "",
    contenuto: "",
    select: "",
    available: false,
  });
  const handleArticle = (fieldName, value) => {
    setArticle((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setList((currentList) => [...currentList, article]);
    setArticle({
      title: "",
      autore: "",
      contenuto: "",
      select: "",
      available: false,
    });
  };
  return (
    <main>
      <div className="container">
        <h1>LISTA</h1>
        <div className="list">
          <ul>
            {list.map((item) => (
              <li key={item.title}>
                {item.title} - {item.autore} - {item.contenuto} - {item.select}{" "}
                - {item.available ? "disponibile" : "non disponibile"}
              </li>
            ))}
          </ul>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="area-testo"
              type="text"
              placeholder="Inserisci il titolo"
              value={article.title}
              onChange={(event) => handleArticle("title", event.target.value)}
            />
            <br />
            <input
              className="area-testo"
              type="text"
              placeholder="Inserisci l'autore"
              value={article.autore}
              onChange={(event) => handleArticle("autore", event.target.value)}
            />
            <br />
            <input
              className="area-testo"
              type="text"
              placeholder="Inserisci il contenuto"
              value={article.contenuto}
              onChange={(event) =>
                handleArticle("contenuto", event.target.value)
              }
            />
            <br />
            <label htmlFor="scelta">Scegli un'opzione:</label>
            <select
              className="select-area"
              value={article.select}
              onChange={(event) => handleArticle("select", event.target.value)}
            >
              <option value="" disabled>
                Selezione opzione
              </option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
            </select>
            <br />
            <label className="checkbox-area">
              <p>Clicca se disponibile</p>
              <input
                type="checkbox"
                value={article.available}
                onChange={(event) =>
                  handleArticle("available", event.target.checked)
                }
              />
            </label>
            <button className="btn">AGGIUNGI</button>
          </form>
        </div>
      </div>
    </main>
  );
}