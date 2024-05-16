export interface editorProps {
  navState: boolean;
  themeState: string;
  setMobileState: () => void;
  mobileState: boolean;
  textInput: string;
  textInputHelper: (inputVal: string) => void;
}
