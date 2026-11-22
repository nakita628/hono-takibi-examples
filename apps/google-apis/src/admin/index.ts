import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aspsHandler,
  channelsHandler,
  chromeosdevicesHandler,
  customerHandler,
  customersHandler,
  domainAliasesHandler,
  domainsHandler,
  groupsHandler,
  membersHandler,
  mobiledevicesHandler,
  orgunitsHandler,
  privilegesHandler,
  resourcesHandler,
  roleAssignmentsHandler,
  rolesHandler,
  schemasHandler,
  tokensHandler,
  twoStepVerificationHandler,
  usersHandler,
  verificationCodesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chromeosdevicesHandler)
  .route('/', customerHandler)
  .route('/', mobiledevicesHandler)
  .route('/', orgunitsHandler)
  .route('/', schemasHandler)
  .route('/', domainAliasesHandler)
  .route('/', domainsHandler)
  .route('/', resourcesHandler)
  .route('/', roleAssignmentsHandler)
  .route('/', rolesHandler)
  .route('/', privilegesHandler)
  .route('/', customersHandler)
  .route('/', groupsHandler)
  .route('/', membersHandler)
  .route('/', usersHandler)
  .route('/', aspsHandler)
  .route('/', tokensHandler)
  .route('/', twoStepVerificationHandler)
  .route('/', verificationCodesHandler)
  .route('/', channelsHandler)

export default app
