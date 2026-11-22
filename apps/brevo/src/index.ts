import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  balanceHandler,
  companiesHandler,
  consentGroupsHandler,
  contactsHandler,
  conversationsHandler,
  couponsHandler,
  customObjectsHandler,
  dealsHandler,
  domainsHandler,
  ecommerceHandler,
  emailCampaignsHandler,
  eventHandler,
  externalFeedsHandler,
  filesHandler,
  inboundParsingHandler,
  masterAccountHandler,
  notesHandler,
  paymentsHandler,
  processHandler,
  programHandler,
  rewardHandler,
  sendersHandler,
  smsCampaignsHandler,
  smsTemplatesHandler,
  tasksHandler,
  tierHandler,
  transactionalEmailsHandler,
  transactionalSMSHandler,
  transactionalWhatsAppHandler,
  userHandler,
  walletHandler,
  webhooksHandler,
  whatsAppCampaignsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', masterAccountHandler)
  .route('/', userHandler)
  .route('/', processHandler)
  .route('/', sendersHandler)
  .route('/', domainsHandler)
  .route('/', webhooksHandler)
  .route('/', externalFeedsHandler)
  .route('/', customObjectsHandler)
  .route('/', contactsHandler)
  .route('/', consentGroupsHandler)
  .route('/', conversationsHandler)
  .route('/', ecommerceHandler)
  .route('/', couponsHandler)
  .route('/', paymentsHandler)
  .route('/', eventHandler)
  .route('/', inboundParsingHandler)
  .route('/', balanceHandler)
  .route('/', programHandler)
  .route('/', rewardHandler)
  .route('/', tierHandler)
  .route('/', walletHandler)
  .route('/', emailCampaignsHandler)
  .route('/', smsCampaignsHandler)
  .route('/', whatsAppCampaignsHandler)
  .route('/', companiesHandler)
  .route('/', dealsHandler)
  .route('/', filesHandler)
  .route('/', notesHandler)
  .route('/', tasksHandler)
  .route('/', transactionalWhatsAppHandler)
  .route('/', transactionalEmailsHandler)
  .route('/', transactionalSMSHandler)
  .route('/', smsTemplatesHandler)

export default app
