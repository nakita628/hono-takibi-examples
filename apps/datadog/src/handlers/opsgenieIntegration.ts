import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationOpsgenieAccountsAccountIdRoute,
  deleteApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute,
  getApiV2IntegrationOpsgenieAccountsRoute,
  getApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute,
  getApiV2IntegrationOpsgenieServicesRoute,
  patchApiV2IntegrationOpsgenieAccountsAccountIdRoute,
  patchApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute,
  postApiV2IntegrationOpsgenieAccountsRoute,
  postApiV2IntegrationOpsgenieServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const opsgenieIntegrationHandler = app
  .openapi(getApiV2IntegrationOpsgenieAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationOpsgenieAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationOpsgenieAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationOpsgenieAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationOpsgenieServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationOpsgenieServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationOpsgenieServicesIntegrationServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
