import { Header } from "@/components/header";
import { ThemeProvider } from "@/contexts/ThemeContext";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
      </div>
    </ThemeProvider>
  );
}
