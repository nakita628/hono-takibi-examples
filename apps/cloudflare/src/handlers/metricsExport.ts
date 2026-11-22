import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersObservabilityMetricsexportRoute,
  postAccountsAccountIdWorkersObservabilityMetricsexportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsExportHandler = app
  .openapi(getAccountsAccountIdWorkersObservabilityMetricsexportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityMetricsexportRoute, (c) => {
    throw new Error('Not implemented')
  })
