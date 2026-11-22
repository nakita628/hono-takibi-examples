import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute,
  getAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute,
  getAccountsAccountIdGatewayProxyEndpointsRoute,
  patchAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute,
  postAccountsAccountIdGatewayProxyEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayProxyEndpointsHandler = app
  .openapi(getAccountsAccountIdGatewayProxyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayProxyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdGatewayProxyEndpointsProxyEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
