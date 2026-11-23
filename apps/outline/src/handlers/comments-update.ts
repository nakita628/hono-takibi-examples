import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsUpdateHandler = app.openapi(postCommentsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
