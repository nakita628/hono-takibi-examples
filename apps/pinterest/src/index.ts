import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adAccountsHandler,
  advancedAuctionHandler,
  boardsHandler,
  businessAccessHandler,
  businessesHandler,
  catalogsHandler,
  collaborativeCatalogsHandler,
  integrationsHandler,
  mediaHandler,
  mediaLibraryHandler,
  merchantHandler,
  notificationsHandler,
  oauthHandler,
  overlayAssignmentRulesHandler,
  overlaysHandler,
  pinsHandler,
  resourcesHandler,
  searchHandler,
  termsHandler,
  trendsHandler,
  userAccountHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adAccountsHandler)
  .route('/', advancedAuctionHandler)
  .route('/', boardsHandler)
  .route('/', businessAccessHandler)
  .route('/', businessesHandler)
  .route('/', catalogsHandler)
  .route('/', collaborativeCatalogsHandler)
  .route('/', integrationsHandler)
  .route('/', mediaHandler)
  .route('/', mediaLibraryHandler)
  .route('/', merchantHandler)
  .route('/', notificationsHandler)
  .route('/', oauthHandler)
  .route('/', overlayAssignmentRulesHandler)
  .route('/', overlaysHandler)
  .route('/', pinsHandler)
  .route('/', resourcesHandler)
  .route('/', searchHandler)
  .route('/', termsHandler)
  .route('/', trendsHandler)
  .route('/', userAccountHandler)
  .route('/', usersHandler)

export default app
