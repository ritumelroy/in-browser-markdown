import { editorProps } from "../models/editor";
// import eyeclosed from "../assets/icon-hide-preview.svg";
import eyeopen from "../assets/icon-show-preview.svg";
export function Editor({
  themeState,
  setMobileState,
  textInput,
  textInputHelper,
}: editorProps) {
  // console.log("hello", themeState);
  return (
    <>
      <header
        className={
          themeState === "light"
            ? "bg-off-white flex justify justify-between"
            : "bg-dark-2 flex justify justify-between"
        }
      >
        <p className="tracking-widest pl-5  py-3 text-grey-2">MARKDOWN</p>

        <button id="markdownEye" onClick={setMobileState}>
          <img src={eyeopen} className=" pr-5 object-contain" />
        </button>
      </header>

      <main className="h-full z-0">
        <textarea
          name="editor"
          placeholder="Write here ..."
          value={textInput}
          onChange={(e) => textInputHelper(e.target.value)}
          className={
            " h-full w-full p-5 font-robotomono size-[0.875rem] " +
            (themeState === "dark" ? "bg-dark-1 text-grey-3" : "bg-white")
          }
        />
      </main>
    </>
  );
}
