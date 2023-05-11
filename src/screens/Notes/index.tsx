import React from "react";
import styles from "./index.module.css";
import NoteList from "components/NoteList";
import Button from "components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Note from "components/Note";

const PATH_TO_CREATE = "/create-note";
// pathname
function Notes({}) {
  const navigate = useNavigate();
  const location = useLocation();

  const onCreatePage = location.pathname === PATH_TO_CREATE;

  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <h3>Notes Application</h3>
        <Button onClick={() => navigate(onCreatePage ? "/" : PATH_TO_CREATE)}>
          {onCreatePage ? "Back" : "Add Note"}
        </Button>
      </nav>
      <Routes>
        <Route path={"/"} Component={NoteList} />
        <Route path={PATH_TO_CREATE} Component={Note} />
      </Routes>
    </main>
  );
}

export default Notes;
