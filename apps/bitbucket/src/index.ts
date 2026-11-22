import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonHandler,
  branchingModelHandler,
  branchRestrictionsHandler,
  commitsHandler,
  commitStatusesHandler,
  deploymentsHandler,
  downloadsHandler,
  gpgHandler,
  mergeQueuesHandler,
  pipelinesHandler,
  projectsHandler,
  propertiesHandler,
  pullrequestsHandler,
  refsHandler,
  reportsHandler,
  repositoriesHandler,
  searchHandler,
  snippetsHandler,
  sourceHandler,
  sshHandler,
  usersHandler,
  webhooksHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addonHandler)
  .route('/', webhooksHandler)
  .route('/', repositoriesHandler)
  .route('/', branchRestrictionsHandler)
  .route('/', branchingModelHandler)
  .route('/', commitsHandler)
  .route('/', propertiesHandler)
  .route('/', pullrequestsHandler)
  .route('/', reportsHandler)
  .route('/', commitStatusesHandler)
  .route('/', deploymentsHandler)
  .route('/', pipelinesHandler)
  .route('/', downloadsHandler)
  .route('/', sourceHandler)
  .route('/', mergeQueuesHandler)
  .route('/', refsHandler)
  .route('/', snippetsHandler)
  .route('/', searchHandler)
  .route('/', usersHandler)
  .route('/', workspacesHandler)
  .route('/', gpgHandler)
  .route('/', sshHandler)
  .route('/', projectsHandler)

export default app
