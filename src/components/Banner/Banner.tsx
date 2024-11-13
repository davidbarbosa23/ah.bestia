import Image from 'next/image';

export function Banner({ className }: { className: string }) {
  return (
    <Image
      className={className}
      src='https://nextjs.org/icons/next.svg'
      alt='Next.js logo'
      width={180}
      height={38}
      priority
    />
  );
}
