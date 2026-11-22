import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AgentlessScanningAccountsAwsAccountIdRoute,
  deleteApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute,
  deleteApiV2AgentlessScanningAccountsGcpProjectIdRoute,
  getApiV2AgentlessScanningAccountsAwsAccountIdRoute,
  getApiV2AgentlessScanningAccountsAwsRoute,
  getApiV2AgentlessScanningAccountsAzureRoute,
  getApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute,
  getApiV2AgentlessScanningAccountsGcpProjectIdRoute,
  getApiV2AgentlessScanningAccountsGcpRoute,
  getApiV2AgentlessScanningOndemandAwsRoute,
  getApiV2AgentlessScanningOndemandAwsTaskIdRoute,
  patchApiV2AgentlessScanningAccountsAwsAccountIdRoute,
  patchApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute,
  patchApiV2AgentlessScanningAccountsGcpProjectIdRoute,
  postApiV2AgentlessScanningAccountsAwsRoute,
  postApiV2AgentlessScanningAccountsAzureRoute,
  postApiV2AgentlessScanningAccountsGcpRoute,
  postApiV2AgentlessScanningOndemandAwsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentlessScanningHandler = app
  .openapi(getApiV2AgentlessScanningAccountsAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentlessScanningAccountsAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgentlessScanningAccountsAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningAccountsAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AgentlessScanningAccountsAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningAccountsAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentlessScanningAccountsAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AgentlessScanningAccountsAzureSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningAccountsGcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentlessScanningAccountsGcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgentlessScanningAccountsGcpProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningAccountsGcpProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AgentlessScanningAccountsGcpProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningOndemandAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentlessScanningOndemandAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentlessScanningOndemandAwsTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
