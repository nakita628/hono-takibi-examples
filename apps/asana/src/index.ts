import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessRequestsHandler,
  agentsHandler,
  aiStudioUsageAPIHandler,
  allocationsHandler,
  attachmentsHandler,
  auditLogAPIHandler,
  batchAPIHandler,
  budgetsHandler,
  customFieldSettingsHandler,
  customFieldsHandler,
  customTypesHandler,
  eventsHandler,
  exportsHandler,
  goalRelationshipsHandler,
  goalsHandler,
  jobsHandler,
  membershipsHandler,
  notificationsHandler,
  oooEntriesHandler,
  organizationExportsHandler,
  portfolioMembershipsHandler,
  portfoliosHandler,
  projectBriefsHandler,
  projectMembershipsHandler,
  projectPortfolioSettingsHandler,
  projectsHandler,
  projectStatusesHandler,
  projectTemplatesHandler,
  ratesHandler,
  reactionsHandler,
  recordsHandler,
  rolesHandler,
  rulesHandler,
  sectionsHandler,
  statusUpdatesHandler,
  storiesHandler,
  tablesHandler,
  tagsHandler,
  tasksHandler,
  taskTemplatesHandler,
  teamMembershipsHandler,
  teamsHandler,
  timePeriodsHandler,
  timesheetApprovalStatusesHandler,
  timeTrackingCategoriesHandler,
  timeTrackingEntriesHandler,
  typeaheadHandler,
  usersHandler,
  userTaskListsHandler,
  webhooksHandler,
  workspaceMembershipsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessRequestsHandler)
  .route('/', agentsHandler)
  .route('/', aiStudioUsageAPIHandler)
  .route('/', allocationsHandler)
  .route('/', attachmentsHandler)
  .route('/', auditLogAPIHandler)
  .route('/', batchAPIHandler)
  .route('/', budgetsHandler)
  .route('/', customFieldSettingsHandler)
  .route('/', customFieldsHandler)
  .route('/', customTypesHandler)
  .route('/', eventsHandler)
  .route('/', exportsHandler)
  .route('/', goalRelationshipsHandler)
  .route('/', goalsHandler)
  .route('/', jobsHandler)
  .route('/', membershipsHandler)
  .route('/', notificationsHandler)
  .route('/', oooEntriesHandler)
  .route('/', organizationExportsHandler)
  .route('/', portfolioMembershipsHandler)
  .route('/', portfoliosHandler)
  .route('/', projectBriefsHandler)
  .route('/', projectMembershipsHandler)
  .route('/', projectPortfolioSettingsHandler)
  .route('/', projectStatusesHandler)
  .route('/', projectTemplatesHandler)
  .route('/', projectsHandler)
  .route('/', ratesHandler)
  .route('/', reactionsHandler)
  .route('/', recordsHandler)
  .route('/', rolesHandler)
  .route('/', rulesHandler)
  .route('/', sectionsHandler)
  .route('/', statusUpdatesHandler)
  .route('/', storiesHandler)
  .route('/', tablesHandler)
  .route('/', tagsHandler)
  .route('/', taskTemplatesHandler)
  .route('/', tasksHandler)
  .route('/', teamMembershipsHandler)
  .route('/', teamsHandler)
  .route('/', timePeriodsHandler)
  .route('/', timeTrackingCategoriesHandler)
  .route('/', timeTrackingEntriesHandler)
  .route('/', timesheetApprovalStatusesHandler)
  .route('/', typeaheadHandler)
  .route('/', userTaskListsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', workspaceMembershipsHandler)
  .route('/', workspacesHandler)

export default app
