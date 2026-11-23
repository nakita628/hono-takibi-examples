import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsRemoveReactionRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsRemoveReactionHandler = app.openapi(postCommentsRemoveReactionRoute, (c) => {
  throw new Error('Not implemented')
})
