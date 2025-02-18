// pages/page.js
'use client';

import Home from '../app/pages/Home.jsx';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  if (router.pathname === '/') {
    router.push('/home');
  }

  return <Home />;
}

export default Page;