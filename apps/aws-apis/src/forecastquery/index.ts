import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonForecastRuntimeQueryForecastHandler,
  xAmzTargetAmazonForecastRuntimeQueryWhatIfForecastHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonForecastRuntimeQueryForecastHandler)
  .route('/', xAmzTargetAmazonForecastRuntimeQueryWhatIfForecastHandler)

export default app
