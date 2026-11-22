import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  activityHandler,
  agentAutomationsHandler,
  agentMergeHandler,
  agentsHandler,
  agentTasksHandler,
  appsHandler,
  billingHandler,
  campaignsHandler,
  checksHandler,
  classroomHandler,
  codeQualityHandler,
  codeScanningHandler,
  codeSecurityHandler,
  codesOfConductHandler,
  codespacesHandler,
  copilotHandler,
  copilotSpacesHandler,
  credentialsHandler,
  dependabotHandler,
  dependencyGraphHandler,
  emojisHandler,
  gistsHandler,
  gitHandler,
  gitignoreHandler,
  hostedComputeHandler,
  interactionsHandler,
  issuesHandler,
  licensesHandler,
  markdownHandler,
  metaHandler,
  migrationsHandler,
  oidcHandler,
  orgsHandler,
  packagesHandler,
  privateRegistriesHandler,
  projectsHandler,
  pullsHandler,
  rateLimitHandler,
  reactionsHandler,
  reposHandler,
  searchHandler,
  secretScanningHandler,
  securityAdvisoriesHandler,
  teamsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', metaHandler)
  .route('/', securityAdvisoriesHandler)
  .route('/', agentAutomationsHandler)
  .route('/', agentMergeHandler)
  .route('/', agentTasksHandler)
  .route('/', appsHandler)
  .route('/', classroomHandler)
  .route('/', codesOfConductHandler)
  .route('/', credentialsHandler)
  .route('/', emojisHandler)
  .route('/', actionsHandler)
  .route('/', oidcHandler)
  .route('/', codeSecurityHandler)
  .route('/', copilotHandler)
  .route('/', dependabotHandler)
  .route('/', activityHandler)
  .route('/', gistsHandler)
  .route('/', gitignoreHandler)
  .route('/', issuesHandler)
  .route('/', licensesHandler)
  .route('/', markdownHandler)
  .route('/', orgsHandler)
  .route('/', billingHandler)
  .route('/', agentsHandler)
  .route('/', campaignsHandler)
  .route('/', codeScanningHandler)
  .route('/', codespacesHandler)
  .route('/', copilotSpacesHandler)
  .route('/', packagesHandler)
  .route('/', interactionsHandler)
  .route('/', migrationsHandler)
  .route('/', privateRegistriesHandler)
  .route('/', projectsHandler)
  .route('/', reposHandler)
  .route('/', secretScanningHandler)
  .route('/', hostedComputeHandler)
  .route('/', teamsHandler)
  .route('/', rateLimitHandler)
  .route('/', checksHandler)
  .route('/', codeQualityHandler)
  .route('/', reactionsHandler)
  .route('/', dependencyGraphHandler)
  .route('/', gitHandler)
  .route('/', pullsHandler)
  .route('/', searchHandler)
  .route('/', usersHandler)

export default app
