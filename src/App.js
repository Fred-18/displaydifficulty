import { DisplayDifficulty } from "../src/components/DisplayDifficulty/DisplayDifficulty";
import { useState } from "react";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  function updateDifficlty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return (
    <div className={s.boss}>
      <h1 className={s.title}>Select your React difficulty</h1>
      <div className={s.container}>
        <MenuList
          onItemClick={updateDifficlty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
