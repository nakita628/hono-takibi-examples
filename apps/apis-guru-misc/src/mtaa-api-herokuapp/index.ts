import { OpenAPIHono } from '@hono/zod-openapi'
import {
  districtsInRegionHandler,
  neighborhoodInAStreetHandler,
  streetsInAWardHandler,
  tanzaniaRegionsHandler,
  wardsInADistrictHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tanzaniaRegionsHandler)
  .route('/', districtsInRegionHandler)
  .route('/', wardsInADistrictHandler)
  .route('/', streetsInAWardHandler)
  .route('/', neighborhoodInAStreetHandler)

export default app
