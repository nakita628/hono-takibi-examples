import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsListRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsListHandler = app.openapi(postCommentsListRoute, (c) => {
  throw new Error('Not implemented')
})
