import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
};