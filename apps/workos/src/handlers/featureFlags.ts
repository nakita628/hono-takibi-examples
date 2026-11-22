import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeatureFlagsRoute,
  getFeatureFlagsSlugRoute,
  putFeatureFlagsSlugDisableRoute,
  putFeatureFlagsSlugEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app
  .openapi(getFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFlagsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeatureFlagsSlugDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeatureFlagsSlugEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
