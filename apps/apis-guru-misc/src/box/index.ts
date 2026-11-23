import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  invitesHandler,
  legalHoldPoliciesHandler,
  legalHoldPolicyAssignmentsHandler,
  metadataCascadePoliciesHandler,
  metadataQueriesHandler,
  metadataQueryIndicesHandler,
  metadataTemplatesHandler,
  oauth2Handler,
  recentItemsHandler,
  retentionPoliciesHandler,
  retentionPolicyAssignmentsHandler,
  searchHandler,
  sharedItemsFoldersHandler,
  sharedItemsHandler,
  sharedItemsWebLinksHandler,
  shieldInformationBarrierReportsHandler,
  shieldInformationBarrierSegmentMembersHandler,
  shieldInformationBarrierSegmentRestrictionsHandler,
  shieldInformationBarrierSegmentsHandler,
  shieldInformationBarriersHandler,
  signRequestsHandler,
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
  .route('/', collaborationWhitelistEntriesHandler)
  .route('/', collaborationWhitelistExemptTargetsHandler)
  .route('/', collaborationsHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', devicePinnersHandler)
  .route('/', enterprisesHandler)
  .route('/', eventsHandler)
  .route('/', fileRequestsHandler)
  .route('/', fileVersionLegalHoldsHandler)
  .route('/', fileVersionRetentionsHandler)
  .route('/', filesHandler)
  .route('/', folderLocksHandler)
  .route('/', foldersHandler)
  .route('/', groupMembershipsHandler)
  .route('/', groupsHandler)
  .route('/', invitesHandler)
  .route('/', legalHoldPoliciesHandler)
  .route('/', legalHoldPolicyAssignmentsHandler)
  .route('/', metadataCascadePoliciesHandler)
  .route('/', metadataQueriesHandler)
  .route('/', metadataQueryIndicesHandler)
  .route('/', metadataTemplatesHandler)
  .route('/', oauth2Handler)
  .route('/', recentItemsHandler)
  .route('/', retentionPoliciesHandler)
  .route('/', retentionPolicyAssignmentsHandler)
  .route('/', searchHandler)
  .route('/', sharedItemsHandler)
  .route('/', sharedItemsFoldersHandler)
  .route('/', sharedItemsWebLinksHandler)
  .route('/', shieldInformationBarrierReportsHandler)
  .route('/', shieldInformationBarrierSegmentMembersHandler)
  .route('/', shieldInformationBarrierSegmentRestrictionsHandler)
  .route('/', shieldInformationBarrierSegmentsHandler)
  .route('/', shieldInformationBarriersHandler)
  .route('/', signRequestsHandler)
  .route('/', skillInvocationsHandler)
  .route('/', storagePoliciesHandler)
  .route('/', storagePolicyAssignmentsHandler)
  .route('/', taskAssignmentsHandler)
  .route('/', tasksHandler)
  .route('/', termsOfServiceUserStatusesHandler)
  .route('/', termsOfServicesHandler)
  .route('/', usersHandler)
  .route('/', webLinksHandler)
  .route('/', webhooksHandler)
  .route('/', workflowsHandler)
  .route('/', zipDownloadsHandler)

export default app
