export interface Comment {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export interface CommentData {
  comment: string;
  rating: number;
}
