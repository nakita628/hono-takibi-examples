import { OpenAPIHono } from '@hono/zod-openapi'
import {
  countriesHandler,
  currenciesHandler,
  fundingHandler,
  fundingManagerPrivateHandler,
  loginHandler,
  payeeInvitationHandler,
  payeesHandler,
  paymentAuditServiceDeprecatedHandler,
  paymentAuditServiceHandler,
  payorHierarchyHandler,
  payorsHandler,
  payorsPrivateHandler,
  payoutsHandler,
  sourceAccountsHandler,
  tokensHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', loginHandler)
  .route('/', fundingHandler)
  .route('/', paymentAuditServiceDeprecatedHandler)
  .route('/', countriesHandler)
  .route('/', payoutsHandler)
  .route('/', payorHierarchyHandler)
  .route('/', payorsPrivateHandler)
  .route('/', payorsHandler)
  .route('/', sourceAccountsHandler)
  .route('/', webhooksHandler)
  .route('/', currenciesHandler)
  .route('/', fundingManagerPrivateHandler)
  .route('/', usersHandler)
  .route('/', tokensHandler)
  .route('/', payeesHandler)
  .route('/', payeeInvitationHandler)
  .route('/', paymentAuditServiceHandler)

export default app
