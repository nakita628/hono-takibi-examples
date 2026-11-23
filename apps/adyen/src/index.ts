import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applePayHandler,
  cancelsHandler,
  cardDetailsHandler,
  donationCampaignsHandler,
  donationsHandler,
  forwardHandler,
  ordersHandler,
  originKeysHandler,
  paymentLinksHandler,
  paymentMethodsHandler,
  paymentsHandler,
  paypalHandler,
  sessionsHandler,
  storedPaymentMethodsHandler,
  validateShopperIdHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applePayHandler)
  .route('/', cancelsHandler)
  .route('/', cardDetailsHandler)
  .route('/', donationCampaignsHandler)
  .route('/', donationsHandler)
  .route('/', forwardHandler)
  .route('/', ordersHandler)
  .route('/', originKeysHandler)
  .route('/', paymentLinksHandler)
  .route('/', paymentMethodsHandler)
  .route('/', paymentsHandler)
  .route('/', paypalHandler)
  .route('/', sessionsHandler)
  .route('/', storedPaymentMethodsHandler)
  .route('/', validateShopperIdHandler)

export default app
