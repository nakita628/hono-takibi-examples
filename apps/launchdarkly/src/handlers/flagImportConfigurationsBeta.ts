import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesFlagImportRoute,
  patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRoute,
  postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagImportConfigurationsBetaHandler = app
  .openapi(getApiV2IntegrationCapabilitiesFlagImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
