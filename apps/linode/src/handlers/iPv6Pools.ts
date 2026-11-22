import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionNetworkingIpv6PoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const iPv6PoolsHandler = app.openapi(getApiVersionNetworkingIpv6PoolsRoute, (c) => {
  throw new Error('Not implemented')
})
