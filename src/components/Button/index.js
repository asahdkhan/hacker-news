/* Button component
  Single component for all the buttons
*/
import PropTypes from "prop-types";

const Button = ({ id, label, styles, handleClick }) => {
  return (
    <div id={id} className={styles} onClick={handleClick}>
      <h1>{label}</h1>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
