import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  assistantsHandler,
  audioHandler,
  batchesHandler,
  chatHandler,
  chatkitHandler,
  completionsHandler,
  containersHandler,
  contentProvenanceChecksHandler,
  conversationsHandler,
  decisionsHandler,
  embeddingsHandler,
  evalsHandler,
  filesHandler,
  fineTuningHandler,
  imagesHandler,
  liveHandler,
  modelsHandler,
  moderationsHandler,
  organizationHandler,
  projectsHandler,
  realtimeHandler,
  responsesBetaTrueHandler,
  responsesHandler,
  safetyHandler,
  skillsHandler,
  threadsHandler,
  uploadsHandler,
  vaultsHandler,
  vectorStoresHandler,
  videosHandler,
  webhookEndpointsHandler,
  webhookEventTypesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assistantsHandler)
  .route('/', audioHandler)
  .route('/', batchesHandler)
  .route('/', chatHandler)
  .route('/', completionsHandler)
  .route('/', containersHandler)
  .route('/', conversationsHandler)
  .route('/', embeddingsHandler)
  .route('/', evalsHandler)
  .route('/', filesHandler)
  .route('/', fineTuningHandler)
  .route('/', imagesHandler)
  .route('/', liveHandler)
  .route('/', modelsHandler)
  .route('/', moderationsHandler)
  .route('/', organizationHandler)
  .route('/', projectsHandler)
  .route('/', realtimeHandler)
  .route('/', responsesHandler)
  .route('/', threadsHandler)
  .route('/', uploadsHandler)
  .route('/', vectorStoresHandler)
  .route('/', safetyHandler)
  .route('/', contentProvenanceChecksHandler)
  .route('/', videosHandler)
  .route('/', skillsHandler)
  .route('/', chatkitHandler)
  .route('/', decisionsHandler)
  .route('/', agentsHandler)
  .route('/', vaultsHandler)
  .route('/', webhookEndpointsHandler)
  .route('/', webhookEventTypesHandler)
  .route('/', responsesBetaTrueHandler)

export default app
