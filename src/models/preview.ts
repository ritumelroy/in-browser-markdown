export interface previewProps {
  navState: boolean;
  themeState: string;
  textValue: string;
  setPrevState: () => void;
  eyeState: boolean;
  setMobileState: () => void;
  mobileState: boolean;
}

export interface highlighterProps {
  lang: string;
  val: string;
}
