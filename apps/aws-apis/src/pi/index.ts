import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRoute,
  postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRoute,
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRoute,
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRoute,
  postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRoute,
  postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRoute,
} from './routes'
import {
  postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRouteHandler,
  postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRouteHandler,
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRouteHandler,
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRouteHandler,
  postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRouteHandler,
  postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRoute,
    postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRouteHandler,
  )
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRoute,
    postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsRouteHandler,
  )
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRoute,
    postXAmzTargetPerformanceInsightsv20180227GetResourceMetadataRouteHandler,
  )
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRoute,
    postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRouteHandler,
  )
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRoute,
    postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsRouteHandler,
  )
  .openapi(
    postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRoute,
    postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRouteHandler,
  )

export default app
