import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectRoute } from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app.openapi(getConnectRoute, (c) => {
  throw new Error('Not implemented')
})
