import logo from "../assets/logo.svg";
import docu from "../assets/icon-document.svg";
import moon from "../assets/icon-dark-mode.svg";
import sun from "../assets/icon-light-mode.svg";
import { navbarProps } from "../models/navbar";
// border border-dashed border-white
export function Navbar({ colourTheme, toggleColTheme }: navbarProps) {
  console.log(colourTheme);
  const allDocsList = ["untited-documet", "welcome"];
  const date = "01 Apr 2022";
  return (
    <div className="bg-dark-2 w-[300px] h-full pl-7 flex flex-col justify-between">
      <section>
        <header className="h-16 pt-7 ">
          <img src={logo} />
        </header>

        <p className="text-grey-2 tracking-widest pb-5 ">MY DOCUMENTS</p>
        <button className="bg-mark-orange w-[15rem] h-12 text-white rounded-md">
          + New Document
        </button>

        {allDocsList.map((name, k) => (
          <div key={k} className="pt-10 flex gap-3">
            <img src={docu} className="object-contain" />
            <section className="pl-3">
              <p className="text-grey-2 font-light">{date}</p>
              <p className="text-white">{name}.md</p>
            </section>
          </div>
        ))}
      </section>
      <section className="flex gap-1 pb-14">
        <img
          src={sun}
          className={
            // "object-contain" +
            colourTheme === "dark"
              ? "object-contain opacity-35"
              : "object-contain opacity-100"
          }
        />
        <label className="switch ">
          <input type="checkbox" onClick={toggleColTheme} />
          <span className="slider round"></span>
        </label>
        <img
          src={moon}
          className={
            // "object-contain" +
            colourTheme === "light"
              ? "object-contain opacity-35"
              : "object-contain opacity-100"
          }
        />
      </section>
    </div>
  );
}
