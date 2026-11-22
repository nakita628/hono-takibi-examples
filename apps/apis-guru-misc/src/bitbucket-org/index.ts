import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonHandler,
  branchingModelHandler,
  branchRestrictionsHandler,
  commitsHandler,
  commitStatusesHandler,
  deploymentsHandler,
  downloadsHandler,
  issueTrackerHandler,
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
  .route('/', pullrequestsHandler)
  .route('/', repositoriesHandler)
  .route('/', branchRestrictionsHandler)
  .route('/', branchingModelHandler)
  .route('/', commitsHandler)
  .route('/', propertiesHandler)
  .route('/', reportsHandler)
  .route('/', commitStatusesHandler)
  .route('/', issueTrackerHandler)
  .route('/', deploymentsHandler)
  .route('/', pipelinesHandler)
  .route('/', downloadsHandler)
  .route('/', sourceHandler)
  .route('/', refsHandler)
  .route('/', snippetsHandler)
  .route('/', searchHandler)
  .route('/', usersHandler)
  .route('/', workspacesHandler)
  .route('/', sshHandler)
  .route('/', projectsHandler)

export default app
