import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applePayHandler,
  calculateTaxHandler,
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
  verifyShopperTaxIdentificationHandler,
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
  .route('/', calculateTaxHandler)
  .route('/', validateShopperIdHandler)
  .route('/', verifyShopperTaxIdentificationHandler)

export default app
