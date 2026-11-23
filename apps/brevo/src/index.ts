import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  categoriesHandler,
  companiesHandler,
  contactsHandler,
  conversationsHandler,
  corporateHandler,
  couponCollectionsHandler,
  couponsHandler,
  crmHandler,
  ecommerceHandler,
  emailCampaignsHandler,
  eventsHandler,
  feedsHandler,
  inboundHandler,
  loyaltyHandler,
  objectsHandler,
  ordersHandler,
  organizationHandler,
  paymentsHandler,
  processesHandler,
  productsHandler,
  sendersHandler,
  smsCampaignsHandler,
  smtpHandler,
  transactionalSmsHandler,
  walletHandler,
  webhooksHandler,
  whatsappCampaignsHandler,
  whatsappHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', corporateHandler)
  .route('/', organizationHandler)
  .route('/', processesHandler)
  .route('/', sendersHandler)
  .route('/', webhooksHandler)
  .route('/', feedsHandler)
  .route('/', objectsHandler)
  .route('/', contactsHandler)
  .route('/', conversationsHandler)
  .route('/', categoriesHandler)
  .route('/', couponCollectionsHandler)
  .route('/', couponsHandler)
  .route('/', ecommerceHandler)
  .route('/', ordersHandler)
  .route('/', paymentsHandler)
  .route('/', productsHandler)
  .route('/', eventsHandler)
  .route('/', inboundHandler)
  .route('/', loyaltyHandler)
  .route('/', walletHandler)
  .route('/', emailCampaignsHandler)
  .route('/', smsCampaignsHandler)
  .route('/', whatsappCampaignsHandler)
  .route('/', companiesHandler)
  .route('/', crmHandler)
  .route('/', whatsappHandler)
  .route('/', smtpHandler)
  .route('/', transactionalSmsHandler)

export default app
