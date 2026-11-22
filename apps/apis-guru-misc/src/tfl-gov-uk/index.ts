import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accidentStatsHandler,
  airQualityHandler,
  bikePointHandler,
  cabwiseHandler,
  journeyHandler,
  lineHandler,
  modeHandler,
  occupancyHandler,
  placeHandler,
  roadHandler,
  searchHandler,
  stopPointHandler,
  travelTimeHandler,
  vehicleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accidentStatsHandler)
  .route('/', airQualityHandler)
  .route('/', bikePointHandler)
  .route('/', cabwiseHandler)
  .route('/', journeyHandler)
  .route('/', lineHandler)
  .route('/', modeHandler)
  .route('/', occupancyHandler)
  .route('/', placeHandler)
  .route('/', roadHandler)
  .route('/', searchHandler)
  .route('/', stopPointHandler)
  .route('/', travelTimeHandler)
  .route('/', vehicleHandler)

export default app
