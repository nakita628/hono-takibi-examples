import { OpenAPIHono } from '@hono/zod-openapi'
import {
  atmsHandler,
  branchesHandler,
  businessCurrentAccountsHandler,
  commercialCreditCardsHandler,
  personalCurrentAccountsHandler,
  unsecuredSmeLoansHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', atmsHandler)
  .route('/', branchesHandler)
  .route('/', businessCurrentAccountsHandler)
  .route('/', commercialCreditCardsHandler)
  .route('/', personalCurrentAccountsHandler)
  .route('/', unsecuredSmeLoansHandler)

export default app
