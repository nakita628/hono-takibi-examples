import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DiagnosticSignaturesIdLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const diagnosticSignaturesHandler = app.openapi(
  getV1DiagnosticSignaturesIdLogsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
