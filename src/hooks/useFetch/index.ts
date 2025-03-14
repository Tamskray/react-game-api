import { useState, useEffect } from "react";
import axios from "axios";
import { Filter, Game } from "../../types";
import { API_KEY, API_HOST } from "./constants";

type Response = {
  games: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: { platform, category: genre, tag, "sort-by": sortBy },
      })
      .then((res) => setGames(res.data))
      .catch((err) => setErr(err.message));
  }, [platform, genre, tag, sortBy]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
