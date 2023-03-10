export interface FileNames {
  params: { id: string };
}

export interface FileIds {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
}

export interface StatProps {
  props: {
    postData: FileIds;
  };
}

export interface PostsData {
  id: string;
  title: string;
  date: string;
}

export interface Params {
  [key: string]: FileIds;
}
