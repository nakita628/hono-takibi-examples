import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesDatabricksAccountsRoute,
  patchApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesDatabricksAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databricksIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesDatabricksAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesDatabricksAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesDatabricksAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
