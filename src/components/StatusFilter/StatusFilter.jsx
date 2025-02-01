import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filters/actions";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const filterTasks = (evt) => {
    dispatch(setStatusFilter(evt.target.textContent.toLowerCase()));
  };

  return (
    <div className={css.wrapper}>
      <Button onClick={filterTasks} selected={filter === "all" ? true : false}>
        All
      </Button>
      <Button
        onClick={filterTasks}
        selected={filter === "active" ? true : false}
      >
        Active
      </Button>
      <Button
        onClick={filterTasks}
        selected={filter === "completed" ? true : false}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
