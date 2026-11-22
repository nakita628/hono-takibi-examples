import { OpenAPIHono } from '@hono/zod-openapi'
import { getProxyRoute } from '../routes'

const app = new OpenAPIHono()

export const proxyHandler = app.openapi(getProxyRoute, (c) => {
  throw new Error('Not implemented')
})
