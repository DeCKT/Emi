import { getDocContent, getStaticParams } from "@/app/lib/docs";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";

export async function generateStaticParams() {
  return getStaticParams();
}

export default async function HelpDocumentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const doc = await getDocContent(slug);

  if (!doc) {
    redirect("/resources");
  }

  return (
    <div className="prose max-w-none prose-headings:font-bold prose-h2:mt-4 prose-h2:mb-1 pr-2 prose-p:text-black">
      <Markdown>{doc.content}</Markdown>
    </div>
  );
}
