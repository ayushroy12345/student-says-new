import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

// Pages
import Index from "./pages/Index";
import ForSchools from "./pages/ForSchools";
import FoundationProgram from "./pages/FoundationProgram";
import SummerCamp from "./pages/SummerCamp";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Contact from "./pages/Contact";
import SchoolPayment from "./pages/SchoolPayment";
import SummerCampRegistration from "./pages/SummerCampRegistration";
import SummerCampSchoolInquiry from "./pages/SummerCampSchoolInquiry";
import VirtualCamp from "./pages/VirtualCamp";
import VirtualCampRegister from "./pages/VirtualCampRegister";
import SchoolPaymentSuccess from "./pages/SchoolPaymentSuccess";
import SummerCampSuccess from "./pages/SummerCampSuccess";
import SchoolPay from "./pages/SchoolPay";
import SchoolPaySuccess from "./pages/SchoolPaySuccess";
import PaymentFailed from "./pages/PaymentFailed";
import DownloadProposal from "./pages/DownloadProposal";
import PartnerSchools from "./pages/PartnerSchools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/for-schools" element={<ForSchools />} />
                <Route path="/foundation-program" element={<FoundationProgram />} />
                <Route path="/summer-camp" element={<SummerCamp />} />
                <Route path="/virtual-camp" element={<VirtualCamp />} />
                <Route path="/virtual-camp/register" element={<VirtualCampRegister />} />
                <Route path="/about" element={<About />} />
                <Route path="/founder" element={<Founder />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/school-payment" element={<SchoolPayment />} />
                <Route path="/summer-camp-registration" element={<SummerCampRegistration />} />
                <Route path="/summer-camp-school-inquiry" element={<SummerCampSchoolInquiry />} />
                <Route path="/school-payment-success" element={<SchoolPaymentSuccess />} />
                <Route path="/summer-camp-success" element={<SummerCampSuccess />} />
                <Route path="/payment-failed" element={<PaymentFailed />} />
                <Route path="/download-proposal" element={<DownloadProposal />} />
                <Route path="/partner-schools" element={<PartnerSchools />} />
                <Route path="/schoolpay" element={<SchoolPay />} />
                <Route path="/schoolpay-success" element={<SchoolPaySuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
