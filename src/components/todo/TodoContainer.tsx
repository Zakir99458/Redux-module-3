import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl space-y-3 p-[5px]">
        {/* <div className="bg-white text-2xl font-bold  p-3 flex justify-center items-center rounded-md">
          <p>There is no pending task..</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos.map((item) => (
            <TodoCard title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
