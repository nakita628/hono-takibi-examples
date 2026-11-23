import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworkNetworkIdRoute } from '../routes'

const app = new OpenAPIHono()

export const networkHandler = app.openapi(getNetworkNetworkIdRoute, (c) => {
  throw new Error('Not implemented')
})
