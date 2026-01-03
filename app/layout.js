import "./globals.scss";
import Header from "./components/layout/header/Header";
import SmoothProvider from "./SmoothProvider";

export const metadata = {
  title: "홍주미 | 포트폴리오",
  description: "홍주미의 포트폴리오입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothProvider> {children} </SmoothProvider>
      </body>
    </html>
  );
}
