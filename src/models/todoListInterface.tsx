export interface TodoListInterface {
    todos: { id: string, text: string }[],
    onDeleteTodo: (eventId: string) => void,
}