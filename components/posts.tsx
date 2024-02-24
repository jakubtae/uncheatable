"use client";
import { useEffect, useState } from "react";
import { getAbsoluteUrl } from "@/utils";
import { Box, Typography, Paper, Skeleton } from "@mui/material";
const Posts: React.FC = () => {
  const [data, setData] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getAbsoluteUrl(""));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Perform cleanup if any
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Skeleton variant="rectangular" width={"100%"} height={64} />
        <Skeleton variant="rectangular" width={"100%"} height={64} />
        <Skeleton variant="rectangular" width={"100%"} height={64} />
      </Box>
    );
  }

  return (
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
  );
};

export default Posts;
