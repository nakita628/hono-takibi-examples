import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  addressesHandler,
  bankAccountsHandler,
  billingGroupsHandler,
  bookletsHandler,
  buckslipOrdersHandler,
  buckslipsHandler,
  campaignsHandler,
  cardOrdersHandler,
  cardsHandler,
  checksHandler,
  creativesHandler,
  identityValidationHandler,
  informedDeliveryCampaignHandler,
  intlVerificationsHandler,
  lettersHandler,
  postcardsHandler,
  qrCodesHandler,
  resourceProofsHandler,
  reverseGeocodeLookupsHandler,
  selfMailersHandler,
  snapPacksHandler,
  templatesHandler,
  templateVersionsHandler,
  uploadsHandler,
  urlShortenerHandler,
  usAutocompletionsHandler,
  usVerificationsHandler,
  zipLookupsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', addressesHandler)
  .route('/', bankAccountsHandler)
  .route('/', billingGroupsHandler)
  .route('/', bookletsHandler)
  .route('/', buckslipsHandler)
  .route('/', buckslipOrdersHandler)
  .route('/', usVerificationsHandler)
  .route('/', intlVerificationsHandler)
  .route('/', campaignsHandler)
  .route('/', cardsHandler)
  .route('/', cardOrdersHandler)
  .route('/', checksHandler)
  .route('/', creativesHandler)
  .route('/', identityValidationHandler)
  .route('/', informedDeliveryCampaignHandler)
  .route('/', lettersHandler)
  .route('/', postcardsHandler)
  .route('/', qrCodesHandler)
  .route('/', urlShortenerHandler)
  .route('/', resourceProofsHandler)
  .route('/', selfMailersHandler)
  .route('/', snapPacksHandler)
  .route('/', templateVersionsHandler)
  .route('/', templatesHandler)
  .route('/', uploadsHandler)
  .route('/', usAutocompletionsHandler)
  .route('/', reverseGeocodeLookupsHandler)
  .route('/', zipLookupsHandler)

export default app
