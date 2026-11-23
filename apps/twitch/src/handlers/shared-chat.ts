import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedChatSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedChatHandler = app.openapi(getSharedChatSessionRoute, (c) => {
  throw new Error('Not implemented')
})
