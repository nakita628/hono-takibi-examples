import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesNebiusCloudAccountsRoute,
  patchApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesNebiusCloudAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nebiusCloudIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesNebiusCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesNebiusCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesNebiusCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
