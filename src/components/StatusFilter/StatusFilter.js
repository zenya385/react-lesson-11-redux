import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../redux/constants";
import { setStatusFilter } from "components/redux/filtersSlice";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { selectStatusFilter } from "components/redux/selectors";
// Імпортуємо об'єкт значень фільтра
export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(selectStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
