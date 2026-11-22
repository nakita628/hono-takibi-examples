import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionReceiveMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionReceiveMessageHandler = app.openapi(postActionReceiveMessageRoute, (c) => {
  throw new Error('Not implemented')
})
