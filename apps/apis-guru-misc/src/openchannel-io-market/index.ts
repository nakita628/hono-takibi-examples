import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  customGatewayHandler,
  developerAccountsHandler,
  developersHandler,
  eventsHandler,
  filesHandler,
  marketsHandler,
  ownershipHandler,
  permissionHandler,
  reviewsHandler,
  statsHandler,
  stripeGatewayHandler,
  transactionsHandler,
  userAccountsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', customGatewayHandler)
  .route('/', developerAccountsHandler)
  .route('/', developersHandler)
  .route('/', eventsHandler)
  .route('/', filesHandler)
  .route('/', marketsHandler)
  .route('/', ownershipHandler)
  .route('/', permissionHandler)
  .route('/', reviewsHandler)
  .route('/', statsHandler)
  .route('/', stripeGatewayHandler)
  .route('/', transactionsHandler)
  .route('/', userAccountsHandler)
  .route('/', usersHandler)

export default app
