import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  assistantsHandler,
  boardHandler,
  callsHandler,
  campaignsHandler,
  chatsHandler,
  evalHandler,
  filesHandler,
  insightHandler,
  knowledgeBasesV2Handler,
  observabilityScorecardHandler,
  phoneNumbersHandler,
  providerResourcesHandler,
  sessionsHandler,
  simulationPersonalitiesHandler,
  simulationRunsHandler,
  simulationScenariosHandler,
  simulationsHandler,
  simulationSuitesHandler,
  squadsHandler,
  structuredOutputsHandler,
  toolsHandler,
  trafficAllocationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assistantsHandler)
  .route('/', squadsHandler)
  .route('/', callsHandler)
  .route('/', chatsHandler)
  .route('/', campaignsHandler)
  .route('/', sessionsHandler)
  .route('/', trafficAllocationsHandler)
  .route('/', phoneNumbersHandler)
  .route('/', toolsHandler)
  .route('/', filesHandler)
  .route('/', knowledgeBasesV2Handler)
  .route('/', structuredOutputsHandler)
  .route('/', simulationPersonalitiesHandler)
  .route('/', simulationScenariosHandler)
  .route('/', simulationRunsHandler)
  .route('/', simulationSuitesHandler)
  .route('/', simulationsHandler)
  .route('/', insightHandler)
  .route('/', boardHandler)
  .route('/', evalHandler)
  .route('/', observabilityScorecardHandler)
  .route('/', providerResourcesHandler)
  .route('/', analyticsHandler)

export default app
