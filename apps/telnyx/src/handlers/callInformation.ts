import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallsCallControlIdRoute,
  getConnectionsConnectionIdActiveCallsRoute,
  getDialMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callInformationHandler = app
  .openapi(getCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdActiveCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDialMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
