import React from 'react';
import Alert from 'react-popup-alert'

const Modal = () => {
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })
    
      function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Demo alert',
          show: true
        })
      }
    


    return (
        <>
            

        </>
    );
}

export default Modal;