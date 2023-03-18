import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">{children}</main>

      <footer className="bg-gray-900 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
