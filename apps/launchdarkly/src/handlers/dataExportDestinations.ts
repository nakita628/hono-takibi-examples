import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  getApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  getApiV2DestinationsRoute,
  patchApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  postApiV2DestinationsGenerateWarehouseDestinationKeyPairRoute,
  postApiV2DestinationsProjectKeyEnvironmentKeyRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataExportDestinationsHandler = app
  .openapi(getApiV2DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsGenerateWarehouseDestinationKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
