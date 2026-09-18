import { Space_Grotesk, Space_Mono, Caveat } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  title: "Ritwik Katta | CSE (AI) Student",
  description:
    "Ritwik Katta — CSE (AI) student in Bengaluru building backend systems and AI tooling: an event-driven NSE trading platform, RAG document search, and ML services.",
  openGraph: {
    title: "Ritwik Katta | CSE (AI) Student",
    description:
      "Backend and AI systems — NSE intraday trading platform, RAG document search, predictive maintenance ML.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#3551d1",
};

const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${mono.variable} ${hand.variable}`}>{children}</body>
    </html>
  );
}
