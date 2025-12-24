"use client";

import Link from "next/link";
import docs from "../../public/docs.json";
import { usePathname } from "next/navigation";

function isActiveLink(currentPath: string, linkPath: string): string {
  return currentPath === linkPath ? "bg-rose hover:bg-rose" : "";
}

export default function DocsSidebar() {
  const path = usePathname();

  return (
    <ul className="w-full h-full flex flex-col max-h-full overflow-y-auto">
      {docs.map((doc) => {
        return (
          <li key={doc.title}>
            <div
              className={`${isActiveLink(
                path,
                `/resources/${doc.slug}`
              )} py-1 px-2 rounded-md hover:bg-gray-100`}
            >
              <Link href={`/resources/${doc.slug}`} className="block">
                {doc.title}
              </Link>
            </div>

            {doc.children && (
              <ul className="w-full h-full flex flex-col pl-3">
                {doc.children.map((child) => {
                  return (
                    <li key={child.title}>
                      <div
                        className={`${isActiveLink(
                          path,
                          `/resources/${doc.slug}/${child.slug}`
                        )} py-1 px-2 rounded-md hover:bg-gray-100`}
                      >
                        <Link
                          href={`/resources/${doc.slug}/${child.slug}`}
                          className="block"
                        >
                          {child.title}
                        </Link>
                      </div>

                      {child.children && (
                        <ul className="w-full h-full flex flex-col pl-3 ">
                          {child.children.map((grandChild) => {
                            return (
                              <li key={grandChild.title}>
                                <div
                                  className={`${isActiveLink(
                                    path,
                                    `/resources/${doc.slug}/${child.slug}/${grandChild.slug}`
                                  )}  py-1 px-2 rounded-md hover:bg-gray-100`}
                                >
                                  <Link
                                    href={`/resources/${doc.slug}/${child.slug}/${grandChild.slug}`}
                                    className="block"
                                  >
                                    {grandChild.title}
                                  </Link>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
