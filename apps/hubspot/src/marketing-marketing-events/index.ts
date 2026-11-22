import { OpenAPIHono } from '@hono/zod-openapi'
import {
  basicHandler,
  batchHandler,
  eventAttendeesHandler,
  eventStatusHandler,
  identifiersHandler,
  listAssociationsHandler,
  participantStateHandler,
  settingsHandler,
  subscriberStateChangesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', listAssociationsHandler)
  .route('/', eventAttendeesHandler)
  .route('/', batchHandler)
  .route('/', identifiersHandler)
  .route('/', eventStatusHandler)
  .route('/', subscriberStateChangesHandler)
  .route('/', participantStateHandler)
  .route('/', settingsHandler)

export default app
