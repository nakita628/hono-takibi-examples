import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsUnresolveRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsUnresolveHandler = app.openapi(postCommentsUnresolveRoute, (c) => {
  throw new Error('Not implemented')
})
