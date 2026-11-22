import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdWorkersObservabilityTelemetryLiveTailHeartbeatRoute,
  postAccountsAccountIdWorkersObservabilityTelemetryLiveTailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveTailHandler = app
  .openapi(postAccountsAccountIdWorkersObservabilityTelemetryLiveTailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityTelemetryLiveTailHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
