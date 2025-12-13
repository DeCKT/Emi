"use client";
import { useEffect } from "react";
import docs from "../../public/docs.json";
import Markdown from "react-markdown";

export default function ResourcesPage() {
  useEffect(() => {
    console.log("docs" + JSON.stringify(docs));
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-[280px_1fr] gap-3 py-3 max-h-[calc(100vh-88px)]">
      <ul className="w-full h-full flex flex-col max-h-full overflow-y-auto">
        {docs.map((doc) => {
          return (
            <li>
              {doc.title}
              {doc.children && (
                <ul className="w-full h-full flex flex-col pl-3">
                  {doc.children.map((child) => {
                    return (
                      <li key={child.title}>
                        {child.title}
                        {child.children && (
                          <ul className="w-full h-full flex flex-col pl-3 ">
                            {child.children.map((grandChild) => {
                              return (
                                <li key={grandChild.title}>
                                  {grandChild.title}
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
      <div className="w-full h-full max-h-full flex flex-col gap-3 overflow-y-auto">
        <Markdown></Markdown>
      </div>
    </div>
  );
}
