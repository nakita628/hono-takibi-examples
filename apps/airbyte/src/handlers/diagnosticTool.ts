import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DiagnosticToolGenerateReportRoute } from '../routes'

const app = new OpenAPIHono()

export const diagnosticToolHandler = app.openapi(postV1DiagnosticToolGenerateReportRoute, (c) => {
  throw new Error('Not implemented')
})
