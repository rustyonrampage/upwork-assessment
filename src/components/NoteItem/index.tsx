import React from "react";
import styles from "./index.module.css";
import { TypeNote } from "types/types";
import Button from "components/Button";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNote } from "redux/reducer/notesReducer";

interface Props {
  index: number;
  note: TypeNote;
}

export default function NoteItem({ index, note }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = new Date(note.id);
  return (
    <div className={styles.note}>
      <div className={styles.noteControls}>
        <h3 className={styles.title}>
          #{index} {note.title}
        </h3>
        <div>
          <Button onClick={() => navigate(`/edit/${note.id}`)}>Edit</Button>
          <Button
            onClick={() => dispatch(removeNote(note.id))}
            style={{
              backgroundColor: "#d70606",
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <p className={styles.description}>{note.description}</p>
      <span className={styles.timestamp}>
        Published on: {date.toLocaleString()}
      </span>
    </div>
  );
}
