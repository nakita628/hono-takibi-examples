import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationHandler,
  boxSignHandler,
  classificationsHandler,
  classificationsOnFilesHandler,
  classificationsOnFoldersHandler,
  collaborationsHandler,
  collaborationsListHandler,
  collectionsHandler,
  commentsHandler,
  devicePinnersHandler,
  domainRestrictionsForCollaborationsHandler,
  domainRestrictionsUserExemptionsHandler,
  downloadsHandler,
  emailAliasesHandler,
  eventsHandler,
  fileRequestsHandler,
  filesHandler,
  fileVersionLegalHoldsHandler,
  fileVersionRetentionsHandler,
  fileVersionsHandler,
  folderLocksHandler,
  foldersHandler,
  groupMembershipsHandler,
  groupsHandler,
  invitesHandler,
  legalHoldPoliciesHandler,
  legalHoldPolicyAssignmentsHandler,
  metadataCascadePoliciesHandler,
  metadataInstancesFilesHandler,
  metadataInstancesFoldersHandler,
  metadataTemplatesHandler,
  recentItemsHandler,
  retentionPoliciesHandler,
  retentionPolicyAssignmentsHandler,
  searchHandler,
  sharedLinksFilesHandler,
  sharedLinksFoldersHandler,
  sharedLinksWebLinksHandler,
  shieldInformationBarrierReportsHandler,
  shieldInformationBarrierSegmentMembersHandler,
  shieldInformationBarrierSegmentRestrictionsHandler,
  shieldInformationBarrierSegmentsHandler,
  shieldInformationBarriersHandler,
  skillsHandler,
  storagePoliciesHandler,
  storagePolicyAssignmentsHandler,
  taskAssignmentsHandler,
  tasksHandler,
  termsOfServiceHandler,
  termsOfServiceUserStatusesHandler,
  transferFoldersHandler,
  trashedFilesHandler,
  trashedFoldersHandler,
  trashedItemsHandler,
  trashedWebLinksHandler,
  uploadsChunkedHandler,
  uploadsHandler,
  userAvatarsHandler,
  usersHandler,
  watermarksFilesHandler,
  watermarksFoldersHandler,
  webhooksHandler,
  webLinksHandler,
  workflowsHandler,
  zipDownloadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authorizationHandler)
  .route('/', domainRestrictionsForCollaborationsHandler)
  .route('/', domainRestrictionsUserExemptionsHandler)
  .route('/', collaborationsListHandler)
  .route('/', collaborationsHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', devicePinnersHandler)
  .route('/', eventsHandler)
  .route('/', fileRequestsHandler)
  .route('/', fileVersionLegalHoldsHandler)
  .route('/', fileVersionRetentionsHandler)
  .route('/', filesHandler)
  .route('/', uploadsHandler)
  .route('/', uploadsChunkedHandler)
  .route('/', trashedFilesHandler)
  .route('/', sharedLinksFilesHandler)
  .route('/', downloadsHandler)
  .route('/', metadataInstancesFilesHandler)
  .route('/', classificationsOnFilesHandler)
  .route('/', skillsHandler)
  .route('/', tasksHandler)
  .route('/', fileVersionsHandler)
  .route('/', watermarksFilesHandler)
  .route('/', folderLocksHandler)
  .route('/', foldersHandler)
  .route('/', trashedItemsHandler)
  .route('/', trashedFoldersHandler)
  .route('/', sharedLinksFoldersHandler)
  .route('/', metadataInstancesFoldersHandler)
  .route('/', classificationsOnFoldersHandler)
  .route('/', watermarksFoldersHandler)
  .route('/', groupMembershipsHandler)
  .route('/', groupsHandler)
  .route('/', invitesHandler)
  .route('/', legalHoldPoliciesHandler)
  .route('/', legalHoldPolicyAssignmentsHandler)
  .route('/', metadataCascadePoliciesHandler)
  .route('/', searchHandler)
  .route('/', metadataTemplatesHandler)
  .route('/', classificationsHandler)
  .route('/', recentItemsHandler)
  .route('/', retentionPoliciesHandler)
  .route('/', retentionPolicyAssignmentsHandler)
  .route('/', sharedLinksWebLinksHandler)
  .route('/', shieldInformationBarrierReportsHandler)
  .route('/', shieldInformationBarrierSegmentMembersHandler)
  .route('/', shieldInformationBarrierSegmentRestrictionsHandler)
  .route('/', shieldInformationBarrierSegmentsHandler)
  .route('/', shieldInformationBarriersHandler)
  .route('/', boxSignHandler)
  .route('/', storagePoliciesHandler)
  .route('/', storagePolicyAssignmentsHandler)
  .route('/', taskAssignmentsHandler)
  .route('/', termsOfServiceUserStatusesHandler)
  .route('/', termsOfServiceHandler)
  .route('/', usersHandler)
  .route('/', userAvatarsHandler)
  .route('/', emailAliasesHandler)
  .route('/', transferFoldersHandler)
  .route('/', webLinksHandler)
  .route('/', trashedWebLinksHandler)
  .route('/', webhooksHandler)
  .route('/', workflowsHandler)
  .route('/', zipDownloadsHandler)

export default app
