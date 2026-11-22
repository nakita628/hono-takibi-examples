import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayPacfilesPacfileIdRoute,
  getAccountsAccountIdGatewayPacfilesPacfileIdRoute,
  getAccountsAccountIdGatewayPacfilesRoute,
  postAccountsAccountIdGatewayPacfilesRoute,
  putAccountsAccountIdGatewayPacfilesPacfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayPACFilesHandler = app
  .openapi(getAccountsAccountIdGatewayPacfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayPacfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayPacfilesPacfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayPacfilesPacfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayPacfilesPacfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
