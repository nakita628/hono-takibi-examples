import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cronsHandler,
  dashboardsHandler,
  discoverHandler,
  environmentsHandler,
  eventsHandler,
  exploreHandler,
  flagsHandler,
  integrationHandler,
  integrationsHandler,
  mobileBuildsHandler,
  monitorsHandler,
  notebooksHandler,
  organizationsHandler,
  profilingHandler,
  projectsHandler,
  releasesHandler,
  replaysHandler,
  scimHandler,
  seerHandler,
  snapshotsHandler,
  spikeProtectionHandler,
  teamsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', usersHandler)
  .route('/', organizationsHandler)
  .route('/', exploreHandler)
  .route('/', releasesHandler)
  .route('/', monitorsHandler)
  .route('/', integrationsHandler)
  .route('/', dashboardsHandler)
  .route('/', discoverHandler)
  .route('/', projectsHandler)
  .route('/', environmentsHandler)
  .route('/', flagsHandler)
  .route('/', eventsHandler)
  .route('/', integrationHandler)
  .route('/', teamsHandler)
  .route('/', cronsHandler)
  .route('/', notebooksHandler)
  .route('/', spikeProtectionHandler)
  .route('/', mobileBuildsHandler)
  .route('/', snapshotsHandler)
  .route('/', profilingHandler)
  .route('/', replaysHandler)
  .route('/', scimHandler)
  .route('/', seerHandler)

export default app
