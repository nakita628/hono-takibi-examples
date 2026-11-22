import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app.openapi(getV1CommentsRoute, (c) => {
  throw new Error('Not implemented')
})
