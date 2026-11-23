import { OpenAPIHono } from '@hono/zod-openapi'
import {
  directionsOutputFormatHandler,
  distanceHandler,
  distanceOutputFormatHandler,
  optimalDirectionsOutputFormatHandler,
  optimalRouteOutputFormatHandler,
  routeOutputFormatHandler,
  truckHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', directionsOutputFormatHandler)
  .route('/', distanceOutputFormatHandler)
  .route('/', distanceHandler)
  .route('/', optimalDirectionsOutputFormatHandler)
  .route('/', optimalRouteOutputFormatHandler)
  .route('/', routeOutputFormatHandler)
  .route('/', truckHandler)

export default app
