import { editorProps } from "../models/editor";
// import eyeclosed from "../assets/icon-hide-preview.svg";
import eyeopen from "../assets/icon-show-preview.svg";
export function Editor({ themeState }: editorProps) {
  //   console.log(navState);
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
        <img src={eyeopen} className=" pr-5 object-contain" />
      </header>

      <main className="h-full z-0">
        <textarea
          name="editor"
          placeholder="Write here ..."
          className={
            " h-full w-full p-5 " +
            (themeState === "dark" ? "bg-dark-1" : "bg-white")
          }
        />
      </main>
    </>
  );
}
