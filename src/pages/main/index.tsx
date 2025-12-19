import styles from "./styles.module.css";
import { type FormEvent } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "@/entities/form";

const Main = () => {
  const { form, changeField } = useForm();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form: ", form);
  };

  return (
    <Container className={styles.root}>
      <Typography variant="h1" component="h1">
        Form
      </Typography>
      <form action="submit" onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              onChange={changeField}
              className={styles.input}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="secondName"
              label="SecondName"
              variant="outlined"
              onChange={changeField}
              className={styles.input}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              onChange={changeField}
              className={styles.input}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              name="additional"
              label="Additional"
              variant="outlined"
              onChange={changeField}
              className={styles.input}
            />
          </Grid>
          <Grid size={12}>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Main;
