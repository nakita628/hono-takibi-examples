import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdDiagnosticsTracerouteRoute } from '../routes'

const app = new OpenAPIHono()

export const diagnosticsHandler = app.openapi(
  postAccountsAccountIdDiagnosticsTracerouteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
