import React from 'react';
import LoginCard from '@/components/Login/LoginCard';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The main index page of the application.
 * It renders the login card within a centered layout, serving as the entry point for user authentication.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
