import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonForecastRuntimeQueryForecastHandler,
  XAmzTargetAmazonForecastRuntimeQueryWhatIfForecastHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonForecastRuntimeQueryForecastHandler)
  .route('/', XAmzTargetAmazonForecastRuntimeQueryWhatIfForecastHandler)

export default app
