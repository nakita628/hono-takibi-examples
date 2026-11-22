import { OpenAPIHono } from '@hono/zod-openapi'
import {
  audioHandler,
  balancesHandler,
  breakdownHandler,
  configurationsHandler,
  distributionCredentialsHandler,
  fieldsHandler,
  invitesHandler,
  keysHandler,
  mediaHandler,
  membersHandler,
  modelsHandler,
  projectsHandler,
  purchasesHandler,
  requestsHandler,
  scopesHandler,
  textHandler,
  tokensHandler,
  usageHandler,
  variablesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', modelsHandler)
  .route('/', configurationsHandler)
  .route('/', variablesHandler)
  .route('/', mediaHandler)
  .route('/', audioHandler)
  .route('/', textHandler)
  .route('/', projectsHandler)
  .route('/', keysHandler)
  .route('/', membersHandler)
  .route('/', scopesHandler)
  .route('/', invitesHandler)
  .route('/', requestsHandler)
  .route('/', usageHandler)
  .route('/', fieldsHandler)
  .route('/', breakdownHandler)
  .route('/', balancesHandler)
  .route('/', purchasesHandler)
  .route('/', distributionCredentialsHandler)
  .route('/', tokensHandler)

export default app
