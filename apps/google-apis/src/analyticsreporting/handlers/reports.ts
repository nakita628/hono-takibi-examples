import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ReportsBatchGetRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(postV4ReportsBatchGetRoute, (c) => {
  throw new Error('Not implemented')
})
