import { OpenAPIHono } from '@hono/zod-openapi'
import {
  geofencingHandler,
  mapsHandler,
  metadataHandler,
  placesHandler,
  routesHandler,
  tagsHandler,
  trackingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', trackingHandler)
  .route('/', geofencingHandler)
  .route('/', routesHandler)
  .route('/', metadataHandler)
  .route('/', mapsHandler)
  .route('/', placesHandler)
  .route('/', tagsHandler)

export default app
