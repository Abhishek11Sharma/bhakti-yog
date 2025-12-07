"use client";

// Theme feature removed. Keep a passthrough provider so imports remain valid.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
