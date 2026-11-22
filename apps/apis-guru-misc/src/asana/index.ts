import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentsHandler,
  auditLogAPIHandler,
  batchAPIHandler,
  customFieldSettingsHandler,
  customFieldsHandler,
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
  typeaheadHandler,
  usersHandler,
  userTaskListsHandler,
  webhooksHandler,
  workspaceMembershipsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attachmentsHandler)
  .route('/', batchAPIHandler)
  .route('/', customFieldsHandler)
  .route('/', eventsHandler)
  .route('/', goalRelationshipsHandler)
  .route('/', goalsHandler)
  .route('/', jobsHandler)
  .route('/', organizationExportsHandler)
  .route('/', portfolioMembershipsHandler)
  .route('/', portfoliosHandler)
  .route('/', customFieldSettingsHandler)
  .route('/', projectBriefsHandler)
  .route('/', projectMembershipsHandler)
  .route('/', projectStatusesHandler)
  .route('/', projectTemplatesHandler)
  .route('/', projectsHandler)
  .route('/', sectionsHandler)
  .route('/', tasksHandler)
  .route('/', statusUpdatesHandler)
  .route('/', storiesHandler)
  .route('/', tagsHandler)
  .route('/', teamMembershipsHandler)
  .route('/', teamsHandler)
  .route('/', usersHandler)
  .route('/', timePeriodsHandler)
  .route('/', userTaskListsHandler)
  .route('/', workspaceMembershipsHandler)
  .route('/', webhooksHandler)
  .route('/', workspacesHandler)
  .route('/', auditLogAPIHandler)
  .route('/', typeaheadHandler)

export default app
