import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "@styled-icons/material-outlined/Search";

import * as Styled from "./styles";
import { TrackGrid } from "../../components/TrackGrid";
import { BaseTemplate } from "../../templates/Base";
import { getAllTracks, fetchSearchTracks } from "../../store/fetchActions";
import { resetTracks } from "../../store/ducks/tracks";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const dispatch = useDispatch();
  const { tracks, loading } = useSelector((state) => state.tracks);

  const [index, setIndex] = useState(0);
  const search = useRef(null);
  const [searchMode, setSearchMode] = useState(false);
  const limit = useRef(9);

  useEffect(() => {
    if (searchMode) {
      dispatch(
        fetchSearchTracks({
          index,
          limit: limit.current,
          search: search.current.value,
        })
      );
    } else {
      dispatch(getAllTracks({ index, limit: limit.current }));
    }
  }, [dispatch, index, searchMode]);

  const handleReset = () => {
    setIndex(0);
    dispatch(resetTracks());
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.current.value.trim()) return;

    if (searchMode) {
      dispatch(resetTracks());

      dispatch(
        fetchSearchTracks({
          search: search.current.value,
        })
      );

      return;
    }

    handleReset();
    setSearchMode(true);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (!value.trim()) {
      if (searchMode) {
        //evita que o usuário reset a lista de músicas, ao apagar o texto do input, sem ter pesquisado algo antes.
        handleReset();
      }
      setSearchMode(false);
    }
    search.current.value = value;
  };

  const handleLoadMore = () =>
    setIndex((currentIndex) => {
      if (searchMode) {
        return currentIndex + limit.current + 3;
      } else {
        return currentIndex + limit.current;
      }
    });

  return (
    <BaseTemplate>
      {tracks.length === 0 && <Loading isLoading={loading} />}

      <Styled.SearchContainer onSubmit={handleSearch}>
        <Styled.SearchInput
          type="search"
          placeholder="Encontre uma música"
          ref={search}
          onChange={handleChange}
        />
        <button disabled={loading}>
          <Search />
        </button>
      </Styled.SearchContainer>

      <TrackGrid tracks={tracks} loading={loading} />

      <Styled.ButtonContainer>
        {tracks.length > 0 && (
          <Styled.Button onClick={handleLoadMore} disabled={loading}>
            {loading ? "Carregando..." : " Carregar mais"}
          </Styled.Button>
        )}
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
