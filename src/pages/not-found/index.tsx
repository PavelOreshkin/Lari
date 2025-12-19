import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import styles from "./styles.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <Container className={styles.notFound}>
      <Typography variant="h1" component="h1">
        404 — Page Not Found
      </Typography>
      <Typography>
        Sorry, the page you are looking for doesn't exist.
      </Typography>
      <Button
        aria-label="go home button"
        onClick={handleGoHome}
        variant="contained"
        color="primary"
      >
        Go back to home
      </Button>
    </Container>
  );
};

export default NotFound;
