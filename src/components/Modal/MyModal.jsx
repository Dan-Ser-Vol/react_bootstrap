import Modal from 'react-bootstrap/Modal';

const MyModal = ({show, handleClose}) => {


  return (
      <>
        <Modal show={show} onHide={() => handleClose()}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className='embed-container'>
              <iframe src='https://www.youtube.com/embed//LjxulQ1bEWg'
                      allowFullScreen></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
  );

}

export default MyModal;