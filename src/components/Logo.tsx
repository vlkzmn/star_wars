import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/star_wars_logo.png"
      alt="Star Wars Logo"
      width={312}
      height={32}
      priority
    />
  );
}
