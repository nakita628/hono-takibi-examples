import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getReportsRoute, (c) => {
  throw new Error('Not implemented')
})
