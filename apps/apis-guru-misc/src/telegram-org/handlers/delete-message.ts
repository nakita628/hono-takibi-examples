import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteMessageHandler = app.openapi(postDeleteMessageRoute, (c) => {
  throw new Error('Not implemented')
})
