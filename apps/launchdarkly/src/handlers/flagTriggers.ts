import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagTriggersHandler = app
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
