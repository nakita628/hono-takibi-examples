import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueriesQueryIdReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getQueriesQueryIdReportsRoute, (c) => {
  throw new Error('Not implemented')
})
