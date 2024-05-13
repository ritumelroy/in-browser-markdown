import { previewProps } from "../models/preview";
// import eyeclosed from "../assets/icon-hide-preview.svg";
import eyeopen from "../assets/icon-show-preview.svg";
import eyeclose from "../assets/icon-hide-preview.svg";

export function Preview({
  themeState,
  textValue,
  setPrevState,
  eyeState,
  setMobileState,
  mobileState,
}: previewProps) {
  return (
    <>
      <header
        className={
          themeState === "light"
            ? "bg-off-white flex justify justify-between"
            : "bg-dark-2 flex justify justify-between"
        }
      >
        <p className="tracking-widest pl-5  py-3 text-grey-2">PREVIEW</p>
        <button id="prevLarge" onClick={setPrevState}>
          {eyeState ? (
            <img src={eyeclose} className=" pr-5 object-contain" />
          ) : (
            <img src={eyeopen} className=" pr-5 object-contain" />
          )}
        </button>

        <button id="prevSmall" onClick={setMobileState}>
          {mobileState ? (
            <img src={eyeopen} className=" pr-5 object-contain" />
          ) : (
            <img src={eyeclose} className=" pr-5 object-contain" />
          )}
        </button>
      </header>

      <main className="h-full z-0">
        <div
          className={
            " h-full w-full p-5 " +
            (themeState === "dark" ? "bg-dark-1 text-grey-3" : "bg-white")
          }
        >
          {textValue}
        </div>
      </main>
    </>
  );
}
