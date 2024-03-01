import express from "express";
import { createClient } from "@supabase/supabase-js";
const app = express();
const PORT = 8000;
const supabase = createClient(
  "https://axecuodyqkzojnxmhcvy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZWN1b2R5cWt6b2pueG1oY3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNjAwNjMsImV4cCI6MjAyNDgzNjA2M30.d685EZYleyYOVv7y4Ts7LbQW64im8F0f9rVhSBRM4Dk"
);

app.use(express.json());

app.get("/todoList", async (req, res) => {
  try {
    const { data, error } = await supabase.from("todoList").select("*");

    if (error) {
      throw error;
    }

    console.log("Fetched todoList data:", data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/todoList", async (req, res) => {
  try {
    const Data = req.body;

    const { data, err } = await supabase.from("todoList").insert(Data);

    if (err) {
      throw err;
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
