import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute,
  getAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute,
  getAccountsAccountIdDevicesPostureIntegrationRoute,
  patchAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute,
  postAccountsAccountIdDevicesPostureIntegrationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePostureIntegrationsHandler = app
  .openapi(getAccountsAccountIdDevicesPostureIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesPostureIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesPostureIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
