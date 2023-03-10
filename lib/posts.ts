import * as fs from "fs";
import { FileIds, FileNames, PostsData } from "../shared/types";
import matter from "gray-matter";
import * as path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsdirectory = path.join(process.cwd(), "Posts");

export function getAllPostIds(): FileNames[] {
  const fileNames: string[] = fs.readdirSync("./Posts");

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getSortedPostsData(): PostsData[] {
  const fileNames = fs.readdirSync(postsdirectory);
  const allPostsData: PostsData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join("./Posts", `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<FileIds> {
  const fullPath = path.join("./Posts", `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml: string = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string }),
  };
}
