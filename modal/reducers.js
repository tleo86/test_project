import { OPEN_MODAL, CLOSE_MODAL} from './Actions';

const initialState = (
  isOpen: false
);

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
    return Object.assing({},state,{
      isOpen: true
    });
    case CLOSE_MODAL:
    return Object.assing({},state,{
      isOpen: false
    });

    default:
    return: state;
  }
}


const modalReducer = {
  modal: modalReducer
};
export default ModalReducer;
