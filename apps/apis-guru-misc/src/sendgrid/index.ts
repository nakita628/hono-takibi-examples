import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessSettingsHandler,
  alertsHandler,
  apiKeysHandler,
  asmHandler,
  browsersHandler,
  campaignsHandler,
  categoriesHandler,
  clientsHandler,
  contactdbHandler,
  designsHandler,
  devicesHandler,
  geoHandler,
  ipsHandler,
  mailboxProvidersHandler,
  mailHandler,
  mailSettingsHandler,
  marketingHandler,
  messagesHandler,
  partnerSettingsHandler,
  scopesHandler,
  sendersHandler,
  ssoHandler,
  statsHandler,
  subusersHandler,
  suppressionHandler,
  teammatesHandler,
  templatesHandler,
  trackingSettingsHandler,
  userHandler,
  validationsHandler,
  verifiedSendersHandler,
  whitelabelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessSettingsHandler)
  .route('/', alertsHandler)
  .route('/', apiKeysHandler)
  .route('/', asmHandler)
  .route('/', browsersHandler)
  .route('/', campaignsHandler)
  .route('/', categoriesHandler)
  .route('/', clientsHandler)
  .route('/', contactdbHandler)
  .route('/', designsHandler)
  .route('/', devicesHandler)
  .route('/', geoHandler)
  .route('/', ipsHandler)
  .route('/', mailHandler)
  .route('/', mailSettingsHandler)
  .route('/', mailboxProvidersHandler)
  .route('/', marketingHandler)
  .route('/', messagesHandler)
  .route('/', partnerSettingsHandler)
  .route('/', scopesHandler)
  .route('/', sendersHandler)
  .route('/', ssoHandler)
  .route('/', statsHandler)
  .route('/', subusersHandler)
  .route('/', suppressionHandler)
  .route('/', teammatesHandler)
  .route('/', templatesHandler)
  .route('/', trackingSettingsHandler)
  .route('/', userHandler)
  .route('/', validationsHandler)
  .route('/', verifiedSendersHandler)
  .route('/', whitelabelHandler)

export default app
