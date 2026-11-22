import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreRoute,
  patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRoute,
  postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationDeliveryConfigurationsBetaHandler = app
  .openapi(getApiV2IntegrationCapabilitiesFeatureStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
