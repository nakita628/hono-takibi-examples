import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessRequestsHandler,
  agentsHandler,
  allocationsHandler,
  attachmentsHandler,
  batchHandler,
  budgetsHandler,
  customFieldsHandler,
  customTypesHandler,
  enumOptionsHandler,
  eventsHandler,
  exportsHandler,
  goalRelationshipsHandler,
  goalsHandler,
  jobsHandler,
  membershipsHandler,
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
  ruleTriggersHandler,
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
  usersHandler,
  userTaskListsHandler,
  webhooksHandler,
  workspaceMembershipsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessRequestsHandler)
  .route('/', workspacesHandler)
  .route('/', agentsHandler)
  .route('/', allocationsHandler)
  .route('/', attachmentsHandler)
  .route('/', batchHandler)
  .route('/', budgetsHandler)
  .route('/', projectsHandler)
  .route('/', portfoliosHandler)
  .route('/', goalsHandler)
  .route('/', teamsHandler)
  .route('/', customFieldsHandler)
  .route('/', enumOptionsHandler)
  .route('/', customTypesHandler)
  .route('/', eventsHandler)
  .route('/', exportsHandler)
  .route('/', goalRelationshipsHandler)
  .route('/', jobsHandler)
  .route('/', membershipsHandler)
  .route('/', usersHandler)
  .route('/', oooEntriesHandler)
  .route('/', organizationExportsHandler)
  .route('/', portfolioMembershipsHandler)
  .route('/', projectBriefsHandler)
  .route('/', projectMembershipsHandler)
  .route('/', projectPortfolioSettingsHandler)
  .route('/', projectStatusesHandler)
  .route('/', projectTemplatesHandler)
  .route('/', tasksHandler)
  .route('/', ratesHandler)
  .route('/', reactionsHandler)
  .route('/', tablesHandler)
  .route('/', recordsHandler)
  .route('/', rolesHandler)
  .route('/', ruleTriggersHandler)
  .route('/', sectionsHandler)
  .route('/', statusUpdatesHandler)
  .route('/', storiesHandler)
  .route('/', tagsHandler)
  .route('/', taskTemplatesHandler)
  .route('/', userTaskListsHandler)
  .route('/', teamMembershipsHandler)
  .route('/', timePeriodsHandler)
  .route('/', timeTrackingCategoriesHandler)
  .route('/', timeTrackingEntriesHandler)
  .route('/', timesheetApprovalStatusesHandler)
  .route('/', webhooksHandler)
  .route('/', workspaceMembershipsHandler)

export default app
