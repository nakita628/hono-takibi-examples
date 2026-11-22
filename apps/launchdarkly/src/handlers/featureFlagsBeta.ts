import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsBetaHandler = app
  .openapi(getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
