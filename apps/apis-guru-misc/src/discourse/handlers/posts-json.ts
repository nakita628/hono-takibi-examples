import { OpenAPIHono } from '@hono/zod-openapi'
import { getPostsJsonRoute, postPostsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const postsJsonHandler = app
  .openapi(getPostsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
