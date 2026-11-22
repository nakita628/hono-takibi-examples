import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aerodromesHandler,
  airspaceHandler,
  flightRestrictionsHandler,
  restrictedPublicVenuesHandler,
  specialSecurityAreasHandler,
  surfaceObstaclesHandler,
  uasOperatingAreasHandler,
  weatherHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aerodromesHandler)
  .route('/', airspaceHandler)
  .route('/', surfaceObstaclesHandler)
  .route('/', flightRestrictionsHandler)
  .route('/', specialSecurityAreasHandler)
  .route('/', uasOperatingAreasHandler)
  .route('/', restrictedPublicVenuesHandler)
  .route('/', weatherHandler)

export default app
