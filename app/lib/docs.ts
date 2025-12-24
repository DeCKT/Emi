import fs from "fs";
import path from "path";
import matter from "gray-matter";
import docs from "../../public/docs.json";

const docsDirectory = path.join(process.cwd(), "docs");

export async function getDocContent(pathSegments: string[]) {
  const fullPath = path.join(docsDirectory, pathSegments.join("/") + ".md");

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}

function getPathsFromDocs(docs: any[], basePath: string[] = []): string[][] {
  let paths: string[][] = [];

  for (const doc of docs) {
    paths.push([...basePath, doc.slug]);
    for (const child of doc.children || []) {
      paths.push([...basePath, doc.slug, child.slug]);
      for (const grandChild of child.children || []) {
        paths.push([...basePath, doc.slug, child.slug, grandChild.slug]);
      }
    }
  }

  return paths;
}

export function getStaticParams() {
  const paths = getPathsFromDocs(docs);

  return paths.map((pathArray) => ({ slug: pathArray }));
}
