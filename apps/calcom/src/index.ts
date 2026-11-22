import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  bookingsAttendeesHandler,
  bookingsGuestsHandler,
  bookingsHandler,
  calendarsHandler,
  calUnifiedCalendarsHandler,
  conferencingHandler,
  deprecatedPlatformManagedUsersHandler,
  deprecatedPlatformOAuthClientsHandler,
  deprecatedPlatformWebhooksHandler,
  destinationCalendarsHandler,
  eventTypesHandler,
  eventTypesPrivateLinksHandler,
  eventTypesWebhooksHandler,
  meHandler,
  oAuth2Handler,
  schedulesHandler,
  selectedCalendarsHandler,
  slotsHandler,
  stripeHandler,
  verifiedResourcesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeysHandler)
  .route('/', bookingsHandler)
  .route('/', bookingsAttendeesHandler)
  .route('/', bookingsGuestsHandler)
  .route('/', calUnifiedCalendarsHandler)
  .route('/', calendarsHandler)
  .route('/', conferencingHandler)
  .route('/', deprecatedPlatformManagedUsersHandler)
  .route('/', deprecatedPlatformWebhooksHandler)
  .route('/', deprecatedPlatformOAuthClientsHandler)
  .route('/', destinationCalendarsHandler)
  .route('/', eventTypesHandler)
  .route('/', eventTypesWebhooksHandler)
  .route('/', eventTypesPrivateLinksHandler)
  .route('/', meHandler)
  .route('/', oAuth2Handler)
  .route('/', schedulesHandler)
  .route('/', selectedCalendarsHandler)
  .route('/', slotsHandler)
  .route('/', stripeHandler)
  .route('/', verifiedResourcesHandler)
  .route('/', webhooksHandler)

export default app
