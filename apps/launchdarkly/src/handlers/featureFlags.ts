import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  getApiV2FlagsProjectKeyRoute,
  getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRoute,
  getApiV2FlagStatusesProjectKeyEnvironmentKeyRoute,
  getApiV2FlagStatusProjectKeyFeatureFlagKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  postApiV2FlagsProjectKeyFeatureFlagKeyCopyRoute,
  postApiV2FlagsProjectKeyRoute,
  postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app
  .openapi(getApiV2FlagStatusProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagStatusesProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyFeatureFlagKeyCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
