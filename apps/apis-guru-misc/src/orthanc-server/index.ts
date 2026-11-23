import { OpenAPIHono } from '@hono/zod-openapi'
import {
  changesHandler,
  exportsHandler,
  instancesHandler,
  jobsHandler,
  modalitiesHandler,
  patientsHandler,
  peersHandler,
  pluginsHandler,
  queriesHandler,
  seriesHandler,
  statisticsHandler,
  storageCommitmentHandler,
  studiesHandler,
  systemHandler,
  toolsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', changesHandler)
  .route('/', exportsHandler)
  .route('/', instancesHandler)
  .route('/', jobsHandler)
  .route('/', modalitiesHandler)
  .route('/', patientsHandler)
  .route('/', peersHandler)
  .route('/', pluginsHandler)
  .route('/', queriesHandler)
  .route('/', seriesHandler)
  .route('/', statisticsHandler)
  .route('/', storageCommitmentHandler)
  .route('/', studiesHandler)
  .route('/', systemHandler)
  .route('/', toolsHandler)

export default app
