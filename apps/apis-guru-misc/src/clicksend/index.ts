import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  accountRechargeHandler,
  automationRulesHandler,
  contactListsHandler,
  contactsHandler,
  contactSuggestionsHandler,
  countriesHandler,
  deliveryIssuesHandler,
  emailMarketingHandler,
  emailToSMSAllowedAddressHandler,
  emailToSMSStrippedStringsHandler,
  faxHandler,
  forgotAccountHandler,
  mmsHandler,
  numbersHandler,
  postAddressDetectionHandler,
  postcardsHandler,
  postDirectMailHandler,
  postLetterHandler,
  pricingHandler,
  referralAccountsHandler,
  resellerAccountsHandler,
  resellerHandler,
  sdkHandler,
  searchHandler,
  smsCampaignsHandler,
  smsHandler,
  smsTemplatesHandler,
  statisticsHandler,
  subaccountsHandler,
  timezonesHandler,
  transactionalEmailHandler,
  uploadsHandler,
  voiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', automationRulesHandler)
  .route('/', contactSuggestionsHandler)
  .route('/', countriesHandler)
  .route('/', deliveryIssuesHandler)
  .route('/', emailMarketingHandler)
  .route('/', transactionalEmailHandler)
  .route('/', faxHandler)
  .route('/', forgotAccountHandler)
  .route('/', contactListsHandler)
  .route('/', contactsHandler)
  .route('/', mmsHandler)
  .route('/', numbersHandler)
  .route('/', postDirectMailHandler)
  .route('/', postAddressDetectionHandler)
  .route('/', postLetterHandler)
  .route('/', postcardsHandler)
  .route('/', pricingHandler)
  .route('/', accountRechargeHandler)
  .route('/', referralAccountsHandler)
  .route('/', resellerHandler)
  .route('/', resellerAccountsHandler)
  .route('/', sdkHandler)
  .route('/', searchHandler)
  .route('/', smsCampaignsHandler)
  .route('/', smsHandler)
  .route('/', emailToSMSAllowedAddressHandler)
  .route('/', emailToSMSStrippedStringsHandler)
  .route('/', smsTemplatesHandler)
  .route('/', statisticsHandler)
  .route('/', subaccountsHandler)
  .route('/', timezonesHandler)
  .route('/', uploadsHandler)
  .route('/', voiceHandler)

export default app
