import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetsHandler,
  authHandler,
  cloudstoragesHandler,
  commentsHandler,
  consensusHandler,
  eventsHandler,
  growthHandler,
  guidesHandler,
  invitationsHandler,
  issuesHandler,
  jobsHandler,
  labelsHandler,
  lambdaHandler,
  membershipsHandler,
  organizationsHandler,
  projectsHandler,
  qualityHandler,
  requestsHandler,
  schemaHandler,
  serverHandler,
  tasksHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetsHandler)
  .route('/', authHandler)
  .route('/', cloudstoragesHandler)
  .route('/', commentsHandler)
  .route('/', consensusHandler)
  .route('/', eventsHandler)
  .route('/', growthHandler)
  .route('/', guidesHandler)
  .route('/', invitationsHandler)
  .route('/', issuesHandler)
  .route('/', jobsHandler)
  .route('/', labelsHandler)
  .route('/', lambdaHandler)
  .route('/', membershipsHandler)
  .route('/', organizationsHandler)
  .route('/', projectsHandler)
  .route('/', qualityHandler)
  .route('/', requestsHandler)
  .route('/', schemaHandler)
  .route('/', serverHandler)
  .route('/', tasksHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
