export const ProjectsShowcase = (props) => {
    return (
            <div className={props.title}>
                <div className={props.innerTitle}>
                    <span className={props.spanTitle}></span>
                    <div className={props.linkTitle}><a target="_blank" href={props.link}><i className="fa fa-eye"/> ShowCase</a></div>
                </div>
                <div className={props.title2}>
                    <h1><i className="fa fa-terminal"/> {props.projectTitle}</h1>
                    <p>{props.generalInfo} <br/><strong>Detail:</strong><br/>{props.playInfo}</p>
                </div>
            </div>
    )
}


export const ProjectsShowcase2 = (props) => {
    return (
        <div class={props.title}>
            <div class={props.title2}>
                <h1><i className="fa fa-terminal"/> {props.projectTitle}</h1>
                <p>{props.generalInfo}<br /><strong>Detail:</strong><br />{props.playInfo}</p>
            </div>
            <div class={props.title3}>
                <span class={props.title4}></span>
                <div class={props.title5}><a target="_blank" href={props.link}><i className="fa fa-eye"/> ShowCase</a></div>
            </div>
        </div>
    )
}
