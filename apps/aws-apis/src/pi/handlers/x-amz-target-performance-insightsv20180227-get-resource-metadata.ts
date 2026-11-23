import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPerformanceInsightsv20180227GetResourceMetadataHandler = app.openapi(
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
