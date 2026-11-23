import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommentsCommentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app.openapi(getCommentsCommentIdRoute, (c) => {
  throw new Error('Not implemented')
})
