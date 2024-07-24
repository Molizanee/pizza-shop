import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './routes';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme/theme-provider';

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};
