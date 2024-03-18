import express from "express";
import { createClient } from "@supabase/supabase-js";
const app = express();
const PORT = 8000;
const supabase = createClient(
  "https://axecuodyqkzojnxmhcvy.supabase.co",
  "api__key"
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
