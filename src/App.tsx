import { useState } from "react";
import { Editor } from "./components/Editor";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
// import "./styles/global.css";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [colourTheme, setColourTheme] = useState("light");

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    if (colourTheme === "light") {
      setColourTheme("dark");
    } else if (colourTheme === "dark") {
      setColourTheme("light");
    }
  };
  return (
    <div className="flex h-screen w-screen overflow-hidden font-roboto">
      <div className={navOpen ? "" : "hidden"}>
        <Navbar colourTheme={colourTheme} toggleColTheme={toggleTheme} />
      </div>

      <div className="flex flex-col  ">
        <Header
          navClickToggle={toggleNav}
          navState={navOpen}
          themeState={colourTheme}
        />
        <Editor navState={navOpen} themeState={colourTheme} />
        {/* <Editor navState={navOpen} /> */}
      </div>
    </div>
  );
}

export default App;
