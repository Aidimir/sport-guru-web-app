import React, {useEffect} from 'react';
import {DollarSign, LineChart, HelpCircle, User, X} from 'lucide-react';
import footballImage from './assets/football.png';
import tennisImage from './assets/tennis.png';
import hockeyImage from './assets/hockey.png';
import guruImage from './assets/guru.png';
import './index.css';


const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);
    const onClose = () => {
        tg.close();
    }
    return (
        <div className="container">
            {/* Logo */}
            <div className="logo">
                <span>EXPRESS<span>1</span></span>
            </div>
            <X className='close-icon' onClick={onClose} size={20}></X>

            {/* Основной контент */}
            <div className="main-content">
                {/* Sports Icons */}
                <div className="sports-icons">
                    <img src={footballImage} alt="Soccer Ball" className="float-animation"/>
                    <img src={tennisImage} alt="Tennis Ball" className="float-animation float-animation-delay-1"/>
                    <img src={hockeyImage} alt="Hockey Puck" className="float-animation float-animation-delay-2"/>
                </div>

                {/* Guru Section */}
                <div className="guru-section">
                    <img src={guruImage} alt="Meditation Guide" className="guru-image"/>
                    <div className="guru-button">WAKE UP GURU</div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-navigation">
                <div className="nav-icons">
                    <div className="nav-item"><DollarSign className="icon"/></div>
                    <div className="nav-item"><LineChart className="icon"/></div>
                    <div className="nav-item"><HelpCircle className="icon"/></div>
                    <div className="nav-item"><User className="icon"/></div>
                </div>
            </div>
        </div>
    );
}

export default App;
