"use client";

import { useEffect } from "react";

const MeteorEffect = ({ amount = 40 }) => {
  useEffect(() => {
    const body = document.body;
    let count = 0;
    while (count < amount) {
      const drop = document.createElement("i");
      const size = Math.random() * 5;
      const posX = Math.floor(Math.random() * window.innerWidth);
      const delay = Math.random() * -20;
      const duration = Math.random() * 5;

      drop.style.width = `${0.1 + size}px`;
      drop.style.height = `${10 + size * 10}px`;
      drop.style.left = `${posX}px`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${1 + duration}s`;
      drop.classList.add("meteor");

      body.appendChild(drop);
      count++;
    }

    return () => {
      document.querySelectorAll(".meteor").forEach((drop) => drop.remove());
    };
  }, [amount]);

  return null;
};

export default MeteorEffect;
