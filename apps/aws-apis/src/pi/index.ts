import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysHandler,
  xAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsHandler,
  xAmzTargetPerformanceInsightsv20180227GetResourceMetadataHandler,
  xAmzTargetPerformanceInsightsv20180227GetResourceMetricsHandler,
  xAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsHandler,
  xAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysHandler)
  .route('/', xAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsHandler)
  .route('/', xAmzTargetPerformanceInsightsv20180227GetResourceMetadataHandler)
  .route('/', xAmzTargetPerformanceInsightsv20180227GetResourceMetricsHandler)
  .route('/', xAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsHandler)
  .route('/', xAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsHandler)

export default app
