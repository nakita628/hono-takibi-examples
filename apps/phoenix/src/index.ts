import { OpenAPIHono } from '@hono/zod-openapi'
import {
  annotationConfigsHandler,
  annotationsHandler,
  apiKeysHandler,
  arizePhoenixVersionHandler,
  authHandler,
  chatCompletionsHandler,
  chatHandler,
  datasetsHandler,
  experimentsHandler,
  healthzHandler,
  modelProvidersHandler,
  oauth2Handler,
  projectsHandler,
  promptsHandler,
  readyzHandler,
  secretsHandler,
  sessionsHandler,
  spansHandler,
  tracesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', annotationConfigsHandler)
  .route('/', annotationsHandler)
  .route('/', datasetsHandler)
  .route('/', experimentsHandler)
  .route('/', tracesHandler)
  .route('/', spansHandler)
  .route('/', promptsHandler)
  .route('/', projectsHandler)
  .route('/', modelProvidersHandler)
  .route('/', sessionsHandler)
  .route('/', usersHandler)
  .route('/', secretsHandler)
  .route('/', apiKeysHandler)
  .route('/', chatCompletionsHandler)
  .route('/', authHandler)
  .route('/', oauth2Handler)
  .route('/', chatHandler)
  .route('/', arizePhoenixVersionHandler)
  .route('/', healthzHandler)
  .route('/', readyzHandler)

export default app
