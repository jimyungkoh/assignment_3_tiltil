"use client";

import { TIL } from "@/types/TIL";
import fetchTIL from "@/utils/til.util";
import React, { useState, useEffect } from "react";
import TILResponsiveGridView from "../_components/views/TILResponsiveGridView";
import Main from "../../_components/Main";
function TrendingPage() {
  const [tilList, setTilList] = useState<TIL[]>([]);
  useEffect(() => {
    fetchTIL("asc").then((tilList) => {
      setTilList(tilList);
    });
  }, []);
  return (
    <Main>
      <TILResponsiveGridView tilList={tilList} />
    </Main>
  );
}

export default TrendingPage;
