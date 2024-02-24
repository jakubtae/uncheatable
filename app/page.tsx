import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { getAbsoluteUrl } from "@/utils";

export default async function Home() {
  const data = await fetch(getAbsoluteUrl("")).then((res) => {
    return res.json();
  });
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data.map((post: string, index: number) => {
          return (
            <Paper
              elevation={24}
              key={index}
              sx={{ px: 4, py: 2, ":hover": { bgcolor: "red" } }}
            >
              <Typography>{post}</Typography>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
}
