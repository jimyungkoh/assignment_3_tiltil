import Header from "./_components/Header";
import NavigationBar from "./_components/NavigationBar";
import ProvidersLayout from "../layout";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      <NavigationBar />
      {children}
    </div>
  );
}
export default RootLayout;
