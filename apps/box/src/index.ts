import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiAgentDefaultHandler,
  aiAgentsHandler,
  aiHandler,
  authorizeHandler,
  collaborationsHandler,
  collaborationWhitelistEntriesHandler,
  collaborationWhitelistExemptTargetsHandler,
  collectionsHandler,
  commentsHandler,
  devicePinnersHandler,
  enterprisesHandler,
  eventsHandler,
  fileRequestsHandler,
  filesHandler,
  fileVersionLegalHoldsHandler,
  fileVersionRetentionsHandler,
  folderLocksHandler,
  foldersHandler,
  groupMembershipsHandler,
  groupsHandler,
  integrationMappingsHandler,
  invitesHandler,
  legalHoldPoliciesHandler,
  legalHoldPolicyAssignmentsHandler,
  metadataCascadePoliciesHandler,
  metadataQueriesHandler,
  metadataTaxonomiesHandler,
  metadataTemplatesHandler,
  oauth2Handler,
  recentItemsHandler,
  retentionPoliciesHandler,
  retentionPolicyAssignmentsHandler,
  searchHandler,
  sharedItemsAppItemsHandler,
  sharedItemsFoldersHandler,
  sharedItemsHandler,
  sharedItemsWebLinksHandler,
  shieldInformationBarrierReportsHandler,
  shieldInformationBarrierSegmentMembersHandler,
  shieldInformationBarrierSegmentRestrictionsHandler,
  shieldInformationBarrierSegmentsHandler,
  shieldInformationBarriersHandler,
  signRequestsHandler,
  signTemplatesHandler,
  skillInvocationsHandler,
  storagePoliciesHandler,
  storagePolicyAssignmentsHandler,
  taskAssignmentsHandler,
  tasksHandler,
  termsOfServicesHandler,
  termsOfServiceUserStatusesHandler,
  usersHandler,
  webhooksHandler,
  webLinksHandler,
  workflowsHandler,
  zipDownloadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authorizeHandler)
  .route('/', oauth2Handler)
  .route('/', filesHandler)
  .route('/', fileRequestsHandler)
  .route('/', foldersHandler)
  .route('/', folderLocksHandler)
  .route('/', metadataTemplatesHandler)
  .route('/', metadataCascadePoliciesHandler)
  .route('/', metadataQueriesHandler)
  .route('/', commentsHandler)
  .route('/', collaborationsHandler)
  .route('/', searchHandler)
  .route('/', tasksHandler)
  .route('/', taskAssignmentsHandler)
  .route('/', sharedItemsHandler)
  .route('/', sharedItemsFoldersHandler)
  .route('/', webLinksHandler)
  .route('/', sharedItemsWebLinksHandler)
  .route('/', sharedItemsAppItemsHandler)
  .route('/', usersHandler)
  .route('/', invitesHandler)
  .route('/', groupsHandler)
  .route('/', groupMembershipsHandler)
  .route('/', webhooksHandler)
  .route('/', skillInvocationsHandler)
  .route('/', eventsHandler)
  .route('/', collectionsHandler)
  .route('/', recentItemsHandler)
  .route('/', retentionPoliciesHandler)
  .route('/', retentionPolicyAssignmentsHandler)
  .route('/', legalHoldPoliciesHandler)
  .route('/', legalHoldPolicyAssignmentsHandler)
  .route('/', fileVersionRetentionsHandler)
  .route('/', fileVersionLegalHoldsHandler)
  .route('/', shieldInformationBarriersHandler)
  .route('/', shieldInformationBarrierReportsHandler)
  .route('/', shieldInformationBarrierSegmentsHandler)
  .route('/', shieldInformationBarrierSegmentMembersHandler)
  .route('/', shieldInformationBarrierSegmentRestrictionsHandler)
  .route('/', devicePinnersHandler)
  .route('/', enterprisesHandler)
  .route('/', termsOfServicesHandler)
  .route('/', termsOfServiceUserStatusesHandler)
  .route('/', collaborationWhitelistEntriesHandler)
  .route('/', collaborationWhitelistExemptTargetsHandler)
  .route('/', storagePoliciesHandler)
  .route('/', storagePolicyAssignmentsHandler)
  .route('/', zipDownloadsHandler)
  .route('/', signRequestsHandler)
  .route('/', workflowsHandler)
  .route('/', signTemplatesHandler)
  .route('/', integrationMappingsHandler)
  .route('/', aiHandler)
  .route('/', aiAgentDefaultHandler)
  .route('/', aiAgentsHandler)
  .route('/', metadataTaxonomiesHandler)

export default app
