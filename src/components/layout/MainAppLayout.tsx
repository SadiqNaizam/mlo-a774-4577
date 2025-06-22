import React from 'react';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * A layout component that centers its children both vertically and horizontally
 * within the full viewport.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      {children}
    </main>
  );
};

export default MainAppLayout;
