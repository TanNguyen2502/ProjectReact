import './Container.css';

import Detail from "./Detail";
import List from "./List";

const Container = () => {
    return(
        <>
            <div className = "container-fluid">
                <div className = "row">
				    <span className = "col-4 detail"> <Detail/> </span>
                    <span className = "col-8"> <List/> </span>
                </div>
            </div>
        </>
    )
}

export default Container;

