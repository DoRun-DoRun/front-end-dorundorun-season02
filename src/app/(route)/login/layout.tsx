export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
