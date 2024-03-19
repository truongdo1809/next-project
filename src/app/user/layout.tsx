import "@/src/app/css/home.css";
import NavbarUser from "../(client)/components/navbar-user";
import Footer from "../(client)/components/footer/Footer";
import HeaderPageUser from "../(client)/components/header-page-user";



const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <HeaderPageUser></HeaderPageUser>
      <div className="flex">
        <NavbarUser></NavbarUser>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UserLayout;
