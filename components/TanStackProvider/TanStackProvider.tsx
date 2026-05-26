'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

type TanStackProviderProps = {
  children: React.ReactNode;
};

const TanStackProvider = ({ children }: TanStackProviderProps) => {
  const [client] = useState(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default TanStackProvider;
