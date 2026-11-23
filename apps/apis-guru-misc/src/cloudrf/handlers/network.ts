import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworkRoute } from '../routes'

const app = new OpenAPIHono()

export const networkHandler = app.openapi(getNetworkRoute, (c) => {
  throw new Error('Not implemented')
})
