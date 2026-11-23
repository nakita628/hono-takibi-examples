import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommentsAddReactionRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsAddReactionHandler = app.openapi(postCommentsAddReactionRoute, (c) => {
  throw new Error('Not implemented')
})
