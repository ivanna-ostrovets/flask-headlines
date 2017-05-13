interface Links {
  href : string
  rel : string
  type : string
}

interface MediaThumbnail {
  height : string
  url : string
  width : string
}

interface TextDetail {
  base : string
  language : string;
  type : string;
  value : string;
}

export class News {
  guidislink: boolean;
  href: string;
  id: string;
  link: string;
  links: Links[];
  media_thumbnail: MediaThumbnail[];
  published: string;
  published_parsed: number[];
  summary: string;
  summary_detail: TextDetail;
  title: string;
  title_detail: TextDetail;
}
