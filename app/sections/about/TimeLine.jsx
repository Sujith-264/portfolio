"use client";
// components/YourComponent.js
import React from 'react';
import { useTheme } from 'next-themes';
import { TimeLine as LightTimeLine } from './LightTimeLine';
import { TimeLine as DarkTimeLine } from './DarkTimeLine';

export function TimeLine() {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      {resolvedTheme === 'light' ? (
        <LightTimeLine/>
      ): (
        <DarkTimeLine/>
      )}
    </div>
  );
}

