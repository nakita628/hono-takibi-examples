import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  accountVerifyHandler,
  automationsHandler,
  contactSuggestionsHandler,
  countriesHandler,
  deliveryIssuesHandler,
  emailCampaignsHandler,
  emailHandler,
  faxHandler,
  forgotPasswordHandler,
  forgotUsernameHandler,
  listsHandler,
  mmsHandler,
  numbersHandler,
  postHandler,
  pricingHandler,
  rechargeHandler,
  referralHandler,
  resellerHandler,
  sdkDownloadHandler,
  searchHandler,
  smsCampaignsHandler,
  smsHandler,
  statisticsHandler,
  subaccountsHandler,
  timezonesHandler,
  uploadsConvertConvertHandler,
  voiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', accountVerifyHandler)
  .route('/', automationsHandler)
  .route('/', contactSuggestionsHandler)
  .route('/', countriesHandler)
  .route('/', deliveryIssuesHandler)
  .route('/', emailCampaignsHandler)
  .route('/', emailHandler)
  .route('/', faxHandler)
  .route('/', forgotPasswordHandler)
  .route('/', forgotUsernameHandler)
  .route('/', listsHandler)
  .route('/', mmsHandler)
  .route('/', numbersHandler)
  .route('/', postHandler)
  .route('/', pricingHandler)
  .route('/', rechargeHandler)
  .route('/', referralHandler)
  .route('/', resellerHandler)
  .route('/', sdkDownloadHandler)
  .route('/', searchHandler)
  .route('/', smsCampaignsHandler)
  .route('/', smsHandler)
  .route('/', statisticsHandler)
  .route('/', subaccountsHandler)
  .route('/', timezonesHandler)
  .route('/', uploadsConvertConvertHandler)
  .route('/', voiceHandler)

export default app
