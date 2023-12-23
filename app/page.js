"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Singout from "./components/singout";
import Wrapper from "./layouts/wrapper";
import HomeLoginInfo from "./components/home-login-info";
export default function Home() {
  const { data, status } = useSession();
  return (
    <Wrapper>
      <HomeLoginInfo session={data} status={status} />
    </Wrapper>
  );
}
