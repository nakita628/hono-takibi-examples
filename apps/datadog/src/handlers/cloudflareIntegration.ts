import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationsCloudflareAccountsAccountIdRoute,
  getApiV2IntegrationsCloudflareAccountsAccountIdRoute,
  getApiV2IntegrationsCloudflareAccountsRoute,
  patchApiV2IntegrationsCloudflareAccountsAccountIdRoute,
  postApiV2IntegrationsCloudflareAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareIntegrationHandler = app
  .openapi(getApiV2IntegrationsCloudflareAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsCloudflareAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsCloudflareAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsCloudflareAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsCloudflareAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
