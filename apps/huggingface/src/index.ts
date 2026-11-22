import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  authHandler,
  blogsHandler,
  bucketsHandler,
  collectionsHandler,
  containersHandler,
  datasetsHandler,
  discussionsHandler,
  docsHandler,
  inferenceEndpointsHandler,
  jobsHandler,
  kernelsHandler,
  modelsHandler,
  notificationsHandler,
  oauthHandler,
  orgsHandler,
  papersHandler,
  repoSearchHandler,
  reposHandler,
  resourceGroupsHandler,
  scimHandler,
  serviceAccountsHandler,
  spacesHandler,
  sqlConsoleHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', notificationsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', papersHandler)
  .route('/', orgsHandler)
  .route('/', resourceGroupsHandler)
  .route('/', serviceAccountsHandler)
  .route('/', scimHandler)
  .route('/', oauthHandler)
  .route('/', containersHandler)
  .route('/', discussionsHandler)
  .route('/', blogsHandler)
  .route('/', docsHandler)
  .route('/', authHandler)
  .route('/', inferenceEndpointsHandler)
  .route('/', jobsHandler)
  .route('/', modelsHandler)
  .route('/', spacesHandler)
  .route('/', datasetsHandler)
  .route('/', kernelsHandler)
  .route('/', bucketsHandler)
  .route('/', reposHandler)
  .route('/', agentsHandler)
  .route('/', repoSearchHandler)
  .route('/', sqlConsoleHandler)
  .route('/', collectionsHandler)

export default app
