import React from "react";

class MedItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.med.medName}: {this.props.med.quantity}
                <button onClick={() => this.props.handleTakeProps(this.props.med.id)}>Take</button>
                <button onClick={() => this.props.handleUndoProps(this.props.med.id)} hidden={this.props.med.undoHidden}>Undo</button>
            </li>
        )
    }
}

export default MedItem