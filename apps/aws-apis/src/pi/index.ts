import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysHandler,
  XAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsHandler,
  XAmzTargetPerformanceInsightsv20180227GetResourceMetadataHandler,
  XAmzTargetPerformanceInsightsv20180227GetResourceMetricsHandler,
  XAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsHandler,
  XAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysHandler)
  .route('/', XAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsHandler)
  .route('/', XAmzTargetPerformanceInsightsv20180227GetResourceMetadataHandler)
  .route('/', XAmzTargetPerformanceInsightsv20180227GetResourceMetricsHandler)
  .route('/', XAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsHandler)
  .route('/', XAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsHandler)

export default app
