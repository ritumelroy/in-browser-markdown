import { previewProps } from "../models/preview";
// import eyeclosed from "../assets/icon-hide-preview.svg";
import eyeopen from "../assets/icon-show-preview.svg";
import eyeclose from "../assets/icon-hide-preview.svg";

// import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
export function Preview({
  themeState,
  textValue,
  setPrevState,
  eyeState,
  setMobileState,
  mobileState,
}: previewProps) {
  // const
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
        {/* <div
          className={
            " h-full w-full p-5 font-robotoslab " +
            (themeState === "dark" ? "bg-dark-1 text-grey-3" : "bg-white")
          }
        >
          <h1> I am amazing </h1>
        </div> */}
        <div>
          <Markdown
            components={{
              // Map `h1` (`# heading`) to use `h2`s.
              // h1: "h2",
              // tailwind headings are unstyled ..
              h1: ({ ...props }) => (
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    paddingBottom: "1rem",
                  }}
                  {...props}
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  style={{
                    fontSize: "1.75rem",
                    paddingBottom: "1rem",
                    fontWeight: "100",
                  }}
                  {...props}
                />
              ),
              h3: ({ ...props }) => (
                <h3
                  style={{
                    fontSize: "1.5rem",
                    paddingBottom: "1rem",
                    fontWeight: "700",
                  }}
                  {...props}
                />
              ),
              h4: ({ ...props }) => (
                <h4
                  style={{
                    fontSize: "1.25rem",
                    paddingBottom: "1rem",
                    fontWeight: "500",
                  }}
                  {...props}
                />
              ),
              h5: ({ ...props }) => (
                <h5
                  style={{
                    fontSize: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: "400",
                  }}
                  {...props}
                />
              ),
              h6: ({ ...props }) => (
                <h6
                  style={{
                    fontSize: "0.875rem",
                    paddingBottom: "1rem",
                    color: "#e46643",
                  }}
                  {...props}
                />
              ),
              p: ({ ...props }) => (
                <p
                  style={{
                    fontSize: "0.875rem",
                    // paddingBottom: ".5rem",
                    // color: "#7c8187",
                    // fontWeight: "300",
                  }}
                  {...props}
                />
              ),
            }}
            children={textValue}
            remarkPlugins={[remarkGfm]}
            className={
              " h-full w-full p-5 font-robotoslab tracking-wide " +
              (themeState === "dark" ? "bg-dark-1 text-grey-3" : "bg-white")
            }
          />
        </div>
      </main>
    </>
  );
}
