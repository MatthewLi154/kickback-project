import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Profile from "./profile";
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/profile">Link to profile page!</Link>
      <h2>H2 Heading</h2>
    </>
  );
}
