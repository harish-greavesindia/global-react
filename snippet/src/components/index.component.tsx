import * as React from "react";
import {connect} from "react-redux";
import {SnippetAppStore} from "../redux/store";

class IndexComponent extends React.Component<any , any>{
    render(){
        return <div>
            My React Multi Tier App
        </div>
    }
}

export default connect(
    (store: SnippetAppStore) => {
        return {}
    }
)(IndexComponent);