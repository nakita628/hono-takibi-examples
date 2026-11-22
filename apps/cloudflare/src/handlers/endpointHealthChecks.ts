import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute,
  getAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute,
  getAccountsAccountIdDiagnosticsEndpointHealthchecksRoute,
  postAccountsAccountIdDiagnosticsEndpointHealthchecksRoute,
  putAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointHealthChecksHandler = app
  .openapi(getAccountsAccountIdDiagnosticsEndpointHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDiagnosticsEndpointHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDiagnosticsEndpointHealthchecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
