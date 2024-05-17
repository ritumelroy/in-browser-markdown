import { previewProps } from "../models/preview";
// import eyeclosed from "../assets/icon-hide-preview.svg";
import eyeopen from "../assets/icon-show-preview.svg";
import eyeclose from "../assets/icon-hide-preview.svg";

// import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { ReactNode } from "react";
export function Preview({
  themeState,
  textValue,
  setPrevState,
  eyeState,
  setMobileState,
  mobileState,
}: previewProps) {
  // const

  // type CodeProps = {
  //   node?: unknown;
  //   inline?: boolean;
  //   className?: string;
  //   children: ReactNode;
  //   [key: string]: unknown; // This allows for additional props
  // };
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
        <div className="h-full">
          <Markdown
            components={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              code({ inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={themeState === "light" ? docco : oneDark}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },

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
              "h-full w-full p-5 font-robotoslab tracking-wide " +
              (themeState === "dark" ? "bg-dark-1 text-grey-3" : "bg-white")
            }
          />
        </div>
      </main>
    </>
  );
}

// const HighlighterComponent = ({val, lang}:highlighterProps) => {
//   // const codeString = '(num) => num + 1';
//   return (
//     <SyntaxHighlighter language={lang} style={dark}>
//       {val}
//     </SyntaxHighlighter>
//   );
// };
