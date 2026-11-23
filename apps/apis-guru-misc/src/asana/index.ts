import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentsHandler,
  batchHandler,
  customFieldsHandler,
  enumOptionsHandler,
  eventsHandler,
  goalRelationshipsHandler,
  goalsHandler,
  jobsHandler,
  organizationExportsHandler,
  portfolioMembershipsHandler,
  portfoliosHandler,
  projectBriefsHandler,
  projectMembershipsHandler,
  projectsHandler,
  projectStatusesHandler,
  projectTemplatesHandler,
  sectionsHandler,
  statusUpdatesHandler,
  storiesHandler,
  tagsHandler,
  tasksHandler,
  teamMembershipsHandler,
  teamsHandler,
  timePeriodsHandler,
  usersHandler,
  userTaskListsHandler,
  webhooksHandler,
  workspaceMembershipsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attachmentsHandler)
  .route('/', batchHandler)
  .route('/', customFieldsHandler)
  .route('/', enumOptionsHandler)
  .route('/', eventsHandler)
  .route('/', goalRelationshipsHandler)
  .route('/', goalsHandler)
  .route('/', jobsHandler)
  .route('/', organizationExportsHandler)
  .route('/', portfolioMembershipsHandler)
  .route('/', portfoliosHandler)
  .route('/', projectBriefsHandler)
  .route('/', projectMembershipsHandler)
  .route('/', projectStatusesHandler)
  .route('/', projectTemplatesHandler)
  .route('/', projectsHandler)
  .route('/', sectionsHandler)
  .route('/', statusUpdatesHandler)
  .route('/', storiesHandler)
  .route('/', tagsHandler)
  .route('/', tasksHandler)
  .route('/', teamMembershipsHandler)
  .route('/', teamsHandler)
  .route('/', timePeriodsHandler)
  .route('/', userTaskListsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', workspaceMembershipsHandler)
  .route('/', workspacesHandler)

export default app
