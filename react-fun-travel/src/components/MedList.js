import React from "react";
import MedItem from "./MedItem";

class MedList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.meds.map(med => (
                    <MedItem
                        key={med.id} 
                        med={med}
                        handleTakeProps={this.props.handleTakeProps}
                        handleUndoProps={this.props.handleUndoProps}
                    />
                ))}
            </ul>
        )
    }
}

export default MedList