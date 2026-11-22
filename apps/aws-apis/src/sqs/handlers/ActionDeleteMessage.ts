import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteMessageHandler = app.openapi(postActionDeleteMessageRoute, (c) => {
  throw new Error('Not implemented')
})
