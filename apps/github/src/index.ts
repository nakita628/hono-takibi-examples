import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  advisoriesHandler,
  agentsHandler,
  appHandler,
  applicationsHandler,
  appManifestsHandler,
  appsHandler,
  assignmentsHandler,
  classroomsHandler,
  codesOfConductHandler,
  credentialsHandler,
  emojisHandler,
  enterprisesHandler,
  eventsHandler,
  feedsHandler,
  gistsHandler,
  gitignoreHandler,
  installationHandler,
  issuesHandler,
  licensesHandler,
  markdownHandler,
  marketplaceListingHandler,
  metaHandler,
  networksHandler,
  notificationsHandler,
  octocatHandler,
  organizationsHandler,
  orgsHandler,
  rateLimitHandler,
  reposHandler,
  repositoriesHandler,
  searchHandler,
  teamsHandler,
  userHandler,
  usersHandler,
  versionsHandler,
  zenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', advisoriesHandler)
  .route('/', agentsHandler)
  .route('/', appHandler)
  .route('/', appManifestsHandler)
  .route('/', applicationsHandler)
  .route('/', appsHandler)
  .route('/', assignmentsHandler)
  .route('/', classroomsHandler)
  .route('/', codesOfConductHandler)
  .route('/', credentialsHandler)
  .route('/', emojisHandler)
  .route('/', enterprisesHandler)
  .route('/', eventsHandler)
  .route('/', feedsHandler)
  .route('/', gistsHandler)
  .route('/', gitignoreHandler)
  .route('/', installationHandler)
  .route('/', issuesHandler)
  .route('/', licensesHandler)
  .route('/', markdownHandler)
  .route('/', marketplaceListingHandler)
  .route('/', metaHandler)
  .route('/', networksHandler)
  .route('/', notificationsHandler)
  .route('/', octocatHandler)
  .route('/', organizationsHandler)
  .route('/', orgsHandler)
  .route('/', rateLimitHandler)
  .route('/', reposHandler)
  .route('/', repositoriesHandler)
  .route('/', searchHandler)
  .route('/', teamsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', versionsHandler)
  .route('/', zenHandler)

export default app
