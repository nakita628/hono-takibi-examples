import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdPostsBypathRoute,
  getV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdPostsRoute,
  getV3BlogsBlogIdPostsSearchRoute,
  patchV3BlogsBlogIdPostsPostIdRoute,
  postV3BlogsBlogIdPostsPostIdPublishRoute,
  postV3BlogsBlogIdPostsPostIdRevertRoute,
  postV3BlogsBlogIdPostsRoute,
  putV3BlogsBlogIdPostsPostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
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
  .openapi(postV3BlogsBlogIdPostsPostIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPostsPostIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
