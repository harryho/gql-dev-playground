let UserList = [
  {
    id: "1", email: "joe@test.com", name: "joe",
    tasks: [{ id: '1', title: 'task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'task 2', state: 'TASK_INBOX' }
    ]
  },
  {
    id: "2", email: "john@test.com", name: "john",
    tasks: [{ id: '3', title: 'task 3', state: 'TASK_INBOX' }]
  },
  {
    id: "3", email: "jake@test.com", name: "jake",
    tasks: [{ id: '3', title: 'task 3', state: 'TASK_INBOX' }]
  },
  { id: "4", email: "jack@test.com", name: "jack" },
]

// Mapping TodoListModel
let TodoList = [
  { id: '1', title: 'task 1', state: 'TASK_INBOX', owner_id: "1" },
  { id: '2', title: 'task 2', state: 'TASK_INBOX', owner_id: "1" },
  { id: '3', title: 'task 3', state: 'TASK_INBOX', owner_id: "2" },
  { id: '4', title: 'task 4', state: 'TASK_INBOX', owner_id: "3" },
]
let TaskList = [
  { id: '1', title: 'task 1', state: 'TASK_INBOX' },
  { id: '2', title: 'task 2', state: 'TASK_INBOX' },
  { id: '3', title: 'task 3', state: 'TASK_INBOX' },
  { id: '4', title: 'task 4', state: 'TASK_INBOX' }]

let ActiveUserList = [
  { id: "1", email: "joe.doe@test.com", firstname: "Joe", lastname: "Doe" , title: "Mr"},
  { id: "2", email: "john.donald@test.com", firstname: "john", lastname: "Donald", title: "Prof" },
  { id: "3", email: "jack.dick@test.com", firstname: "Jack", lastname: "Dick" , title: "Dr"},
]


export default { UserList, TaskList, TodoList ,ActiveUserList }