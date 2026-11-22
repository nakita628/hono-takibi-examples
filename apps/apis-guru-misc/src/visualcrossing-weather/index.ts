import { OpenAPIHono } from '@hono/zod-openapi'
import {
  historicalWeatherHandler,
  timelineWeatherAPI15DayForecastRequestHandler,
  timelineWeatherAPIDateRangeRequestHandler,
  timelineWeatherAPISingleDateRequestHandler,
  weatherForecastHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', timelineWeatherAPI15DayForecastRequestHandler)
  .route('/', timelineWeatherAPISingleDateRequestHandler)
  .route('/', timelineWeatherAPIDateRangeRequestHandler)
  .route('/', weatherForecastHandler)
  .route('/', historicalWeatherHandler)

export default app
