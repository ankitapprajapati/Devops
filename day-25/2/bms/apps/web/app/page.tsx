import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {client } from '@repo/db/client';

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div className={styles.page}>
      <h1>Welcome to BMS Web App</h1>
      <div>
        <h1>First Name</h1> : 
        {user ?.username}
        <h1>Password</h1> : 
        {user ?.password}
      </div>
    </div>
  );
}
