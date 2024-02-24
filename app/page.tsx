import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Posts from "@/components/posts";
export default async function Home() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}
      >
        <Image src={logo} alt="Uncheatable logo" />
        <Typography>Home</Typography>
      </Box>
      <Posts />
    </Container>
  );
}
