export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type Filter = {
  platform: string;
  genre?: string;
  tag?: string;
  sortBy: string;
};
