import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertsHandler,
  aviationHandler,
  glossaryHandler,
  gridpointsHandler,
  iconsHandler,
  officesHandler,
  pointsHandler,
  productsHandler,
  radarHandler,
  radioHandler,
  stationsHandler,
  thumbnailsHandler,
  zonesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alertsHandler)
  .route('/', aviationHandler)
  .route('/', glossaryHandler)
  .route('/', gridpointsHandler)
  .route('/', iconsHandler)
  .route('/', thumbnailsHandler)
  .route('/', stationsHandler)
  .route('/', officesHandler)
  .route('/', pointsHandler)
  .route('/', radarHandler)
  .route('/', radioHandler)
  .route('/', productsHandler)
  .route('/', zonesHandler)

export default app
