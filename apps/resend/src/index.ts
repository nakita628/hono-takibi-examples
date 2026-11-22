import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  audiencesHandler,
  automationsHandler,
  broadcastsHandler,
  contactPropertiesHandler,
  contactsHandler,
  domainsHandler,
  emailsHandler,
  eventsHandler,
  inboxesHandler,
  logsHandler,
  oAuthHandler,
  receivingEmailsHandler,
  segmentsHandler,
  suppressionsHandler,
  templatesHandler,
  topicsHandler,
  usageHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', emailsHandler)
  .route('/', receivingEmailsHandler)
  .route('/', domainsHandler)
  .route('/', apiKeysHandler)
  .route('/', oAuthHandler)
  .route('/', templatesHandler)
  .route('/', audiencesHandler)
  .route('/', contactsHandler)
  .route('/', broadcastsHandler)
  .route('/', webhooksHandler)
  .route('/', segmentsHandler)
  .route('/', topicsHandler)
  .route('/', contactPropertiesHandler)
  .route('/', logsHandler)
  .route('/', automationsHandler)
  .route('/', eventsHandler)
  .route('/', suppressionsHandler)
  .route('/', usageHandler)
  .route('/', inboxesHandler)

export default app
