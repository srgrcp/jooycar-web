export interface Paginable<T> {
  data: T[];
  total: number;
}

export interface PaginableParams {
  limit?: number;
  offset?: number;
}
