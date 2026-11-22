import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth21CodeRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationAPIHandler = app.openapi(postOauth21CodeRoute, (c) => {
  throw new Error('Not implemented')
})
