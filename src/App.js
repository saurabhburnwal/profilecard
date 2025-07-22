import ProfileCard from "./ProfileCard"
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div className="text-lg text-center font-extrabold font-sans">Personal Digital Assistants
        <div className="flex flex-wrap justify-center gap-4">
            <br />
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana21" image={CortanaImage} />
            <ProfileCard title="Siri" handle="@siri09" image={SiriImage} />
        </div>
        </div>
    )
}

export default App;