import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegrasPage from "./pages/RegrasPage";
import PraiasPage from "./pages/PraiasPage";
import RestaurantesPage from "./pages/RestaurantesPage";
import PasseiosPage from "./pages/PasseiosPage";
import ParceirosPage from "./pages/HopedagemPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/regras" element={<RegrasPage />} />
          <Route path="/praias" element={<PraiasPage />} />
          <Route path="/restaurantes" element={<RestaurantesPage />} />
          <Route path="/passeios" element={<PasseiosPage />} />
          <Route path="/parceiros" element={<HospedagemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
