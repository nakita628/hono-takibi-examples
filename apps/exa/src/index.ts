import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentHandler,
  answerHandler,
  batchesHandler,
  contentsHandler,
  enrichmentsHandler,
  eventsHandler,
  findSimilarHandler,
  importsHandler,
  itemsHandler,
  monitorsHandler,
  monitorsRunsHandler,
  runsHandler,
  searchesHandler,
  searchHandler,
  teamsHandler,
  webhooksAttemptsHandler,
  webhooksHandler,
  websetsHandler,
  websetsPreviewHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', searchHandler)
  .route('/', contentsHandler)
  .route('/', answerHandler)
  .route('/', findSimilarHandler)
  .route('/', monitorsHandler)
  .route('/', runsHandler)
  .route('/', agentHandler)
  .route('/', batchesHandler)
  .route('/', teamsHandler)
  .route('/', websetsHandler)
  .route('/', searchesHandler)
  .route('/', enrichmentsHandler)
  .route('/', itemsHandler)
  .route('/', websetsPreviewHandler)
  .route('/', monitorsRunsHandler)
  .route('/', importsHandler)
  .route('/', webhooksHandler)
  .route('/', webhooksAttemptsHandler)
  .route('/', eventsHandler)

export default app
