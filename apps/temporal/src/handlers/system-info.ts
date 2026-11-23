import { OpenAPIHono } from '@hono/zod-openapi'
import { getSystemInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const systemInfoHandler = app.openapi(getSystemInfoRoute, (c) => {
  throw new Error('Not implemented')
})
