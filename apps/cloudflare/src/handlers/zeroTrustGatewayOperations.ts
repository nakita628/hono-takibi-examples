import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdGatewayOperationsOperationIdRoute,
  getAccountsAccountIdGatewayOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayOperationsHandler = app
  .openapi(getAccountsAccountIdGatewayOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
