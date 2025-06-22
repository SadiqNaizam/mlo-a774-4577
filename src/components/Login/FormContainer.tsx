import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FormContainer: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle login logic here
    console.log('Login submitted with:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        id="email"
        type="email"
        placeholder="Email Address"
        aria-label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <div className="flex flex-col gap-3">
        <Input
          id="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <Button
          variant="link"
          type="button"
          className="h-auto self-start p-0 text-sm font-normal text-primary/90 hover:text-primary"
        >
          Forgot Password
        </Button>
      </div>
      <Button type="submit" className="w-full font-semibold">
        Login
      </Button>
    </form>
  );
};

export default FormContainer;
