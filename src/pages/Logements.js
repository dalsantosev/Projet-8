import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import FicheLogement from '../components/FicheLogement';
import data from '../Logement.json';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';
import Navigation from '../components/Navigation';

const Logements = () => {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    return (
        <div>
            {
                logement ? (

                    <div className='stylePrincipal'>
                        <header>
                            <Logo />
                            <Navigation />
                        </header>

                        <main className='mainLogement'>

                            <FicheLogement />


                        </main>

                        <footer className='footerLogement'>
                            <Footer />
                        </footer>
                    </div >

                ) : (
                    <div>
                        {/* Message d'erreur ou redirection */}
                        <Error404 />
                    </div>
                )}
        </div>
    );
};

export default Logements;