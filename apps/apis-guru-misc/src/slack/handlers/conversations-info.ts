import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsInfoHandler = app.openapi(getConversationsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
