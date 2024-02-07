"use client";

import { TIL } from "@/types/TIL";
import fetchTIL from "@/utils/til.util";
import React, { useState, useEffect } from "react";
import TILStackView from "./til/_components/views/TILStackView";
import Main from "./_components/Main";

function HomePage() {
  const [tilList, setTilList] = useState<TIL[]>([]);
  useEffect(() => {
    fetchTIL("asc").then((tilList) => {
      setTilList(tilList);
    });
  }, []);

  return (
    <Main>
      <TILStackView tilList={tilList} />
    </Main>
  );
}

export default HomePage;
