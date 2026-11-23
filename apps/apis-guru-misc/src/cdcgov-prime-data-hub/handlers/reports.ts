import { OpenAPIHono } from '@hono/zod-openapi'
import { postReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(postReportsRoute, (c) => {
  throw new Error('Not implemented')
})
