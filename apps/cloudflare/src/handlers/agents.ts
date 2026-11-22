import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersObservabilityAgentsTracesRoute,
  getAccountsAccountIdWorkersObservabilityAgentsTracesTraceIdEventsRoute,
  getAccountsAccountIdWorkersObservabilityAgentsTracesTraceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getAccountsAccountIdWorkersObservabilityAgentsTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityAgentsTracesTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityAgentsTracesTraceIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
