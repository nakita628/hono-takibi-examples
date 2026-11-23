import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAmazonForecastRuntimeQueryForecastRoute,
  postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRoute,
} from './routes'
import {
  postXAmzTargetAmazonForecastRuntimeQueryForecastRouteHandler,
  postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAmazonForecastRuntimeQueryForecastRoute,
    postXAmzTargetAmazonForecastRuntimeQueryForecastRouteHandler,
  )
  .openapi(
    postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRoute,
    postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRouteHandler,
  )

export default app
