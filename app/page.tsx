// pages/_app.tsx
import Navbar from '../components/navbar/navbar';
import FirstMenu from '@/components/firstMenu/firstMenu';
import SecondMenu from '@/components/secondMenu/secondMenu';
import ThirdMenu from '@/components/thirdMenu/thiedMenu';
import FourthMenu from '@/components/fourthMenu/FourthMenu';
import Footer from '@/components/footer/footer';


function MyApp() {
  return (
    <div>
      <Navbar />
      <FirstMenu />
      <SecondMenu />
      <ThirdMenu />
      <FourthMenu />
      <Footer />
    </div>
  );
}

export default MyApp;
