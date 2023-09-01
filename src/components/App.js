import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useEffect } from "react";
import { selectTasks } from "./redux/selectors";
import { fetchTasks } from "./redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(selectTasks);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані
  return (
    <Layout>
      {/* <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div> */}
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
