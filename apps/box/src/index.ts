import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiHandler,
  aiStudioHandler,
  appItemAssociationsHandler,
  authorizationHandler,
  boxSignRequestsHandler,
  boxSignTemplatesHandler,
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
  integrationMappingsHandler,
  invitesHandler,
  legalHoldPoliciesHandler,
  legalHoldPolicyAssignmentsHandler,
  metadataCascadePoliciesHandler,
  metadataInstancesFilesHandler,
  metadataInstancesFoldersHandler,
  metadataTaxonomiesHandler,
  metadataTemplatesHandler,
  recentItemsHandler,
  retentionPoliciesHandler,
  retentionPolicyAssignmentsHandler,
  searchHandler,
  sessionTerminationHandler,
  sharedLinksAppItemsHandler,
  sharedLinksFilesHandler,
  sharedLinksFoldersHandler,
  sharedLinksWebLinksHandler,
  shieldInformationBarrierReportsHandler,
  shieldInformationBarrierSegmentMembersHandler,
  shieldInformationBarrierSegmentRestrictionsHandler,
  shieldInformationBarrierSegmentsHandler,
  shieldInformationBarriersHandler,
  skillsHandler,
  standardAndZonesStoragePoliciesHandler,
  standardAndZonesStoragePolicyAssignmentsHandler,
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
  .route('/', filesHandler)
  .route('/', trashedFilesHandler)
  .route('/', appItemAssociationsHandler)
  .route('/', downloadsHandler)
  .route('/', uploadsHandler)
  .route('/', uploadsChunkedHandler)
  .route('/', collaborationsListHandler)
  .route('/', commentsHandler)
  .route('/', tasksHandler)
  .route('/', fileVersionsHandler)
  .route('/', metadataInstancesFilesHandler)
  .route('/', classificationsOnFilesHandler)
  .route('/', skillsHandler)
  .route('/', watermarksFilesHandler)
  .route('/', fileRequestsHandler)
  .route('/', foldersHandler)
  .route('/', trashedFoldersHandler)
  .route('/', metadataInstancesFoldersHandler)
  .route('/', classificationsOnFoldersHandler)
  .route('/', trashedItemsHandler)
  .route('/', watermarksFoldersHandler)
  .route('/', folderLocksHandler)
  .route('/', metadataTemplatesHandler)
  .route('/', classificationsHandler)
  .route('/', metadataCascadePoliciesHandler)
  .route('/', searchHandler)
  .route('/', collaborationsHandler)
  .route('/', taskAssignmentsHandler)
  .route('/', sharedLinksFilesHandler)
  .route('/', sharedLinksFoldersHandler)
  .route('/', webLinksHandler)
  .route('/', trashedWebLinksHandler)
  .route('/', sharedLinksWebLinksHandler)
  .route('/', sharedLinksAppItemsHandler)
  .route('/', usersHandler)
  .route('/', sessionTerminationHandler)
  .route('/', userAvatarsHandler)
  .route('/', transferFoldersHandler)
  .route('/', emailAliasesHandler)
  .route('/', groupMembershipsHandler)
  .route('/', invitesHandler)
  .route('/', groupsHandler)
  .route('/', webhooksHandler)
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
  .route('/', termsOfServiceHandler)
  .route('/', termsOfServiceUserStatusesHandler)
  .route('/', domainRestrictionsForCollaborationsHandler)
  .route('/', domainRestrictionsUserExemptionsHandler)
  .route('/', standardAndZonesStoragePoliciesHandler)
  .route('/', standardAndZonesStoragePolicyAssignmentsHandler)
  .route('/', zipDownloadsHandler)
  .route('/', boxSignRequestsHandler)
  .route('/', workflowsHandler)
  .route('/', boxSignTemplatesHandler)
  .route('/', integrationMappingsHandler)
  .route('/', aiHandler)
  .route('/', aiStudioHandler)
  .route('/', metadataTaxonomiesHandler)

export default app
