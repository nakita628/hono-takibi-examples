import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  agentsHandler,
  authenticatorsHandler,
  coreHandler,
  cryptoHandler,
  debugHandler,
  endpointsHandler,
  enterpriseHandler,
  eventsHandler,
  flowsHandler,
  lifecycleHandler,
  managedHandler,
  oauth2Handler,
  outpostsHandler,
  policiesHandler,
  propertymappingsHandler,
  providersHandler,
  racHandler,
  rbacHandler,
  reportsHandler,
  requestsHandler,
  rootHandler,
  schemaHandler,
  sourcesHandler,
  ssfHandler,
  stagesHandler,
  tasksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', agentsHandler)
  .route('/', authenticatorsHandler)
  .route('/', coreHandler)
  .route('/', cryptoHandler)
  .route('/', debugHandler)
  .route('/', endpointsHandler)
  .route('/', enterpriseHandler)
  .route('/', eventsHandler)
  .route('/', flowsHandler)
  .route('/', lifecycleHandler)
  .route('/', managedHandler)
  .route('/', oauth2Handler)
  .route('/', outpostsHandler)
  .route('/', policiesHandler)
  .route('/', propertymappingsHandler)
  .route('/', providersHandler)
  .route('/', racHandler)
  .route('/', rbacHandler)
  .route('/', reportsHandler)
  .route('/', requestsHandler)
  .route('/', rootHandler)
  .route('/', schemaHandler)
  .route('/', sourcesHandler)
  .route('/', ssfHandler)
  .route('/', stagesHandler)
  .route('/', tasksHandler)

export default app
