import { RootProvider } from "fumadocs-ui/provider/next";

export default function Layout({ children }) {
  return (
    <div
      // required styles
      className="flex flex-col min-h-screen"
    >
      <RootProvider theme={{ enabled: false, forcedTheme: "dark" }}>
        {children}
      </RootProvider>
    </div>
  );
}
