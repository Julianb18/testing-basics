

interface ITodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = (props: { todo: ITodoProps }) => {
  const { id, title, completed } = props.todo;
  // const h1 = <h1>{title}</h1>;
  // const text = completed ? (
  //   <h1 style={{ textDecoration: "line-through" }}>{h1}</h1>
  // ) : (
  //   h1
  // );

  return (
    <div data-testid={id}>
      <h1 className={`${completed ? "line-through" : null}`}>{title}</h1>
    </div>
  );
};
