import { OpenAPIHono } from '@hono/zod-openapi'
import { postReportCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const reportHandler = app.openapi(postReportCreateRoute, (c) => {
  throw new Error('Not implemented')
})
