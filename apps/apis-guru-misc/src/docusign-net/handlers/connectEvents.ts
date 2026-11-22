import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdConnectFailuresFailureIdRoute,
  deleteV21AccountsAccountIdConnectLogsLogIdRoute,
  deleteV21AccountsAccountIdConnectLogsRoute,
  getV21AccountsAccountIdConnectFailuresRoute,
  getV21AccountsAccountIdConnectLogsLogIdRoute,
  getV21AccountsAccountIdConnectLogsRoute,
  putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRoute,
  putV21AccountsAccountIdConnectEnvelopesRetryQueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectEventsHandler = app
  .openapi(putV21AccountsAccountIdConnectEnvelopesRetryQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectFailuresFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
