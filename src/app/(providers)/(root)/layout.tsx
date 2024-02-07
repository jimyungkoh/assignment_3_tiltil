import Header from "./_components/Header";
import NavigationBar from "./_components/NavigationBar";
import ProvidersLayout from "../layout";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersLayout>
      <div id="root">
        <Header />
        <NavigationBar />
        {children}
      </div>
    </ProvidersLayout>
  );
}
export default RootLayout;
