import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesChatgptEnterpriseAccountsRoute,
  patchApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesChatgptEnterpriseAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatGPTEnterpriseIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesChatgptEnterpriseAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesChatgptEnterpriseAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
