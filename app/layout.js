import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "CollabKit — Sponsor & Deal CRM for Indian Video Editors & Creators",
  description:
    "Manage brand sponsorships, track video editing pipelines in ₹, and discover brand collaborations across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
