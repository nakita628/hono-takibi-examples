import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsDeleteHandler = app.openapi(postCommentsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
