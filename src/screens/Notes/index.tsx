import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

import NoteList from "components/NoteList";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";

function Notes({}) {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div>
        <h3>Notes Application</h3>
        <Button onClick={()=>navigate("/create-note")}>Add Note</Button>
      </div>
      <NoteList />
    </main>
  );
}

Notes.propTypes = {};

export default Notes;
