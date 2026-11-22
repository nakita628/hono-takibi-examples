import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsHandler = app.openapi(
  postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
