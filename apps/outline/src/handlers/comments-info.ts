import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsInfoHandler = app.openapi(postCommentsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
