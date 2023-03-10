import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { getSortedPostsData } from "../lib/posts";
import { PostsData } from "../shared/types";

import Date from "../src/components/shared/Date";
import NextLink from "next/link";

interface Props {
  props: {
    allPostsData: PostsData[];
  };
}

interface Props2 {
  allPostsData: PostsData[];
}

const Blog = ({ allPostsData }: Props2): JSX.Element => {
  const PostItems = allPostsData.map(({ id, date, title }) => (
    <NextLink href={`/posts/${id}`} passHref key={id}>
      <ListItem
        _hover={{
          boxShadow: "base",
          rounded: "xl",
          background: "#262e3e",
        }}
        transition={"background 0.4s ease-in"}
        p="30px"
      >
        <Box as={"a"} cursor="pointer">
          <Text>{title}</Text>
          <Box height={"2px"} />
          <small>
            <Date dateString={date} />
          </small>
        </Box>
      </ListItem>
    </NextLink>
  ));

  return (
    <UnorderedList styleType={"none"} spacing="30px">
      {PostItems.slice(0, 10)}
    </UnorderedList>
  );
};

export async function getStaticProps(): Promise<Props> {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog;
