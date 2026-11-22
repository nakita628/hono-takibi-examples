import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute,
  deleteApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute,
  deleteApiV2IntegrationAwsEventBridgeRoute,
  getApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute,
  getApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreviewRoute,
  getApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute,
  getApiV2IntegrationAwsAccountsRoute,
  getApiV2IntegrationAwsAvailableNamespacesRoute,
  getApiV2IntegrationAwsEventBridgeRoute,
  getApiV2IntegrationAwsIamPermissionsResourceCollectionRoute,
  getApiV2IntegrationAwsIamPermissionsRoute,
  getApiV2IntegrationAwsIamPermissionsStandardRoute,
  patchApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute,
  patchApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute,
  postApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute,
  postApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreviewRoute,
  postApiV2IntegrationAwsAccountsRoute,
  postApiV2IntegrationAwsEventBridgeRoute,
  postApiV2IntegrationAwsGenerateNewExternalIdRoute,
  postApiV2IntegrationAwsValidateCcmConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const awsIntegrationHandler = app
  .openapi(getApiV2IntegrationAwsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationAwsAccountsAwsAccountConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsAvailableNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationAwsEventBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsEventBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsEventBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsGenerateNewExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsIamPermissionsResourceCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationAwsIamPermissionsStandardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationAwsValidateCcmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
