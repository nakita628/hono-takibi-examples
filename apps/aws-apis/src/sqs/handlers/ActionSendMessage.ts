import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionSendMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSendMessageHandler = app.openapi(postActionSendMessageRoute, (c) => {
  throw new Error('Not implemented')
})
