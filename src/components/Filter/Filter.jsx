import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/app/app-selectors';
import * as actions from '../../redux/app/app-actions';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const change = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <label>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={change}
      />
    </label>
  );
}


export default Filter;