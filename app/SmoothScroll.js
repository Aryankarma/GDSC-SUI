"use client";

import { Lenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return <Lenis root>{children}</Lenis>;
}
