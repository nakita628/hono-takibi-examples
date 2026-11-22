import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureFlagsSlugTargetsResourceIdRoute,
  postFeatureFlagsSlugTargetsResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsTargetsHandler = app
  .openapi(postFeatureFlagsSlugTargetsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeatureFlagsSlugTargetsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
