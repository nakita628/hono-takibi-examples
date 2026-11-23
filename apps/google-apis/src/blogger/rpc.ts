import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3BlogsByurl(
  args: InferRequestType<typeof client.v3.blogs.byurl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs.byurl.$get(args, options))
}

export async function getV3BlogsBlogId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].$get(args, options))
}

export async function getV3BlogsBlogIdComments(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].comments.$get(args, options))
}

export async function getV3BlogsBlogIdPages(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages.$get(args, options))
}

export async function postV3BlogsBlogIdPages(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages.$post(args, options))
}

export async function getV3BlogsBlogIdPagesPageId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$get(args, options))
}

export async function putV3BlogsBlogIdPagesPageId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$put(args, options))
}

export async function deleteV3BlogsBlogIdPagesPageId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$delete(args, options))
}

export async function patchV3BlogsBlogIdPagesPageId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$patch(args, options))
}

export async function postV3BlogsBlogIdPagesPageIdPublish(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].pages[':pageId'].publish.$post(args, options),
  )
}

export async function postV3BlogsBlogIdPagesPageIdRevert(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].pages[':pageId'].revert.$post(args, options),
  )
}

export async function getV3BlogsBlogIdPageviews(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].pageviews.$get(args, options))
}

export async function getV3BlogsBlogIdPosts(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts.$get(args, options))
}

export async function postV3BlogsBlogIdPosts(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts.$post(args, options))
}

export async function getV3BlogsBlogIdPostsBypath(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts.bypath.$get(args, options))
}

export async function getV3BlogsBlogIdPostsSearch(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts.search.$get(args, options))
}

export async function getV3BlogsBlogIdPostsPostId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$get(args, options))
}

export async function putV3BlogsBlogIdPostsPostId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$put(args, options))
}

export async function deleteV3BlogsBlogIdPostsPostId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$delete(args, options))
}

export async function patchV3BlogsBlogIdPostsPostId(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$patch(args, options))
}

export async function getV3BlogsBlogIdPostsPostIdComments(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments.$get(args, options),
  )
}

export async function getV3BlogsBlogIdPostsPostIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(args, options),
  )
}

export async function deleteV3BlogsBlogIdPostsPostIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$delete(args, options),
  )
}

export async function postV3BlogsBlogIdPostsPostIdCommentsCommentIdApprove(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].approve.$post(args, options),
  )
}

export async function postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontent(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].removecontent.$post(
      args,
      options,
    ),
  )
}

export async function postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpam(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].spam.$post(args, options),
  )
}

export async function postV3BlogsBlogIdPostsPostIdPublish(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].publish.$post(args, options),
  )
}

export async function postV3BlogsBlogIdPostsPostIdRevert(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.blogs[':blogId'].posts[':postId'].revert.$post(args, options),
  )
}

export async function getV3UsersUserId(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.users[':userId'].$get(args, options))
}

export async function getV3UsersUserIdBlogs(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.users[':userId'].blogs.$get(args, options))
}

export async function getV3UsersUserIdBlogsBlogId(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.users[':userId'].blogs[':blogId'].$get(args, options))
}

export async function getV3UsersUserIdBlogsBlogIdPosts(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.users[':userId'].blogs[':blogId'].posts.$get(args, options))
}

export async function getV3UsersUserIdBlogsBlogIdPostsPostId(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(args, options),
  )
}
