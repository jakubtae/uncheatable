import { Container, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo.svg";
export default function Home() {
  return (
    <Container>
      <Typography
        sx={{
          width: "fit-content",
          py: 2,
          px: 6,
          bgcolor: "darkgray",
          color: "white",
          ":hover": {
            bgcolor: "tomato",
          },
        }}
      >
        Hello world!
      </Typography>
      <Image src={logo} alt="Uncheatable logo" />
    </Container>
  );
}
