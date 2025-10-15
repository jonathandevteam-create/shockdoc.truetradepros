'use client' //remove this

import React from "react";
import Template from "./Template";

// export default function Home() {
//   return <Template/>
// }


export default function Home() {
  if (typeof window !== "undefined") {
    window.location.href = "https://sites.google.com/view/ashevillehandyman/home";
  }
  return null;
}