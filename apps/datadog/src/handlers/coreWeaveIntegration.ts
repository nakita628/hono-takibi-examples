import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesCoreweaveCloudAccountsRoute,
  patchApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesCoreweaveCloudAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coreWeaveIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesCoreweaveCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesCoreweaveCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
