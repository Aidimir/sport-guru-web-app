import React, {useEffect, useState} from "react";
import {DollarSign, LineChart, HelpCircle, User, X} from "lucide-react";
import footballImage from "./assets/football.png";
import tennisImage from "./assets/tennis.png";
import hockeyImage from "./assets/hockey.png";
import guruImage from "./assets/guru.png";
import "./index.css";

const tg = window.Telegram.WebApp;

function App() {
    const [loading, setLoading] = useState(true); // Состояние загрузки

    useEffect(() => {
        tg.ready();

        // Ждём загрузки изображений
        const images = [footballImage, tennisImage, hockeyImage, guruImage];
        const loadImages = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
            });
        });

        Promise.all(loadImages).then(() => setLoading(false));
    }, []);

    const onClose = () => {
        tg.close();
    };

    return (
        <div className="container">
            {loading ? (
                // 🔥 Экран загрузки
                <div className="logo-loading">
                    EXPRESS<span>1</span>
                </div>
            ) : (
                <>
                    {/* Logo */}
                    <div className="logo">
            <span>
              EXPRESS<span>1</span>
            </span>
                    </div>
                    <X className="close-icon" onClick={onClose} size={20}/>

                    {/* Основной контент */}
                    <div className="main-content">
                        <div className="sports-icons">
                            <img src={footballImage} alt="Soccer Ball" className="float-animation"/>
                            <img src={tennisImage} alt="Tennis Ball"
                                 className="float-animation float-animation-delay-1"/>
                            <img src={hockeyImage} alt="Hockey Puck"
                                 className="float-animation float-animation-delay-2"/>
                        </div>

                        <div className="guru-section">
                            <img src={guruImage} alt="Meditation Guide" className="guru-image"/>
                            <div className="guru-button">WAKE UP GURU</div>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bottom-navigation">
                        <div className="nav-icons">
                            <div className="nav-item">
                                <DollarSign className="icon"/>
                            </div>
                            <div className="nav-item">
                                <LineChart className="icon"/>
                            </div>
                            <div className="nav-item">
                                <HelpCircle className="icon"/>
                            </div>
                            <div className="nav-item">
                                <User className="icon"/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
