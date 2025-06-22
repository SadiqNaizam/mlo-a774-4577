import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <p className="text-sm text-muted-foreground">
      Don't have an account?{\n'      '}
      <Button variant="link" className="h-auto p-0 text-sm font-semibold text-primary">
        SignUp
      </Button>
    </p>
  );
};

export default Footer;
