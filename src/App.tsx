import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import Article from "./pages/Article";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sport/:category" element={<Category />} />
          <Route path="/news/:category" element={<Category />} />
          <Route path="/teknologi" element={<Category />} />
          <Route path="/entertainment" element={<Category />} />
          <Route path="/news/:category/:slug" element={<Article />} />
          <Route path="/sport/:category/:slug" element={<Article />} />
          <Route path="/teknologi/:slug" element={<Article />} />
          <Route path="/entertainment/:slug" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;