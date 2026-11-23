import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLedgerOperationsLedgerOperationIdRoute,
  getLedgerOperationsRoute,
  postLedgerOperationsAllocateRoute,
  postLedgerOperationsAuthorizeRoute,
  postLedgerOperationsCaptureAuthorizationRoute,
  postLedgerOperationsCaptureRoute,
  postLedgerOperationsReleaseAuthorizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerOperationsHandler = app
  .openapi(postLedgerOperationsReleaseAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgerOperationsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgerOperationsAllocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgerOperationsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgerOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLedgerOperationsCaptureAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgerOperationsLedgerOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
