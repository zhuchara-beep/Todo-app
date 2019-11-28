import React from 'react';
import ProjectContext from '../contexts/ProjectContext';

function Tasks(props) {
    console.info(props);
    return (
        <div></div>
    );
}

/*export default (props) =>
    <ProjectContext.Consumer>
        {(value) => <Tasks project={value}/>}
    </ProjectContext.Consumer>;*/

const withProject = Comp => {
    return () => (
        <ProjectContext.Consumer>
            {value => <Comp project={value}/>}
        </ProjectContext.Consumer>
    )
};

export default withProject(Tasks);