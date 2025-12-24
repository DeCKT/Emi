import Link from "next/link";
import docs from "../../public/docs.json";
import DocsSidebar from "../components/DocsSidebar";

export default function resourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full grid grid-cols-[280px_1fr] gap-3 py-3 max-h-[calc(100vh-88px)]">
      <DocsSidebar />
      <div className="w-full h-full max-h-full flex flex-col gap-3 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
