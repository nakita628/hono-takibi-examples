import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attributesHandler,
  calendarsHandler,
  commandsHandler,
  devicesHandler,
  driversHandler,
  eventsHandler,
  geofencesHandler,
  groupsHandler,
  maintenanceHandler,
  notificationsHandler,
  permissionsHandler,
  positionsHandler,
  reportsHandler,
  serverHandler,
  sessionHandler,
  statisticsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attributesHandler)
  .route('/', calendarsHandler)
  .route('/', commandsHandler)
  .route('/', devicesHandler)
  .route('/', driversHandler)
  .route('/', eventsHandler)
  .route('/', geofencesHandler)
  .route('/', groupsHandler)
  .route('/', maintenanceHandler)
  .route('/', notificationsHandler)
  .route('/', permissionsHandler)
  .route('/', positionsHandler)
  .route('/', reportsHandler)
  .route('/', serverHandler)
  .route('/', sessionHandler)
  .route('/', statisticsHandler)
  .route('/', usersHandler)

export default app
