import About from './About/About';
import Cases from './Cases/Cases';
import ContactUs from './ContactUs/ContactUs';
import Customers from './Customers/Customers';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Service from './Service/Service';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Service />
        <Cases />
        <FAQ />
        <Customers />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};
