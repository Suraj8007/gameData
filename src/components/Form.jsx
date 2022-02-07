import { useState, useEffect } from "react";
import "./style.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    gamename: "",
    gameauthor: "",
    gameprice: "",
    gametags: "",
    forkids: true,
    gamedesc: "",
    gamerating: "",
  });
  const [item, setItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://fake-server-suraj8007app.herokuapp.com/games")
      .then((d) => d.json())
      .then((res) => setItem(res));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };
  // console.log(formData);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          //   console.log(formData)
          fetch("https://fake-server-suraj8007app.herokuapp.com/games", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" },
          }).then(getData());
        }}
        id="addgame"
      >
        <input
          onChange={handleChange}
          placeholder="gamename"
          type="text"
          name="gamename"
        ></input>

        <input
          onChange={handleChange}
          placeholder="gameauthor"
          type="text"
          name="gameauthor"
        ></input>

        <input
          onChange={handleChange}
          placeholder="gametags"
          type="text"
          name="gametags"
        ></input>

        <input
          onChange={handleChange}
          placeholder="gameprice"
          type="number"
          name="gameprice"
        ></input>

        <input
          onChange={handleChange}
          placeholder="forkids"
          type="checkbox"
          value= "true"
          name="forkids"
        ></input>
        <textarea name="gamedesc" placeholder="gamedesc"></textarea>

        <select placeholder="gamerating" name="gamerating">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
        </select>

        <input type="submit"></input>
      </form>
      <div>
        <table id="table">
          <thead><tr>gamename</tr></thead>
          <thead><tr>gameauthor</tr></thead>
          <thead><tr>gameprice</tr></thead>
          <thead><tr>gametags</tr></thead>
          <thead><tr>forkids</tr></thead>
          <thead><tr>gamedesc</tr></thead>
          <thead><tr>gamerating</tr></thead>
        </table>

        {item.map((item, index) => (
          // console.log(item).

          <tbody id="table">
            <th>
              <tr>{item.gamename}</tr>
            </th>
            <th>
              <tr>{item.gameauthor}</tr>
            </th>
            <th>
              <tr>{item.gameprice}</tr>
            </th>
            <th>
              <tr>{item.gametags}</tr>
            </th>
            <th>
              <tr>{item.forkids}</tr>
            </th>
            <th>
              <tr>{item.gamedesc}</tr>
            </th>
            <th>
              <tr>{item.gamerating}</tr>
            </th>
          </tbody>
        ))}
      </div>
    </>
  );
};

// "gamename": "Mario",
//       "gameauthor": "Nintendo",
//       "gameprice": "599",
//       "gametags": "adventure, multiplayer",
//       "forkids": "on",
//       "gamedesc": "",
//       "gamerating": "",
//       "id": 10
