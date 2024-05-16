import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
// import "./styles/global.css";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [colourTheme, setColourTheme] = useState("light");
  const [previewState, setPreviewState] = useState(false);

  const [mobileEditor, setMobileEditor] = useState(true);

  const [markdownInput, setMarkdownInput] = useState("");

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

  const handlePrevieState = () => {
    setPreviewState((prev) => !prev);
  };

  const handleMobileState = () => {
    setMobileEditor((prev) => !prev);
  };

  const handleMarkdownInputChange = (inputVal: string) => {
    setMarkdownInput(inputVal);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden font-roboto ">
      <div className={navOpen ? "" : "hidden"}>
        <Navbar colourTheme={colourTheme} toggleColTheme={toggleTheme} />
      </div>
      {/* flex flex-col */}
      <div className="">
        <Header
          navClickToggle={toggleNav}
          navState={navOpen}
          themeState={colourTheme}
        />
        <div id="main-not-mobile" className="flex w-full h-full ">
          <div
            className={
              " border-r-2 " +
              (colourTheme === "dark" ? "border-grey-1 " : "") +
              (previewState ? "w-0" : "w-1/2")
            }
          >
            <Editor
              navState={navOpen}
              themeState={colourTheme}
              setMobileState={handleMobileState}
              mobileState={mobileEditor}
              textInput={markdownInput}
              textInputHelper={handleMarkdownInputChange}
            />
          </div>
          <div className={previewState ? "w-full" : "w-1/2"}>
            <Preview
              navState={navOpen}
              themeState={colourTheme}
              textValue={markdownInput}
              setPrevState={handlePrevieState}
              eyeState={previewState}
              setMobileState={handleMobileState}
              mobileState={mobileEditor}
            />
          </div>
        </div>
        <div id="main-mobile" className="w-full h-full">
          {mobileEditor ? (
            <Editor
              navState={navOpen}
              themeState={colourTheme}
              setMobileState={handleMobileState}
              mobileState={mobileEditor}
              textInput={markdownInput}
              textInputHelper={handleMarkdownInputChange}
            />
          ) : (
            <Preview
              navState={navOpen}
              themeState={colourTheme}
              textValue="erg"
              setPrevState={handlePrevieState}
              eyeState={previewState}
              setMobileState={handleMobileState}
              mobileState={mobileEditor}
            />
          )}
        </div>
        {/* <Editor navState={navOpen} /> */}
      </div>
    </div>
  );
}

export default App;
