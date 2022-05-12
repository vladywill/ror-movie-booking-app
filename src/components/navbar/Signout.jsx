import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Signout = () => (
  <button type="button">
    <FontAwesomeIcon icon={faRightToBracket} />
    <p>Signout</p>
  </button>
);

export default Signout;
