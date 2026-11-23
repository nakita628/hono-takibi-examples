import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  balanceHandler,
  contactsHandler,
  hooksHandler,
  lookupHandler,
  pricingHandler,
  smsHandler,
  statusHandler,
  validateForVoiceHandler,
  voiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analyticsHandler)
  .route('/', balanceHandler)
  .route('/', contactsHandler)
  .route('/', hooksHandler)
  .route('/', lookupHandler)
  .route('/', pricingHandler)
  .route('/', smsHandler)
  .route('/', statusHandler)
  .route('/', validateForVoiceHandler)
  .route('/', voiceHandler)

export default app
