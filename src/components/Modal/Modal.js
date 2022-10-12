import { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { Overlay, Modal } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export class ModalImg extends Component {
   static propTypes = {
        onClose: PropTypes.func.isRequired,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
                  
            if (e.code === 'Escape') {
                
                this.props.onClose()
            }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    render() {
        const { imageURL } = this.props
        
        return createPortal(
            <Overlay  onClick={this.handleBackdropClick}>
                <Modal>
                    <img src={imageURL} alt="" />
                </Modal>
            </Overlay>, modalRoot,
        )
    }
}