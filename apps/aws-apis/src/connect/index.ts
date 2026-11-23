import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentStatusHandler,
  contactFlowModulesHandler,
  contactFlowModulesSummaryHandler,
  contactFlowsHandler,
  contactFlowsSummaryHandler,
  contactHandler,
  contactsHandler,
  defaultVocabularyHandler,
  defaultVocabularySummaryHandler,
  hoursOfOperationsHandler,
  hoursOfOperationsSummaryHandler,
  instanceHandler,
  metricsHandler,
  phoneNumberHandler,
  phoneNumbersSummaryHandler,
  promptsSummaryHandler,
  queuesHandler,
  queuesSummaryHandler,
  quickConnectsHandler,
  routingProfilesHandler,
  routingProfilesSummaryHandler,
  rulesHandler,
  searchQueuesHandler,
  searchRoutingProfilesHandler,
  searchSecurityProfilesHandler,
  searchUsersHandler,
  securityProfilesHandler,
  securityProfilesPermissionsHandler,
  securityProfilesSummaryHandler,
  tagsHandler,
  trafficDistributionGroupHandler,
  trafficDistributionGroupsHandler,
  trafficDistributionHandler,
  userHandler,
  userHierarchyGroupsHandler,
  userHierarchyGroupsSummaryHandler,
  userHierarchyStructureHandler,
  usersHandler,
  usersSummaryHandler,
  vocabularyHandler,
  vocabularyRemoveHandler,
  vocabularySummaryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', instanceHandler)
  .route('/', defaultVocabularyHandler)
  .route('/', phoneNumberHandler)
  .route('/', queuesHandler)
  .route('/', routingProfilesHandler)
  .route('/', agentStatusHandler)
  .route('/', contactFlowsHandler)
  .route('/', contactFlowModulesHandler)
  .route('/', hoursOfOperationsHandler)
  .route('/', contactHandler)
  .route('/', quickConnectsHandler)
  .route('/', rulesHandler)
  .route('/', securityProfilesHandler)
  .route('/', trafficDistributionGroupHandler)
  .route('/', usersHandler)
  .route('/', userHierarchyGroupsHandler)
  .route('/', vocabularyHandler)
  .route('/', vocabularyRemoveHandler)
  .route('/', contactsHandler)
  .route('/', userHierarchyStructureHandler)
  .route('/', metricsHandler)
  .route('/', userHandler)
  .route('/', trafficDistributionHandler)
  .route('/', contactFlowModulesSummaryHandler)
  .route('/', contactFlowsSummaryHandler)
  .route('/', defaultVocabularySummaryHandler)
  .route('/', hoursOfOperationsSummaryHandler)
  .route('/', phoneNumbersSummaryHandler)
  .route('/', promptsSummaryHandler)
  .route('/', queuesSummaryHandler)
  .route('/', routingProfilesSummaryHandler)
  .route('/', securityProfilesPermissionsHandler)
  .route('/', securityProfilesSummaryHandler)
  .route('/', tagsHandler)
  .route('/', trafficDistributionGroupsHandler)
  .route('/', userHierarchyGroupsSummaryHandler)
  .route('/', usersSummaryHandler)
  .route('/', searchQueuesHandler)
  .route('/', searchRoutingProfilesHandler)
  .route('/', searchSecurityProfilesHandler)
  .route('/', searchUsersHandler)
  .route('/', vocabularySummaryHandler)

export default app
