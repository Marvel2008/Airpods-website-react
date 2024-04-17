import SectionWrapper from "../SectionHOCWrapper/SectionWrapper"
import "./audio.css"
function Audio() {
    return (
        <>
            <div className="audio__inner">
                <div className="audio__box">
                    <p className="audio__text">Custom Spatial Audio with dynamic head tracking provides a surround sound experience worthy of a movie theater. </p>
                    <p className="audio__text">Through built-in gyroscopes and accelerometers, AirPods Max and your iPhone, iPad, Mac or Apple TV detect the slightest head movements and keep the sound steady on your device.</p>
                    <p className="audio__text">And with Apple Music, custom Spatial Audio with dynamic head tracking creates a unique three-dimensional listening experience.</p>
                    <button className="btn">buy</button>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper({sectionName:"audio", Component:Audio});