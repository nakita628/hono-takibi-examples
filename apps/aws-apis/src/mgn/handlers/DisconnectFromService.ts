import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisconnectFromServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const DisconnectFromServiceHandler = app.openapi(postDisconnectFromServiceRoute, (c) => {
  throw new Error('Not implemented')
})
