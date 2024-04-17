import "./SectionHOCWrapper.css"
const SectionWrapper = ({sectionName, Component}) =>
    function HOC({...props}) {
        return (
            <section className={`${sectionName}`}>
                <div className="container">
                    <Component {...props}/>
                </div>
            </section>
        )
    }
export default SectionWrapper;