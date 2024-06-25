import React, { ChangeEvent, ReactElement, useState, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import { Filter } from "../../types";
import GameListRender from "./GameList.render";

const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });
  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <GameListRender err={error} games={games} onFilterChange={onFilterChange} />
  );
};

export default GameList;
