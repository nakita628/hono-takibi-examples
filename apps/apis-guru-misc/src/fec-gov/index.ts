import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditHandler,
  candidateHandler,
  committeeHandler,
  communicationCostHandler,
  datesHandler,
  debtsHandler,
  disbursementsHandler,
  efilingHandler,
  electioneeringHandler,
  filerResourcesHandler,
  filingsHandler,
  financialHandler,
  independentExpendituresHandler,
  legalHandler,
  loansHandler,
  partyCoordinatedExpendituresHandler,
  presidentialHandler,
  receiptsHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', auditHandler)
  .route('/', datesHandler)
  .route('/', candidateHandler)
  .route('/', committeeHandler)
  .route('/', filingsHandler)
  .route('/', financialHandler)
  .route('/', communicationCostHandler)
  .route('/', efilingHandler)
  .route('/', electioneeringHandler)
  .route('/', legalHandler)
  .route('/', searchHandler)
  .route('/', presidentialHandler)
  .route('/', filerResourcesHandler)
  .route('/', receiptsHandler)
  .route('/', disbursementsHandler)
  .route('/', loansHandler)
  .route('/', debtsHandler)
  .route('/', independentExpendituresHandler)
  .route('/', partyCoordinatedExpendituresHandler)

export default app
