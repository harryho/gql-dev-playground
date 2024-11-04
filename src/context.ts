import { BackendAPI } from "./datasources/backend-api";

export type DataSourceContext = {
  dataSources: {
    backendAPI: BackendAPI;
  };
};