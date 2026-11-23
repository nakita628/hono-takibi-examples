import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsEntityTypeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getReportsEntityTypeIndexRoute, (c) => {
  throw new Error('Not implemented')
})
