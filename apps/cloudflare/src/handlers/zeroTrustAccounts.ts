import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesSettingsRoute,
  getAccountsAccountIdDevicesSettingsRoute,
  getAccountsAccountIdGatewayConfigurationCustomCertificateRoute,
  getAccountsAccountIdGatewayConfigurationRoute,
  getAccountsAccountIdGatewayEgressCidrPairsRoute,
  getAccountsAccountIdGatewayLoggingRoute,
  getAccountsAccountIdGatewayRoute,
  patchAccountsAccountIdDevicesSettingsRoute,
  patchAccountsAccountIdGatewayConfigurationRoute,
  postAccountsAccountIdGatewayRoute,
  putAccountsAccountIdDevicesSettingsRoute,
  putAccountsAccountIdGatewayConfigurationRoute,
  putAccountsAccountIdGatewayLoggingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustAccountsHandler = app
  .openapi(deleteAccountsAccountIdDevicesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdGatewayConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayConfigurationCustomCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayEgressCidrPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
