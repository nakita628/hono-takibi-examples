import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteMessageHandler = app.openapi(postActionDeleteMessageRoute, (c) => {
  throw new Error('Not implemented')
})
