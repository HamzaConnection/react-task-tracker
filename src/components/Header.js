import PropTypes from 'prop-types';
import Button from './Button';
const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>

      <Button
        color={props.showAdd ? 'red' : 'green'}
        text={props.showAdd ? 'Close' : 'Add'}
        onClick={props.onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.prototype = {
  title: PropTypes.string,
};

export default Header;
