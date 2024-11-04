export type ActiveUserModel = {
    name?:String;
    firstname: string,
    lastname: string,
    email: string;
}


export type TodoListModel = {
    id: string;
    title: string;
    state: string;
    owner_id: string;
  };