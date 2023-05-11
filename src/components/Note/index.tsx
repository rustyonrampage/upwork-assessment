import Input from "components/Input";
import TextArea from "components/TextArea";

import styles from "./index.module.css";
import Button from "components/Button";
import { TypeNote } from "types/types";

export default function Note() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData) as unknown as TypeNote;
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input label="Title" name="title" required />
      <TextArea label="Description" name="description" required />
      <Button type="submit">Save</Button>
    </form>
  );
}
