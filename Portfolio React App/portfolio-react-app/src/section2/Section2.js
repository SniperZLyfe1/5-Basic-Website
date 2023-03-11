import ListProjects from "./ListProjects"

const Section2 = () => {
    return (
        <>
            <section className="section section-2" id="section-2">
                <small>- - ------- PORTFOLIO</small>
                <h1><i className="fa fa-code"/> Some of the Projects I've developed</h1>
                <div class="portfolio-container">
                  <ListProjects/>
                </div>
            </section>
        </>
    )
}

export default Section2

