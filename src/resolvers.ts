import { Resolvers, User } from "./types";
import { validateFullAmenities } from "./helpers";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { dataSources }) => {
      return dataSources.backendAPI.getFeaturedListings();
    },
    listing: (_, { id }, { dataSources }) => {
      return dataSources.backendAPI.getListing(id);
    },
    tasks: (_, __, { dataSources }) => {
      return dataSources.backendAPI.getTasks();
    },
    task: (_, { id }, { dataSources }) => {
      return dataSources.backendAPI.getTask(id);
    },
    user: (_, { id }, { dataSources }) => {
      // return dataSources.backendAPI.getUser(id);
      return dataSources.backendAPI.getActiveUser(id);
    },
    todoList: (_, __, { dataSources }) => {
      return dataSources.backendAPI.getTodoListModel();
    }
  },
  Mutation: {
    createListing: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.backendAPI.createListing(input);
        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          listing: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err}`,
          listing: null
        };
      }
    },
    createTask: async (_, { input }, { dataSources }) => {
      try {
        const response =  await dataSources.backendAPI.createTask(input);

        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          task: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err}`,
          task: null
        };
      }
    },
    updateTask: async (_, {  input }, { dataSources }) => {
      try {
       
        const response = await dataSources.backendAPI.updateTask(input);

        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          task: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err}`,
          task: null
        };
      }
    },
  },
  Listing: {
    amenities: ({ id, amenities }, _, { dataSources }) => {
      return validateFullAmenities(amenities)
        ? amenities
        : dataSources.backendAPI.getAmenities(id);
    }
  },
  TodoList: {
    user: async (parent, _, {dataSources}) => {
       const u = await dataSources.backendAPI.getActiveUser(parent.owner_id);
       return u ;
    
    }
  },
};