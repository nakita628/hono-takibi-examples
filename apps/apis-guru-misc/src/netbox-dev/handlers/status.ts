import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatusIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(getStatusIndexRoute, (c) => {
  throw new Error('Not implemented')
})
