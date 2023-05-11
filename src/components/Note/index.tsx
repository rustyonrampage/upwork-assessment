import { useRef, useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Input from "components/Input";
import TextArea from "components/TextArea";

import styles from "./index.module.css";
import Button from "components/Button";
import { TypeNote } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "redux/reducer/notesReducer";



export default function Note() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { notes } = useSelector((state: any) => {
    return { notes: state.notes as TypeNote[] };
  });



  const [data, setData] = useState<TypeNote>({
    id: 0,
    title: "",
    description: "",
  });

  useEffect(() => {
    if (params.id) {
      const note = notes.find((note) => note.id === Number(params.id));
      setData(note!);
    }
  }, [params]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = new Date().getTime();

    if (params.id) dispatch(editNote({ ...data, id: Number(params.id) }));
    else dispatch(addNote({ ...data, id }));
    navigate("/");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Title"
        name="title"
        required
        value={data.title}
        onChange={handleInputChange}
      />
      <TextArea
        label="Description"
        name="description"
        required
        value={data.description}
        onChange={handleInputChange}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
