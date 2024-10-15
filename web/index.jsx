// theme.js
import { useState, useEffect } from 'react';

function getSystemTheme() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  return systemTheme.matches ? 'dark' : 'light';
}

const systemTheme = getSystemTheme();

export default systemTheme;