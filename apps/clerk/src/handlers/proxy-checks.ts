import { OpenAPIHono } from '@hono/zod-openapi'
import { postProxyChecksRoute } from '../routes'

const app = new OpenAPIHono()

export const proxyChecksHandler = app.openapi(postProxyChecksRoute, (c) => {
  throw new Error('Not implemented')
})
