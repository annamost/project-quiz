import { Header } from "./components/Header";
import { Main } from "./components/Main";
import data from "./data.json";

export const App = () => {
  return (
    <div>
      <Header></Header>
      <Main data={data}></Main>
    </div>
  );
};
