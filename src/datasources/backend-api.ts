import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing, Amenity, CreateListingInput, Task, CreateTaskInput, UpdateTaskInput, TaskState, User, TodoList } from "../types";
import db from "./db";
import { ActiveUserModel, TodoListModel } from "../models";

export class BackendAPI extends RESTDataSource {

  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

  getFeaturedListings(): Promise<Listing[]> {
    return this.get<Listing[]>("featured-listings");
  }

  getListing(listingId: string): Promise<Listing> {
    return this.get<Listing>(`listings/${listingId}`);
  }

  getAmenities(listingId: string): Promise<Amenity[]> {
    return this.get<Amenity[]>(`listings/${listingId}/amenities`);
  }

  createListing(listing: CreateListingInput): Promise<Listing> {
    return this.post<Listing>("listings", {
      body: { listing }
    });
  }

  getTasks(): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      let success = true;
      if (success) {
        resolve(db.TaskList as Task[]);
      } else {
        reject("Promise rejected.");
      }
    })
  }

  getTask(taskId: string): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {

      const task = db.TaskList.find(
        t => t.id === taskId
      )
      let success = task ? true : false;
      if (success) {

        resolve(task as Task);
      } else {
        reject("Task is not found.");
      }
    })
  }

  async getTodoList(): Promise<TodoList[]> {
    return new Promise<TodoList[]>((resolve, reject) => {
      let success = true;
      if (success) {
        resolve(db.TodoList as TodoList[]);
      } else {
        reject("Promise rejected.");
      }
    })
  }


  async getTodoListModel(): Promise<TodoListModel[]> {
    return new Promise<TodoListModel[]>((resolve, reject) => {
      let success = true;
      if (success) {
        resolve(db.TodoList as TodoListModel[]);
      } else {
        reject("Promise rejected.");
      }
    })
  }


  getUser (userId: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {

      const user = db.UserList.find(
        t => t.id === userId
      )
      let success = user ? true : false;
      if (success) {

        resolve(user as User);
      } else {
        reject("User is not found.");
      }
    })
  }

  getActiveUser (userId: string): Promise<ActiveUserModel> {
    return new Promise<ActiveUserModel>((resolve, reject) => {

      const _user = db.ActiveUserList.find(
        t => t.id === userId
      )

      const user = { name: `${_user.firstname} ${_user.lastname}`,
       ..._user} 
      let success = user ? true : false;
      if (success) {

        resolve(user);
      } else {
        reject("User is not found.");
      }
    })
  }

  createTask(taskInput: CreateTaskInput): Promise<Task> {

    return new Promise<Task>((resolve, reject) => {

      const { title, state, ownerId } = taskInput
      const task = {
        id: (db.TaskList.length + 1).toString(),
        title, state
      } as Task
      db.TaskList.push(task);
      db.UserList.map(u => {
        if (u.id === ownerId) {
          u.tasks.push(task);
        }
      })

      let success = task ? true : false;
      if (success) {

        resolve(task as Task);
      } else {
        reject("Task is not found.");
      }
    })
  }

  updateTask(taskInput: UpdateTaskInput): Promise<Task> {

    return new Promise<Task>((resolve, reject) => {

      const { title, state, ownerId } = taskInput
      let task = null;
      db.TaskList.map(t => {
        if (t.title === title) {
          t.state = state
          if (t.state === TaskState.TaskArchived) {
            // TODO
          }
          task = t;
        }
      })


      let success = task ? true : false;
      if (success) {

        resolve(task);
      } else {
        reject("Task is not found.");
      }
    })
  }

}