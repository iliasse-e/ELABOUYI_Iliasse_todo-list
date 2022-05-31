import { TaskType } from "../components/todo-list";

/**
 * Sorts array of TODOs by isDone state
 * (isDone === true) tasks are placed after the (isDone === false) tasks of the array
 * If a (isDone === true) todo task is given as a parameter, it is placed on the bottom of the array
 * @param tasks array of tasks
 * @param task should only be a (isDone === true) taks
 */
export const sortTodos = (tasks: TaskType[], task?: TaskType) => {
  if (task?.isDone) {
    const filteredTasks = tasks.filter(
      (element) => element.title !== task.title
    );
    filteredTasks.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    filteredTasks.push(task);
    return filteredTasks;
  } else {
    tasks.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    return tasks;
  }
};
