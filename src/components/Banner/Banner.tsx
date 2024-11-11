'use client';
import Image from 'next/image';
import Atropos from 'atropos/react';

export function Banner({ className }: { className: string }) {
  return (
    <Atropos className='my-atropos'>
      <Image
        className={className}
        src='https://nextjs.org/icons/next.svg'
        alt='Next.js logo'
        width={180}
        height={38}
        priority
      />
    </Atropos>
  );
}
