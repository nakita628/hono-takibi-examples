import { OpenAPIHono } from '@hono/zod-openapi'
import {
  locationEndpointsHandler,
  pointWeatherHandler,
  timeMachine__historicalWeatherHandler,
  weatherMapsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', pointWeatherHandler)
  .route('/', locationEndpointsHandler)
  .route('/', weatherMapsHandler)
  .route('/', timeMachine__historicalWeatherHandler)

export default app
