import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
