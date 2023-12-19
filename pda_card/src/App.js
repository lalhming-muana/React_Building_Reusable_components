import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import 'bulma/css/bulma.css';

function App(){
    return(
        <div>
        <div>
            <section class="hero is-primary">
                 <div class="hero-body">
                        <p class="title">
                        Personal Digital Assistant
                        </p>
                 </div>
            </section>
            </div>
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                    <ProfileCard 
                        hming="Alexa" 
                        awmna="@alexa234" 
                        milem={AlexaImage}
                        description="Alexa was created by Amazon and helps you buy things"/>
                    </div>

                    <div className="column is-3">
                    <ProfileCard 
                        hming="Cortana" 
                        awmna="@cortana234" 
                        milem={CortanaImage}
                        description="Cortana was created by microsoft. Nobosy knows what it does"/>
                    </div>

                    <div className="column is-3">
                    <ProfileCard 
                        hming="Siri" 
                        awmna="@siri234" 
                        milem={SiriImage}
                        description="Siri was created by Apple. It talks alot"/>
                    </div>
                </div>

            </div>

        </div>
              
        </div>
    );

}

export default App;