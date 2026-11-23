import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  addressesHandler,
  bankAccountsHandler,
  billingGroupsHandler,
  bookletsHandler,
  buckslipsHandler,
  bulkHandler,
  campaignsHandler,
  cardsHandler,
  checksHandler,
  creativesHandler,
  domainsHandler,
  identityValidationHandler,
  informedDeliveryCampaignsHandler,
  intlVerificationsHandler,
  lettersHandler,
  linksHandler,
  postcardsHandler,
  qrCodeAnalyticsHandler,
  resourceProofsHandler,
  selfMailersHandler,
  snapPacksHandler,
  templatesHandler,
  uploadsHandler,
  usAutocompletionsHandler,
  usReverseGeocodeLookupsHandler,
  usVerificationsHandler,
  usZipLookupsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', addressesHandler)
  .route('/', bankAccountsHandler)
  .route('/', billingGroupsHandler)
  .route('/', bookletsHandler)
  .route('/', buckslipsHandler)
  .route('/', bulkHandler)
  .route('/', campaignsHandler)
  .route('/', cardsHandler)
  .route('/', checksHandler)
  .route('/', creativesHandler)
  .route('/', identityValidationHandler)
  .route('/', informedDeliveryCampaignsHandler)
  .route('/', intlVerificationsHandler)
  .route('/', lettersHandler)
  .route('/', postcardsHandler)
  .route('/', qrCodeAnalyticsHandler)
  .route('/', domainsHandler)
  .route('/', linksHandler)
  .route('/', resourceProofsHandler)
  .route('/', selfMailersHandler)
  .route('/', snapPacksHandler)
  .route('/', templatesHandler)
  .route('/', uploadsHandler)
  .route('/', usAutocompletionsHandler)
  .route('/', usReverseGeocodeLookupsHandler)
  .route('/', usVerificationsHandler)
  .route('/', usZipLookupsHandler)

export default app
