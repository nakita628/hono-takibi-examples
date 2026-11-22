import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesBigSegmentStoreRoute,
  patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const persistentStoreIntegrationsBetaHandler = app
  .openapi(getApiV2IntegrationCapabilitiesBigSegmentStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
