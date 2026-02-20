import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Index from "./pages/Index";
import RegrasPage from "./pages/RegrasPage";
import PraiasPage from "./pages/PraiasPage";
import RestaurantesPage from "./pages/RestaurantesPage";
import PasseiosPage from "./pages/PasseiosPage";
import HospedagemPage from "./pages/HospedagemPage";
import NotFound from "./pages/NotFound";
import LanguagePopup from "./components/LanguagePopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Suspense fallback={null}>
        <Toaster />
        <Sonner />
        <LanguagePopup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/regras" element={<RegrasPage />} />
            <Route path="/praias" element={<PraiasPage />} />
            <Route path="/restaurantes" element={<RestaurantesPage />} />
            <Route path="/passeios" element={<PasseiosPage />} />
            <Route path="/Hospedagem" element={<HospedagemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
