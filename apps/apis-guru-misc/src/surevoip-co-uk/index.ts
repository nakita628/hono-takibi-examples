import { OpenAPIHono } from '@hono/zod-openapi'
import {
  announcementsHandler,
  areacodesHandler,
  billingHandler,
  callsHandler,
  chargesHandler,
  contactsHandler,
  customersHandler,
  echoHandler,
  faxesHandler,
  globalHandler,
  hostedHandler,
  mobileHandler,
  numbersHandler,
  partnersHandler,
  portingHandler,
  sipHandler,
  smsHandler,
  supportHandler,
  topupsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', globalHandler)
  .route('/', announcementsHandler)
  .route('/', areacodesHandler)
  .route('/', billingHandler)
  .route('/', callsHandler)
  .route('/', chargesHandler)
  .route('/', contactsHandler)
  .route('/', customersHandler)
  .route('/', faxesHandler)
  .route('/', hostedHandler)
  .route('/', supportHandler)
  .route('/', mobileHandler)
  .route('/', numbersHandler)
  .route('/', partnersHandler)
  .route('/', portingHandler)
  .route('/', sipHandler)
  .route('/', smsHandler)
  .route('/', echoHandler)
  .route('/', topupsHandler)

export default app
