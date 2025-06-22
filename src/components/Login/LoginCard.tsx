import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormContainer from './FormContainer';
import Footer from './Footer';

const LoginCard: React.FC = () => {
  return (
    <Card className="w-96 shadow-md border-border/40">
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="px-8 py-6">
        <FormContainer />
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Footer />
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
