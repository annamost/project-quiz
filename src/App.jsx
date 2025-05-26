import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import data from "./data.json";
import { useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("👻");
  return (
    <div className="main-content">
      <Header name={name} avatar={avatar}></Header>
      <Main
        data={data}
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
      ></Main>
      <Footer></Footer>
    </div>
  );
};
