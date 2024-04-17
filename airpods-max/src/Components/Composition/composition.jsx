import SectionWrapper from "../SectionHOCWrapper/SectionWrapper"
import "./composition.css"
import buttons from "../resourses/resourses"
function Composition({active}) {
    const composition_item = [
        "The headband is made of breathable mesh, distributing the weight to reduce pressure on the head.",
        "The stainless steel structure is wrapped in a soft-touch material to provide a remarkable harmony between resistance, flexibility and comfort.",
        "The telescoping arms expand and stay in any position you want, allowing you to maintain fit and isolation.",
    ]
    return (
        <>
            <h2 className="composition__title main__title">An extremely original composition.</h2>
            <p className="composition__text">Introducing the reinvention of over-the-ear headphones. From the cushion to the headband, the AirPods Max are designed with acoustic insulation in mind, adapted to many head shapes, so you can immerse yourself in the purity of sound.</p>
            <div className="composition__list">
                <div className="qwerty">
                    {composition_item.map((elem, index) => (
                        <p key={index} className="composition__list-item">
                            {elem}
                        </p>
                    ))}
                </div>
                {buttons.map((elem) => (
                    <img
                        key={elem.index}
                        className={`content-item ${elem.data_button} ${active === elem.data_button ? 'content-item__active' : ''}`}
                        src={elem.side_img}
                    />
                ))}
            </div>
        </>

    )
}
export default SectionWrapper({sectionName:"composition", Component:Composition});