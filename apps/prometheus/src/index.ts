import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  alertmanagersHandler,
  alertsHandler,
  featuresHandler,
  formatQueryHandler,
  labelHandler,
  labelsHandler,
  metadataHandler,
  notificationsHandler,
  otlpHandler,
  parseQueryHandler,
  queryCostHandler,
  queryExemplarsHandler,
  queryHandler,
  queryRangeCostHandler,
  queryRangeHandler,
  readHandler,
  rulesHandler,
  scrapePoolsHandler,
  searchHandler,
  seriesHandler,
  statusHandler,
  targetsHandler,
  writeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', queryHandler)
  .route('/', queryRangeHandler)
  .route('/', queryCostHandler)
  .route('/', queryRangeCostHandler)
  .route('/', queryExemplarsHandler)
  .route('/', formatQueryHandler)
  .route('/', parseQueryHandler)
  .route('/', labelsHandler)
  .route('/', labelHandler)
  .route('/', searchHandler)
  .route('/', seriesHandler)
  .route('/', metadataHandler)
  .route('/', scrapePoolsHandler)
  .route('/', targetsHandler)
  .route('/', rulesHandler)
  .route('/', alertsHandler)
  .route('/', alertmanagersHandler)
  .route('/', statusHandler)
  .route('/', adminHandler)
  .route('/', readHandler)
  .route('/', writeHandler)
  .route('/', otlpHandler)
  .route('/', notificationsHandler)
  .route('/', featuresHandler)

export default app
