import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4FeatureFlagsUnleashProjectIdClientFeaturesRoute,
  getApiV4FeatureFlagsUnleashProjectIdFeaturesRoute,
  getApiV4FeatureFlagsUnleashProjectIdRoute,
  postApiV4FeatureFlagsUnleashProjectIdClientMetricsRoute,
  postApiV4FeatureFlagsUnleashProjectIdClientRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unleashHandler = app
  .openapi(getApiV4FeatureFlagsUnleashProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4FeatureFlagsUnleashProjectIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4FeatureFlagsUnleashProjectIdClientFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4FeatureFlagsUnleashProjectIdClientRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4FeatureFlagsUnleashProjectIdClientMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
