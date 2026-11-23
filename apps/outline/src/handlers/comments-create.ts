import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsCreateHandler = app.openapi(postCommentsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
