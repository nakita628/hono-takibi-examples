import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  announcementsHandler,
  areacodesHandler,
  billingHandler,
  callsHandler,
  chargesHandler,
  contactsHandler,
  customersHandler,
  faxesHandler,
  hostedHandler,
  ipAddressHandler,
  mobileHandler,
  numbersHandler,
  partnersHandler,
  portingHandler,
  serviceStatusHandler,
  sipHandler,
  smsHandler,
  supportHandler,
  topupsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', announcementsHandler)
  .route('/', areacodesHandler)
  .route('/', billingHandler)
  .route('/', callsHandler)
  .route('/', chargesHandler)
  .route('/', contactsHandler)
  .route('/', customersHandler)
  .route('/', faxesHandler)
  .route('/', hostedHandler)
  .route('/', ipAddressHandler)
  .route('/', mobileHandler)
  .route('/', numbersHandler)
  .route('/', partnersHandler)
  .route('/', portingHandler)
  .route('/', serviceStatusHandler)
  .route('/', sipHandler)
  .route('/', smsHandler)
  .route('/', supportHandler)
  .route('/', topupsHandler)

export default app
