import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdWorkersObservabilityTelemetryQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryRunHandler = app.openapi(
  postAccountsAccountIdWorkersObservabilityTelemetryQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
