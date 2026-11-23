import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureFlagsSlugTargetsResourceIdRoute,
  getFeatureFlagsRoute,
  getFeatureFlagsSlugRoute,
  postFeatureFlagsSlugTargetsResourceIdRoute,
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
  .openapi(postFeatureFlagsSlugTargetsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeatureFlagsSlugTargetsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
