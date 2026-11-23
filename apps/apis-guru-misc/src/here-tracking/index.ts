import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aliasesHandler,
  associationsHandler,
  bulkjobsHandler,
  c2cHandler,
  deviceAssociationsHandler,
  eventsHandler,
  geofenceAssociationsHandler,
  geofencesHandler,
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
  v2Handler,
  v3Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aliasesHandler)
  .route('/', associationsHandler)
  .route('/', bulkjobsHandler)
  .route('/', c2cHandler)
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
  .route('/', v2Handler)
  .route('/', v3Handler)

export default app
