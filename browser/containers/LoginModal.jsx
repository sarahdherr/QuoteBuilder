import React from "react";
import Modal from 'react-modal';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal() {

    }

    render() {
        console.log("LOGIN MODAL")
        return (
            <div>
                <Modal 
                    isOpen={this.props.showLogin}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay">
                    <p>Modal text!</p>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        )
    }
}