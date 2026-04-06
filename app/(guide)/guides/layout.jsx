import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/fumadocs/layout.shared";

export default function Layout({ children }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{ banner: "Warning: These guides are work in progress." }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
