import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsHandler =
  app.openapi(
    postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
