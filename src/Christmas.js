import logo from './logo.svg';
import './Christmas.css';

function Christmas() {
    return (
        <div>
            <div className="window">
                <div className="santa">
                    <div className="head">
                        <div className="face">
                            <div className="redhat">
                                <div className="whitepart" />
                                <div className="redpart" />
                                <div className="hatball" />
                            </div>
                            <div className="eyes" />
                            <div className="beard">
                                <div className="nouse" />
                                <div className="mouth" />
                            </div>
                        </div>
                        <div className="ears" />
                    </div>
                    <div className="body" />
                </div>
            </div>
            <div className="message">
                <h1>Merry Christmas!!!</h1>
                <br/>
                <h2>Be thankful for all the blessings you have been gifted from God and Christ.</h2>
                <h2>Merry Christmas to you and your family!!! &nbsp; - &nbsp;   Saroj Kumar Sahoo</h2>
                {/* <h2 className="copyright">pure css Santa Caul made with ♥ by <a href="https://twitter.com/alireza29675" target="_blank">Alireza Sheikholmolouki</a></h2> */}
            </div>
        </div>
    );
}

export default Christmas;
