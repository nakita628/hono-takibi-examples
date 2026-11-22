import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityLogsHandler,
  aiUsageHandler,
  commentReactionsHandler,
  commentsHandler,
  componentSetsHandler,
  componentsHandler,
  developerLogsHandler,
  devResourcesHandler,
  filesHandler,
  foldersHandler,
  libraryAnalyticsHandler,
  oEmbedHandler,
  paymentsHandler,
  projectsHandler,
  stylesHandler,
  teamsHandler,
  usersHandler,
  variablesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', filesHandler)
  .route('/', teamsHandler)
  .route('/', projectsHandler)
  .route('/', foldersHandler)
  .route('/', commentsHandler)
  .route('/', commentReactionsHandler)
  .route('/', usersHandler)
  .route('/', componentsHandler)
  .route('/', componentSetsHandler)
  .route('/', stylesHandler)
  .route('/', webhooksHandler)
  .route('/', activityLogsHandler)
  .route('/', developerLogsHandler)
  .route('/', aiUsageHandler)
  .route('/', paymentsHandler)
  .route('/', variablesHandler)
  .route('/', devResourcesHandler)
  .route('/', libraryAnalyticsHandler)
  .route('/', oEmbedHandler)

export default app
