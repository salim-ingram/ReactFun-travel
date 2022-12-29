import React from "react"
import MedList from "./MedList";
import Header from "./Header";

class CollectionContainer extends React.Component {

  state = {
    meds: [
      {
        id: 1,
        medName: "Lithium",
        quantity: 120,
        undoHidden: true
      },
      {
        id: 2,
        medName: "Adderall",
        quantity: 30,
        undoHidden: true
      },
      {
        id: 3,
        medName: "Lamictal",
        quantity: 25,
        undoHidden: true
      },
      {
        id: 4,
        medName: "Wellbutrin",
        quantity: 25,
        undoHidden: true
      }
    ]
  };

  handleTake = (id) => {
    this.setState(prevState => ({
      meds: prevState.meds.map(med => {
        if (med.id === id) {
        return {
          ...med,
          quantity: med.quantity-1,
          undoHidden: med.undoHidden = false
        }
      }
      return med
      }),
    }));
  };

  handleUndo = (id) => {
    this.setState(prevState => ({
      meds: prevState.meds.map(med => {
        if (med.id === id) {
        return {
          ...med,
          quantity: med.quantity+1
        }
      }
      return med
      }),
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <MedList meds={this.state.meds} handleTakeProps={this.handleTake} handleUndoProps={this.handleUndo} />
      </div>
    );
  }
}
export default CollectionContainer