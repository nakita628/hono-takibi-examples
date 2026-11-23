import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BlogsBlogIdPagesPageIdRoute,
  deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  deleteV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdCommentsRoute,
  getV3BlogsBlogIdPagesPageIdRoute,
  getV3BlogsBlogIdPagesRoute,
  getV3BlogsBlogIdPageviewsRoute,
  getV3BlogsBlogIdPostsBypathRoute,
  getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  getV3BlogsBlogIdPostsPostIdCommentsRoute,
  getV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdPostsRoute,
  getV3BlogsBlogIdPostsSearchRoute,
  getV3BlogsBlogIdRoute,
  getV3BlogsByurlRoute,
  getV3UsersUserIdBlogsBlogIdPostsPostIdRoute,
  getV3UsersUserIdBlogsBlogIdPostsRoute,
  getV3UsersUserIdBlogsBlogIdRoute,
  getV3UsersUserIdBlogsRoute,
  getV3UsersUserIdRoute,
  patchV3BlogsBlogIdPagesPageIdRoute,
  patchV3BlogsBlogIdPostsPostIdRoute,
  postV3BlogsBlogIdPagesPageIdPublishRoute,
  postV3BlogsBlogIdPagesPageIdRevertRoute,
  postV3BlogsBlogIdPagesRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute,
  postV3BlogsBlogIdPostsPostIdPublishRoute,
  postV3BlogsBlogIdPostsPostIdRevertRoute,
  postV3BlogsBlogIdPostsRoute,
  putV3BlogsBlogIdPagesPageIdRoute,
  putV3BlogsBlogIdPostsPostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3BlogsByurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesPageIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesPageIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPageviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsBypathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3BlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsPostIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsBlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsBlogIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
