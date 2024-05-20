export interface headerProps {
  navClickToggle: () => void;
  navState: boolean;
  themeState: string;
  documentTitle: string;
  handleDocumentTitle: (inputVal: string) => void;
}
