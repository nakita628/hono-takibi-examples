import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostsIdJsonRoute,
  getPostsIdJsonRoute,
  getPostsIdRepliesJsonRoute,
  putPostsIdJsonRoute,
  putPostsIdLockedJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(getPostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdRepliesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsIdLockedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
