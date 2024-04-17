import "./choose.css"
import buttons from "../resourses/resourses"
import SectionWrapper from "../SectionHOCWrapper/SectionWrapper"
function Choose({ active, isActive }) {
    const handleChange = (newValue) => {
        isActive(newValue);
      };
    return (
        <>

            <h3 className="choose-color__title">Choose your color</h3>
            <p className="choose-color__text">The perfect balance between the purityof hi-fi and the magic of AirPods.
                The ultimate personal audio experience.</p>
            <div className="choose-color__list">

                {buttons.map((elem) => (
                    <button
                        key={elem.index}
                        className={`choose-color-btn ${active === elem.data_button ? 'choose-color-btn--active' : ''}`}
                        onClick={() => handleChange(elem.data_button)}
                        data_button={elem.data_button}
                    >
                        <img src={elem.first_img}/>
                    </button>
                ))}
            </div>


        </>
    )
}

export default SectionWrapper({sectionName:"choose-color", Component:Choose});