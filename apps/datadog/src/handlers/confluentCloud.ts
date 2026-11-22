import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute,
  deleteApiV2IntegrationsConfluentCloudAccountsAccountIdRoute,
  getApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute,
  getApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesRoute,
  getApiV2IntegrationsConfluentCloudAccountsAccountIdRoute,
  getApiV2IntegrationsConfluentCloudAccountsRoute,
  patchApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute,
  patchApiV2IntegrationsConfluentCloudAccountsAccountIdRoute,
  postApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesRoute,
  postApiV2IntegrationsConfluentCloudAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const confluentCloudHandler = app
  .openapi(getApiV2IntegrationsConfluentCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsConfluentCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsConfluentCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsConfluentCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsConfluentCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
