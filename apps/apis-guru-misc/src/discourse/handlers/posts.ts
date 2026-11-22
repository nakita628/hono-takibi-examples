import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostsIdJsonRoute,
  getPostsIdJsonRoute,
  getPostsIdRepliesJsonRoute,
  getPostsJsonRoute,
  postPostActionsJsonRoute,
  postPostsJsonRoute,
  putPostsIdJsonRoute,
  putPostsIdLockedJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(postPostActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostsIdLockedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostsIdRepliesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
