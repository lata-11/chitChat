import classes from './addFriendModal.css';
import { Fragment } from 'react';
// import  ReactDOM  from 'react-dom';

const Backdrop = props => {

    return <div className="backdrop"/>
};

const ModalOverlay = props => {
    return <div class="modal">
        <div className='content'>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
   return <Fragment>
   {/* {ReactDOM.createPortal(<Backdrop/>, portalElement )}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)} */}
   </Fragment>
}

export default Modal;