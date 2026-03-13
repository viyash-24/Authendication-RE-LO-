import "./globals.css";

export const metadata = {
  title: "Authentication App",
  description: "A Next.js Authentication App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}