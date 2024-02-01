import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/homePage/homePage';
import { PhonesCatalog } from './pages/catalogPages/phonesCatalog';
import { TabletsCatalog } from './pages/catalogPages/tabletsCatalog';
import { AccessoriesCatalog } from './pages/catalogPages/accessoriesCatalog';
import { FavouritesPage } from './pages/favoritesPage/favouritesPage';
import { CartPage } from './pages/cartPage/cartPage';
import { ProductsContextProvider } from './context/ProductsContext';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/productPage/productPage';
import { CheckoutPage } from './pages/checkoutPage/checkoutPage';
import { ContactPage } from './pages/ContactsPage/ContactsPage';
import { RightsPage } from './pages/RightsPage/RightsPage';

export const Root = () => (
  <ProductsContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="phones/">
            <Route index element={<PhonesCatalog />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>

          <Route path="tablets/">
            <Route index element={<TabletsCatalog />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>

          <Route path="accessories/">
            <Route index element={<AccessoriesCatalog />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>

          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="/rights" element={<RightsPage />} />
        </Route>
      </Routes>
    </Router>
  </ProductsContextProvider>
);
