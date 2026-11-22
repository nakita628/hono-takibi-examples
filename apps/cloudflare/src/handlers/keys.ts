import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdWorkersObservabilityTelemetryKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app.openapi(
  postAccountsAccountIdWorkersObservabilityTelemetryKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
