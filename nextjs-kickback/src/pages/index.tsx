import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Profile from "./profile";
import mongoose from "mongoose";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
// import styles from '@/styles/Home.module.css'

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});

// const inter = Inter({ subsets: ["latin"] });

// const MONGO_URL =
//   "mongodb+srv://matthewli154:6k5f66at25w1Z!@mattmongodb.x09mnxc.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: "Error") => console.log(error));

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/profile">Link to profile page, does this still work?</Link>
      <h2>H2 Heading</h2>
      {/* <img src="https://i.pinimg.com/564x/04/9b/b7/049bb76d791ec7ecf0d14a64efe99fbe.jpg"></img>
      <img src="https://i.pinimg.com/564x/5d/e4/d9/5de4d9bb3d9551b5819d359b468a4350.jpg"></img> */}
    </>
  );
}
