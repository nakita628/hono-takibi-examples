import { OpenAPIHono } from '@hono/zod-openapi'
import {
  airQualityHandler,
  findPlacesHandler,
  findPlacesPrefixHandler,
  mapHandler,
  nearestPlaceHandler,
  pointHandler,
  timeMachineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', airQualityHandler)
  .route('/', findPlacesHandler)
  .route('/', findPlacesPrefixHandler)
  .route('/', mapHandler)
  .route('/', nearestPlaceHandler)
  .route('/', pointHandler)
  .route('/', timeMachineHandler)

export default app
