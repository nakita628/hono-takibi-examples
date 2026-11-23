import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  apiHandler,
  archiveFilesHandler,
  chatHandler,
  contactsHandler,
  groupsHandler,
  h323Handler,
  imHandler,
  liveMeetingsHandler,
  meetingsHandler,
  metricsHandler,
  pastMeetingsHandler,
  pastWebinarsHandler,
  phoneHandler,
  reportHandler,
  rolesHandler,
  roomsHandler,
  sipPhonesHandler,
  sipTrunkHandler,
  trackingFieldsHandler,
  tspHandler,
  usersHandler,
  webinarsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', apiHandler)
  .route('/', archiveFilesHandler)
  .route('/', chatHandler)
  .route('/', contactsHandler)
  .route('/', groupsHandler)
  .route('/', h323Handler)
  .route('/', imHandler)
  .route('/', liveMeetingsHandler)
  .route('/', meetingsHandler)
  .route('/', metricsHandler)
  .route('/', pastMeetingsHandler)
  .route('/', pastWebinarsHandler)
  .route('/', phoneHandler)
  .route('/', reportHandler)
  .route('/', rolesHandler)
  .route('/', roomsHandler)
  .route('/', sipPhonesHandler)
  .route('/', sipTrunkHandler)
  .route('/', trackingFieldsHandler)
  .route('/', tspHandler)
  .route('/', usersHandler)
  .route('/', webinarsHandler)

export default app
