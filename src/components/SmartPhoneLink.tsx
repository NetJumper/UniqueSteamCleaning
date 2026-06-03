"use client";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function SmartPhoneLink({ href, className, children }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
