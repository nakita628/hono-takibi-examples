import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsResolveRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsResolveHandler = app.openapi(postCommentsResolveRoute, (c) => {
  throw new Error('Not implemented')
})
