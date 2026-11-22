import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdWorkersObservabilityTelemetryValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const valuesHandler = app.openapi(
  postAccountsAccountIdWorkersObservabilityTelemetryValuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
