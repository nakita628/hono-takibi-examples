import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationGcpAccountsAccountIdRoute,
  getApiV2IntegrationGcpAccountsRoute,
  getApiV2IntegrationGcpStsDelegateRoute,
  patchApiV2IntegrationGcpAccountsAccountIdRoute,
  postApiV2IntegrationGcpAccountsRoute,
  postApiV2IntegrationGcpStsDelegateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gcpIntegrationHandler = app
  .openapi(getApiV2IntegrationGcpAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationGcpAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationGcpAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationGcpAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationGcpStsDelegateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationGcpStsDelegateRoute, (c) => {
    throw new Error('Not implemented')
  })
