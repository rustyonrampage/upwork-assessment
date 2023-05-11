import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { TypeNote } from "types/types";

import styles from "./index.module.css";
import Input from "components/Input";
import Button from "components/Button";
import NoteItem from "components/NoteItem";

const SORT_ORDER = {
  asc: "asc",
  desc: "desc",
};

function NoteList({}) {
  const { notes } = useSelector((state: any) => {
    return { notes: state.notes as TypeNote[] };
  });

  const [sortOrder, setSortOrder] = useState(SORT_ORDER.asc);
  const [search, setSearch] = useState("");
  const sortedNotes = useMemo(() => {
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase())
    );
    return filteredNotes.sort(function (a, b) {
      if (sortOrder === SORT_ORDER.asc) return b.id - a.id;
      else return a.id - b.id;
    });
  }, [search, sortOrder, notes]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <Button
          onClick={() => {
            if (sortOrder === SORT_ORDER.asc) setSortOrder(SORT_ORDER.desc);
            else setSortOrder(SORT_ORDER.asc);
          }}
        >
          Sort By Date
        </Button>
        <Input
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {sortedNotes.map((note, index) => {
          return <NoteItem index={index + 1} note={note} />;
        })}
      </div>
    </div>
  );
}

export default NoteList;
