import SectionWrapper from "../SectionHOCWrapper/SectionWrapper"
import "./battery.css"
import buttons from "../resourses/resourses"
function Battery({active}) {
    return (
        <>
            <h2 className="battery__title main__title">It even preserves the battery.</h2>
            <p className="battery__text">When stored in the sleek and lightweight Smart Case , AirPods Max enter a low-power state to save energy.</p>
            {buttons.map((elem,index) => (
                <img
                    key={index}
                    className={`content-item ${elem.data_button} ${active === elem.data_button ? 'content-item__active' : ''}`}
                    src={elem.back_img}
                />
            ))}
            <h2 className="energy__title main__title">Stayin' alive, stayin' alive.</h2>
            <p className="energy__num">20</p>
            <p className="energy__text">hours of music, movies and calls with Active Noise Cancellation and Custom Spatial Audio turned on. 5 And just 5 minutes of charging via the Lightning connector gives you an hour and a half of sound. 6</p>

        </>
    )
}

export default SectionWrapper({sectionName:"battery",Component:Battery});