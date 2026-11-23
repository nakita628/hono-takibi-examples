import { OpenAPIHono } from '@hono/zod-openapi'
import { getSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app.openapi(getSystemRoute, (c) => {
  throw new Error('Not implemented')
})
