import Script from "next/script";

declare global {
  interface Window {
    naver: any;
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      {children}
      <Script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        strategy="beforeInteractive"
      />
    </div>
  );
}
