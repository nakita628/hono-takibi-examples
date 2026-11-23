import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinKeepAliveVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const minKeepAliveVersionHandler = app.openapi(getMinKeepAliveVersionRoute, (c) => {
  throw new Error('Not implemented')
})
