import { PaginationQuery } from "./pagination";

export interface GetTasksQuery extends PaginationQuery {
  addedDate: string;
}
