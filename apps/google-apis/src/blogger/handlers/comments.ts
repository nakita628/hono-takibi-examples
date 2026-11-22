import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  getV3BlogsBlogIdCommentsRoute,
  getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  getV3BlogsBlogIdPostsPostIdCommentsRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getV3BlogsBlogIdCommentsRoute, (c) => {
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
