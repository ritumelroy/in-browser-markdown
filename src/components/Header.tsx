// import { useState } from "react";
import "../styles/global.css";
import doc from "../assets/icon-document.svg";
import iconDelete from "../assets/icon-delete.svg";
import iconSave from "../assets/icon-save.svg";
import { headerProps } from "../models/header";
import { useEffect, useRef, useState } from "react";

export function Header({ navClickToggle, navState, themeState }: headerProps) {
  // const [open, setOpen] = useState(false);

  // const toggleClick = () => {
  //   setOpen((prev) => !prev);
  // };
  // const saveDoc = () => {
  //   dialog.show();
  // };
  // const test = "true";
  const title = "welcome";
  const ref = useRef<HTMLDialogElement>(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [modal]);

  const closeModal = () => {
    setModal(false);
  };

  const handleDelete = () => {
    setModal(true);
  };

  // console.log(navState);
  return (
    <div>
      <dialog
        ref={ref}
        onCancel={closeModal}
        // onClose={testModal}
        className={
          themeState === "dark"
            ? "bg-dark-2 h-[14.5rem] w-[25rem] p-4 rounded-md "
            : "bg-white h-[14.5rem] w-[25rem] p-4 rounded-md "
        }
      >
        <section className="flex flex-col font-robotoslab ">
          <div className="flex justify-between">
            <h1
              className={
                themeState === "dark"
                  ? "text-white text-xl font-medium pt-2"
                  : " text-xl font-medium pt-2"
              }
            >
              Delete this document?
            </h1>
            <button className="mt-1.5" onClick={closeModal}>
              <div className="bg-grey-3 w-5 h-[0.2rem] rotate-45 translate-y-1 rounded-lg"></div>
              <div className="bg-grey-3 w-5 h-[0.2rem] -rotate-45  rounded-lg"></div>
            </button>
          </div>

          <p className="text-base pt-3 text-grey-2 ">
            Are you sure you want to delete the '{title}.md' document and it's
            contents?
          </p>
          <p className="pb-5 text-grey-2">This action cannot be reversed.</p>
        </section>

        <div className="pb-2">
          <button
            className="bg-mark-orange w-full h-12 text-white rounded-md "
            onClick={closeModal}
          >
            Confirm & Delete
          </button>
        </div>
      </dialog>

      <div className="bg-dark-3 h-16 w-screen flex items-center ">
        <button className="grow bg-dark-4 h-16 w-16" onClick={navClickToggle}>
          <div className="flex flex-col gap-1.5 items-center">
            <div
              className={
                "bg-white h-[2px] w-8 " +
                (navState ? "rotate-45 translate-y-2.5" : "")
              }
            ></div>
            <div
              className={"bg-white h-[2px] w-8" + (navState ? "hidden" : "")}
            ></div>
            <div
              className={
                "bg-white h-[2px] w-8 " +
                (navState ? "-rotate-45 -translate-y-1.5" : "")
              }
            ></div>
          </div>
        </button>

        <div className=" w-full flex justify-between items-center">
          <section className="ml-7 flex gap-5">
            <img src={doc} className="object-contain" />
            <p className="text-white "> {title}.md</p>
          </section>

          <section className="flex gap-3 mr-2">
            <button onClick={handleDelete}>
              <img src={iconDelete} className="object-contain" />
            </button>

            <button>
              <div className="bg-mark-orange h-11 w-11 rounded-md ">
                <img
                  src={iconSave}
                  className="object-contain relative top-3.5 left-3.5"
                />
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
