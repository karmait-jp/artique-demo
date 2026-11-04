import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuctionProvider } from './state/AuctionContext';
import { Layout } from './components/Layout';
import { HomePage, SalesPage, SalePage, PersonalPage } from './pages/CataloguePages';
import { LotPage } from './pages/LotPage';
import { CheckoutPage, ConfirmationPage, ConsignPage, HowPage, AboutPage, NotesPage, LegalPage, NotFoundPage } from './pages/SupportingPages';
export default function App(){return <AuctionProvider><HashRouter><Routes><Route element={<Layout/>}><Route index element={<HomePage/>}/><Route path="sales" element={<SalesPage/>}/><Route path="sale/:saleId" element={<SalePage/>}/><Route path="lot/:lotId" element={<LotPage/>}/><Route path="my-bids" element={<PersonalPage/>}/><Route path="watchlist" element={<PersonalPage watched/>}/><Route path="checkout/:lotId" element={<CheckoutPage/>}/><Route path="confirmation/:lotId" element={<ConfirmationPage/>}/><Route path="consign" element={<ConsignPage/>}/><Route path="how-it-works" element={<HowPage/>}/><Route path="about" element={<AboutPage/>}/><Route path="demo-notes" element={<NotesPage/>}/><Route path="legal/:page" element={<LegalPage/>}/><Route path="*" element={<NotFoundPage/>}/></Route></Routes></HashRouter></AuctionProvider>;}
