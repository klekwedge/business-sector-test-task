
export interface CurrentPostsState {
  posts: IPost[];
  postsLoadingStatus: ILoadingStatus;
  searchInput: string;
};

export type ILoadingStatus = 'idle' | 'loading' | 'error';

export interface IPost {
  userId: number;
  id: number;
  title: string
  body: string;
};

