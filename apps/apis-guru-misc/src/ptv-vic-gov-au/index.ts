import { OpenAPIHono } from '@hono/zod-openapi'
import {
  departuresHandler,
  directionsHandler,
  disruptionsHandler,
  fareEstimateHandler,
  outletsHandler,
  patternsHandler,
  routesHandler,
  routeTypesHandler,
  runsHandler,
  searchHandler,
  stopsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', departuresHandler)
  .route('/', directionsHandler)
  .route('/', disruptionsHandler)
  .route('/', fareEstimateHandler)
  .route('/', outletsHandler)
  .route('/', patternsHandler)
  .route('/', routeTypesHandler)
  .route('/', routesHandler)
  .route('/', runsHandler)
  .route('/', searchHandler)
  .route('/', stopsHandler)

export default app
