import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SummitTrustPortal from "./pages/SummitTrustPortal";
import CallBooked from "./pages/CallBooked";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";
import SupportChatWidget from "./components/SupportChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummitTrustPortal />} />
          <Route path="/call-booked" element={<CallBooked />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<Navigate to="/help" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SupportChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
