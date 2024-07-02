const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between item-cente p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
