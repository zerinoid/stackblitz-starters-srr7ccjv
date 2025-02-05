'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Gallery from '@/components/Gallery';
import { WorkProvider } from '@/context/WorkContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  return (
    <main>
      <WorkProvider>
        <Gallery />
      </WorkProvider>
    </main>
  );
}
