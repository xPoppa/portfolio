import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { FileNames, Params, StatProps } from "../../shared/types";
import Head from "next/head";
import Date from "../../src/components/shared/Date";

const Post = ({ postData }: Params): JSX.Element => {
  return (
    <VStack>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Heading>{postData.title}</Heading>
      <Box color={"#D3D3D3"}>
        <Date dateString={postData.date} />
      </Box>
      <Box
        w={"60vw"}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </VStack>
  );
};

export default Post;

export async function getStaticPaths(): Promise<{
  paths: FileNames[];
  fallback: boolean;
}> {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: Params): Promise<StatProps> {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
