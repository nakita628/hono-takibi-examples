import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aliasesHandler,
  associationsHandler,
  bulkJobsHandler,
  c2CHandler,
  deviceAssociationsHandler,
  eventsHandler,
  geofenceAssociationsHandler,
  geofencesHandler,
  ingestionHandler,
  labelsHandler,
  largedataHandler,
  locationsHandler,
  metadataHandler,
  notificationsHandler,
  registryHandler,
  reportsHandler,
  rulesHandler,
  sensorsHandler,
  shadowsHandler,
  shipmentReportsHandler,
  shipmentsHandler,
  tracesHandler,
  transitionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aliasesHandler)
  .route('/', associationsHandler)
  .route('/', bulkJobsHandler)
  .route('/', c2CHandler)
  .route('/', deviceAssociationsHandler)
  .route('/', eventsHandler)
  .route('/', geofenceAssociationsHandler)
  .route('/', geofencesHandler)
  .route('/', labelsHandler)
  .route('/', largedataHandler)
  .route('/', locationsHandler)
  .route('/', metadataHandler)
  .route('/', notificationsHandler)
  .route('/', registryHandler)
  .route('/', reportsHandler)
  .route('/', rulesHandler)
  .route('/', sensorsHandler)
  .route('/', shadowsHandler)
  .route('/', shipmentReportsHandler)
  .route('/', shipmentsHandler)
  .route('/', tracesHandler)
  .route('/', transitionsHandler)
  .route('/', usersHandler)
  .route('/', ingestionHandler)

export default app
