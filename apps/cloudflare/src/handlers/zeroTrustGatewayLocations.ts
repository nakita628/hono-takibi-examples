import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayLocationsLocationIdRoute,
  getAccountsAccountIdGatewayLocationsLocationIdRoute,
  getAccountsAccountIdGatewayLocationsRoute,
  postAccountsAccountIdGatewayLocationsRoute,
  putAccountsAccountIdGatewayLocationsLocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayLocationsHandler = app
  .openapi(getAccountsAccountIdGatewayLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
