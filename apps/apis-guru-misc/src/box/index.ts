import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollaborationsCollaborationIdRoute,
  deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
  deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
  deleteCommentsCommentIdRoute,
  deleteDevicePinnersDevicePinnerIdRoute,
  deleteFileRequestsFileRequestIdRoute,
  deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  deleteFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  deleteFilesFileIdMetadataScopeTemplateKeyRoute,
  deleteFilesFileIdRoute,
  deleteFilesFileIdTrashRoute,
  deleteFilesFileIdVersionsFileVersionIdRoute,
  deleteFilesFileIdWatermarkRoute,
  deleteFilesUploadSessionsUploadSessionIdRoute,
  deleteFolderLocksFolderLockIdRoute,
  deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  deleteFoldersFolderIdMetadataScopeTemplateKeyRoute,
  deleteFoldersFolderIdRoute,
  deleteFoldersFolderIdTrashRoute,
  deleteFoldersFolderIdWatermarkRoute,
  deleteGroupMembershipsGroupMembershipIdRoute,
  deleteGroupsGroupIdRoute,
  deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
  deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
  deleteRetentionPoliciesRetentionPolicyIdRoute,
  deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
  deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
  deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
  deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
  deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
  deleteTaskAssignmentsTaskAssignmentIdRoute,
  deleteTasksTaskIdRoute,
  deleteUsersUserIdAvatarRoute,
  deleteUsersUserIdEmailAliasesEmailAliasIdRoute,
  deleteUsersUserIdRoute,
  deleteWebhooksWebhookIdRoute,
  deleteWebLinksWebLinkIdRoute,
  deleteWebLinksWebLinkIdTrashRoute,
  getAuthorizeRoute,
  getCollaborationsCollaborationIdRoute,
  getCollaborationsRoute,
  getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
  getCollaborationWhitelistEntriesRoute,
  getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
  getCollaborationWhitelistExemptTargetsRoute,
  getCollectionsCollectionIdItemsRoute,
  getCollectionsRoute,
  getCommentsCommentIdRoute,
  getDevicePinnersDevicePinnerIdRoute,
  getEnterprisesEnterpriseIdDevicePinnersRoute,
  getEventsRoute,
  getFileRequestsFileRequestIdRoute,
  getFilesFileIdCollaborationsRoute,
  getFilesFileIdCommentsRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdGetSharedLinkRoute,
  getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  getFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  getFilesFileIdMetadataRoute,
  getFilesFileIdMetadataScopeTemplateKeyRoute,
  getFilesFileIdRoute,
  getFilesFileIdTasksRoute,
  getFilesFileIdThumbnailExtensionRoute,
  getFilesFileIdTrashRoute,
  getFilesFileIdVersionsFileVersionIdRoute,
  getFilesFileIdVersionsRoute,
  getFilesFileIdWatermarkRoute,
  getFilesUploadSessionsUploadSessionIdPartsRoute,
  getFilesUploadSessionsUploadSessionIdRoute,
  getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
  getFileVersionLegalHoldsRoute,
  getFileVersionRetentionsFileVersionRetentionIdRoute,
  getFileVersionRetentionsRoute,
  getFolderLocksRoute,
  getFoldersFolderIdCollaborationsRoute,
  getFoldersFolderIdGetSharedLinkRoute,
  getFoldersFolderIdItemsRoute,
  getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  getFoldersFolderIdMetadataRoute,
  getFoldersFolderIdMetadataScopeTemplateKeyRoute,
  getFoldersFolderIdRoute,
  getFoldersFolderIdTrashRoute,
  getFoldersFolderIdWatermarkRoute,
  getFoldersTrashItemsRoute,
  getGroupMembershipsGroupMembershipIdRoute,
  getGroupsGroupIdCollaborationsRoute,
  getGroupsGroupIdMembershipsRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  getInvitesInviteIdRoute,
  getLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  getLegalHoldPolicyAssignmentsRoute,
  getMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  getMetadataCascadePoliciesRoute,
  getMetadataQueryIndicesRoute,
  getMetadataTemplatesEnterpriseRoute,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  getMetadataTemplatesGlobalRoute,
  getMetadataTemplatesRoute,
  getMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesTemplateIdRoute,
  getRecentItemsRoute,
  getRetentionPoliciesRetentionPolicyIdAssignmentsRoute,
  getRetentionPoliciesRetentionPolicyIdRoute,
  getRetentionPoliciesRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
  getSearchRoute,
  getSharedItemsFoldersRoute,
  getSharedItemsRoute,
  getSharedItemsWebLinksRoute,
  getShieldInformationBarrierReportsRoute,
  getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute,
  getShieldInformationBarrierSegmentMembersRoute,
  getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
  getShieldInformationBarrierSegmentRestrictionsRoute,
  getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
  getShieldInformationBarrierSegmentsRoute,
  getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
  getShieldInformationBarriersRoute,
  getShieldInformationBarriersShieldInformationBarrierIdRoute,
  getSignRequestsRoute,
  getSignRequestsSignRequestIdRoute,
  getStoragePoliciesRoute,
  getStoragePoliciesStoragePolicyIdRoute,
  getStoragePolicyAssignmentsRoute,
  getStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
  getTaskAssignmentsTaskAssignmentIdRoute,
  getTasksTaskIdAssignmentsRoute,
  getTasksTaskIdRoute,
  getTermsOfServicesRoute,
  getTermsOfServicesTermsOfServiceIdRoute,
  getTermsOfServiceUserStatusesRoute,
  getUsersMeRoute,
  getUsersRoute,
  getUsersUserIdAvatarRoute,
  getUsersUserIdEmailAliasesRoute,
  getUsersUserIdMembershipsRoute,
  getUsersUserIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  getWebLinksWebLinkIdGetSharedLinkRoute,
  getWebLinksWebLinkIdRoute,
  getWebLinksWebLinkIdTrashRoute,
  getWorkflowsRoute,
  getZipDownloadsZipDownloadIdContentRoute,
  getZipDownloadsZipDownloadIdStatusRoute,
  optionsEventsRoute,
  optionsFilesContentRoute,
  postCollaborationsRoute,
  postCollaborationWhitelistEntriesRoute,
  postCollaborationWhitelistExemptTargetsRoute,
  postCommentsRoute,
  postFileRequestsFileRequestIdCopyRoute,
  postFilesContentRoute,
  postFilesFileIdContentRoute,
  postFilesFileIdCopyRoute,
  postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  postFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  postFilesFileIdMetadataScopeTemplateKeyRoute,
  postFilesFileIdRoute,
  postFilesFileIdUploadSessionsRoute,
  postFilesFileIdVersionsCurrentRoute,
  postFilesUploadSessionsRoute,
  postFilesUploadSessionsUploadSessionIdCommitRoute,
  postFolderLocksRoute,
  postFoldersFolderIdCopyRoute,
  postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  postFoldersFolderIdMetadataScopeTemplateKeyRoute,
  postFoldersFolderIdRoute,
  postFoldersRoute,
  postGroupMembershipsRoute,
  postGroupsRoute,
  postGroupsTerminateSessionsRoute,
  postInvitesRoute,
  postLegalHoldPoliciesRoute,
  postLegalHoldPolicyAssignmentsRoute,
  postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute,
  postMetadataCascadePoliciesRoute,
  postMetadataQueriesExecuteReadRoute,
  postMetadataTemplatesSchemaClassificationsRoute,
  postMetadataTemplatesSchemaRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRefreshRoute,
  postOauth2TokenRoute,
  postRetentionPoliciesRoute,
  postRetentionPolicyAssignmentsRoute,
  postShieldInformationBarrierReportsRoute,
  postShieldInformationBarriersChangeStatusRoute,
  postShieldInformationBarrierSegmentMembersRoute,
  postShieldInformationBarrierSegmentRestrictionsRoute,
  postShieldInformationBarrierSegmentsRoute,
  postShieldInformationBarriersRoute,
  postSignRequestsRoute,
  postSignRequestsSignRequestIdCancelRoute,
  postSignRequestsSignRequestIdResendRoute,
  postStoragePolicyAssignmentsRoute,
  postTaskAssignmentsRoute,
  postTasksRoute,
  postTermsOfServicesRoute,
  postTermsOfServiceUserStatusesRoute,
  postUsersRoute,
  postUsersTerminateSessionsRoute,
  postUsersUserIdAvatarRoute,
  postUsersUserIdEmailAliasesRoute,
  postWebhooksRoute,
  postWebLinksRoute,
  postWebLinksWebLinkIdRoute,
  postWorkflowsWorkflowIdStartRoute,
  postZipDownloadsRoute,
  putCollaborationsCollaborationIdRoute,
  putCommentsCommentIdRoute,
  putFileRequestsFileRequestIdRoute,
  putFilesFileIdAddSharedLinkRoute,
  putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  putFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  putFilesFileIdMetadataScopeTemplateKeyRoute,
  putFilesFileIdRemoveSharedLinkRoute,
  putFilesFileIdRoute,
  putFilesFileIdUpdateSharedLinkRoute,
  putFilesFileIdVersionsFileVersionIdRoute,
  putFilesFileIdWatermarkRoute,
  putFilesUploadSessionsUploadSessionIdRoute,
  putFoldersFolderIdAddSharedLinkRoute,
  putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  putFoldersFolderIdMetadataScopeTemplateKeyRoute,
  putFoldersFolderIdRemoveSharedLinkRoute,
  putFoldersFolderIdRoute,
  putFoldersFolderIdUpdateSharedLinkRoute,
  putFoldersFolderIdWatermarkRoute,
  putGroupMembershipsGroupMembershipIdRoute,
  putGroupsGroupIdRoute,
  putLegalHoldPoliciesLegalHoldPolicyIdRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
  putMetadataTemplatesScopeTemplateKeySchemaRoute,
  putRetentionPoliciesRetentionPolicyIdRoute,
  putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
  putSkillInvocationsSkillIdRoute,
  putStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
  putTaskAssignmentsTaskAssignmentIdRoute,
  putTasksTaskIdRoute,
  putTermsOfServicesTermsOfServiceIdRoute,
  putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute,
  putUsersUserIdFolders0Route,
  putUsersUserIdRoute,
  putWebhooksWebhookIdRoute,
  putWebLinksWebLinkIdAddSharedLinkRoute,
  putWebLinksWebLinkIdRemoveSharedLinkRoute,
  putWebLinksWebLinkIdRoute,
  putWebLinksWebLinkIdUpdateSharedLinkRoute,
} from './routes'
import {
  deleteCollaborationsCollaborationIdRouteHandler,
  deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  deleteCommentsCommentIdRouteHandler,
  deleteDevicePinnersDevicePinnerIdRouteHandler,
  deleteFileRequestsFileRequestIdRouteHandler,
  deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  deleteFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  deleteFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  deleteFilesFileIdRouteHandler,
  deleteFilesFileIdTrashRouteHandler,
  deleteFilesFileIdVersionsFileVersionIdRouteHandler,
  deleteFilesFileIdWatermarkRouteHandler,
  deleteFilesUploadSessionsUploadSessionIdRouteHandler,
  deleteFolderLocksFolderLockIdRouteHandler,
  deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  deleteFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  deleteFoldersFolderIdRouteHandler,
  deleteFoldersFolderIdTrashRouteHandler,
  deleteFoldersFolderIdWatermarkRouteHandler,
  deleteGroupMembershipsGroupMembershipIdRouteHandler,
  deleteGroupsGroupIdRouteHandler,
  deleteLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  deleteMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  deleteMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  deleteRetentionPoliciesRetentionPolicyIdRouteHandler,
  deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
  deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  deleteTaskAssignmentsTaskAssignmentIdRouteHandler,
  deleteTasksTaskIdRouteHandler,
  deleteUsersUserIdAvatarRouteHandler,
  deleteUsersUserIdEmailAliasesEmailAliasIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  deleteWebLinksWebLinkIdRouteHandler,
  deleteWebLinksWebLinkIdTrashRouteHandler,
  getAuthorizeRouteHandler,
  getCollaborationsCollaborationIdRouteHandler,
  getCollaborationsRouteHandler,
  getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  getCollaborationWhitelistEntriesRouteHandler,
  getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  getCollaborationWhitelistExemptTargetsRouteHandler,
  getCollectionsCollectionIdItemsRouteHandler,
  getCollectionsRouteHandler,
  getCommentsCommentIdRouteHandler,
  getDevicePinnersDevicePinnerIdRouteHandler,
  getEnterprisesEnterpriseIdDevicePinnersRouteHandler,
  getEventsRouteHandler,
  getFileRequestsFileRequestIdRouteHandler,
  getFilesFileIdCollaborationsRouteHandler,
  getFilesFileIdCommentsRouteHandler,
  getFilesFileIdContentRouteHandler,
  getFilesFileIdGetSharedLinkRouteHandler,
  getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  getFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  getFilesFileIdMetadataRouteHandler,
  getFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesFileIdTasksRouteHandler,
  getFilesFileIdThumbnailExtensionRouteHandler,
  getFilesFileIdTrashRouteHandler,
  getFilesFileIdVersionsFileVersionIdRouteHandler,
  getFilesFileIdVersionsRouteHandler,
  getFilesFileIdWatermarkRouteHandler,
  getFilesUploadSessionsUploadSessionIdPartsRouteHandler,
  getFilesUploadSessionsUploadSessionIdRouteHandler,
  getFileVersionLegalHoldsFileVersionLegalHoldIdRouteHandler,
  getFileVersionLegalHoldsRouteHandler,
  getFileVersionRetentionsFileVersionRetentionIdRouteHandler,
  getFileVersionRetentionsRouteHandler,
  getFolderLocksRouteHandler,
  getFoldersFolderIdCollaborationsRouteHandler,
  getFoldersFolderIdGetSharedLinkRouteHandler,
  getFoldersFolderIdItemsRouteHandler,
  getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  getFoldersFolderIdMetadataRouteHandler,
  getFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  getFoldersFolderIdRouteHandler,
  getFoldersFolderIdTrashRouteHandler,
  getFoldersFolderIdWatermarkRouteHandler,
  getFoldersTrashItemsRouteHandler,
  getGroupMembershipsGroupMembershipIdRouteHandler,
  getGroupsGroupIdCollaborationsRouteHandler,
  getGroupsGroupIdMembershipsRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsRouteHandler,
  getInvitesInviteIdRouteHandler,
  getLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  getLegalHoldPoliciesRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  getLegalHoldPolicyAssignmentsRouteHandler,
  getMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  getMetadataCascadePoliciesRouteHandler,
  getMetadataQueryIndicesRouteHandler,
  getMetadataTemplatesEnterpriseRouteHandler,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  getMetadataTemplatesGlobalRouteHandler,
  getMetadataTemplatesRouteHandler,
  getMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  getMetadataTemplatesTemplateIdRouteHandler,
  getRecentItemsRouteHandler,
  getRetentionPoliciesRetentionPolicyIdAssignmentsRouteHandler,
  getRetentionPoliciesRetentionPolicyIdRouteHandler,
  getRetentionPoliciesRouteHandler,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRouteHandler,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRouteHandler,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  getSearchRouteHandler,
  getSharedItemsFoldersRouteHandler,
  getSharedItemsRouteHandler,
  getSharedItemsWebLinksRouteHandler,
  getShieldInformationBarrierReportsRouteHandler,
  getShieldInformationBarrierReportsShieldInformationBarrierReportIdRouteHandler,
  getShieldInformationBarrierSegmentMembersRouteHandler,
  getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
  getShieldInformationBarrierSegmentRestrictionsRouteHandler,
  getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  getShieldInformationBarrierSegmentsRouteHandler,
  getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  getShieldInformationBarriersRouteHandler,
  getShieldInformationBarriersShieldInformationBarrierIdRouteHandler,
  getSignRequestsRouteHandler,
  getSignRequestsSignRequestIdRouteHandler,
  getStoragePoliciesRouteHandler,
  getStoragePoliciesStoragePolicyIdRouteHandler,
  getStoragePolicyAssignmentsRouteHandler,
  getStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  getTaskAssignmentsTaskAssignmentIdRouteHandler,
  getTasksTaskIdAssignmentsRouteHandler,
  getTasksTaskIdRouteHandler,
  getTermsOfServicesRouteHandler,
  getTermsOfServicesTermsOfServiceIdRouteHandler,
  getTermsOfServiceUserStatusesRouteHandler,
  getUsersMeRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdAvatarRouteHandler,
  getUsersUserIdEmailAliasesRouteHandler,
  getUsersUserIdMembershipsRouteHandler,
  getUsersUserIdRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  getWebLinksWebLinkIdGetSharedLinkRouteHandler,
  getWebLinksWebLinkIdRouteHandler,
  getWebLinksWebLinkIdTrashRouteHandler,
  getWorkflowsRouteHandler,
  getZipDownloadsZipDownloadIdContentRouteHandler,
  getZipDownloadsZipDownloadIdStatusRouteHandler,
  optionsEventsRouteHandler,
  optionsFilesContentRouteHandler,
  postCollaborationsRouteHandler,
  postCollaborationWhitelistEntriesRouteHandler,
  postCollaborationWhitelistExemptTargetsRouteHandler,
  postCommentsRouteHandler,
  postFileRequestsFileRequestIdCopyRouteHandler,
  postFilesContentRouteHandler,
  postFilesFileIdContentRouteHandler,
  postFilesFileIdCopyRouteHandler,
  postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  postFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  postFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  postFilesFileIdRouteHandler,
  postFilesFileIdUploadSessionsRouteHandler,
  postFilesFileIdVersionsCurrentRouteHandler,
  postFilesUploadSessionsRouteHandler,
  postFilesUploadSessionsUploadSessionIdCommitRouteHandler,
  postFolderLocksRouteHandler,
  postFoldersFolderIdCopyRouteHandler,
  postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  postFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  postFoldersFolderIdRouteHandler,
  postFoldersRouteHandler,
  postGroupMembershipsRouteHandler,
  postGroupsRouteHandler,
  postGroupsTerminateSessionsRouteHandler,
  postInvitesRouteHandler,
  postLegalHoldPoliciesRouteHandler,
  postLegalHoldPolicyAssignmentsRouteHandler,
  postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRouteHandler,
  postMetadataCascadePoliciesRouteHandler,
  postMetadataQueriesExecuteReadRouteHandler,
  postMetadataTemplatesSchemaClassificationsRouteHandler,
  postMetadataTemplatesSchemaRouteHandler,
  postOauth2RevokeRouteHandler,
  postOauth2TokenRefreshRouteHandler,
  postOauth2TokenRouteHandler,
  postRetentionPoliciesRouteHandler,
  postRetentionPolicyAssignmentsRouteHandler,
  postShieldInformationBarrierReportsRouteHandler,
  postShieldInformationBarriersChangeStatusRouteHandler,
  postShieldInformationBarrierSegmentMembersRouteHandler,
  postShieldInformationBarrierSegmentRestrictionsRouteHandler,
  postShieldInformationBarrierSegmentsRouteHandler,
  postShieldInformationBarriersRouteHandler,
  postSignRequestsRouteHandler,
  postSignRequestsSignRequestIdCancelRouteHandler,
  postSignRequestsSignRequestIdResendRouteHandler,
  postStoragePolicyAssignmentsRouteHandler,
  postTaskAssignmentsRouteHandler,
  postTasksRouteHandler,
  postTermsOfServicesRouteHandler,
  postTermsOfServiceUserStatusesRouteHandler,
  postUsersRouteHandler,
  postUsersTerminateSessionsRouteHandler,
  postUsersUserIdAvatarRouteHandler,
  postUsersUserIdEmailAliasesRouteHandler,
  postWebhooksRouteHandler,
  postWebLinksRouteHandler,
  postWebLinksWebLinkIdRouteHandler,
  postWorkflowsWorkflowIdStartRouteHandler,
  postZipDownloadsRouteHandler,
  putCollaborationsCollaborationIdRouteHandler,
  putCommentsCommentIdRouteHandler,
  putFileRequestsFileRequestIdRouteHandler,
  putFilesFileIdAddSharedLinkRouteHandler,
  putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  putFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  putFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  putFilesFileIdRemoveSharedLinkRouteHandler,
  putFilesFileIdRouteHandler,
  putFilesFileIdUpdateSharedLinkRouteHandler,
  putFilesFileIdVersionsFileVersionIdRouteHandler,
  putFilesFileIdWatermarkRouteHandler,
  putFilesUploadSessionsUploadSessionIdRouteHandler,
  putFoldersFolderIdAddSharedLinkRouteHandler,
  putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  putFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  putFoldersFolderIdRemoveSharedLinkRouteHandler,
  putFoldersFolderIdRouteHandler,
  putFoldersFolderIdUpdateSharedLinkRouteHandler,
  putFoldersFolderIdWatermarkRouteHandler,
  putGroupMembershipsGroupMembershipIdRouteHandler,
  putGroupsGroupIdRouteHandler,
  putLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRouteHandler,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRouteHandler,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRouteHandler,
  putMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  putRetentionPoliciesRetentionPolicyIdRouteHandler,
  putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  putSkillInvocationsSkillIdRouteHandler,
  putStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  putTaskAssignmentsTaskAssignmentIdRouteHandler,
  putTasksTaskIdRouteHandler,
  putTermsOfServicesTermsOfServiceIdRouteHandler,
  putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRouteHandler,
  putUsersUserIdFolders0RouteHandler,
  putUsersUserIdRouteHandler,
  putWebhooksWebhookIdRouteHandler,
  putWebLinksWebLinkIdAddSharedLinkRouteHandler,
  putWebLinksWebLinkIdRemoveSharedLinkRouteHandler,
  putWebLinksWebLinkIdRouteHandler,
  putWebLinksWebLinkIdUpdateSharedLinkRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthorizeRoute, getAuthorizeRouteHandler)
  .openapi(getCollaborationWhitelistEntriesRoute, getCollaborationWhitelistEntriesRouteHandler)
  .openapi(postCollaborationWhitelistEntriesRoute, postCollaborationWhitelistEntriesRouteHandler)
  .openapi(
    deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
    deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  )
  .openapi(
    getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
    getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  )
  .openapi(
    getCollaborationWhitelistExemptTargetsRoute,
    getCollaborationWhitelistExemptTargetsRouteHandler,
  )
  .openapi(
    postCollaborationWhitelistExemptTargetsRoute,
    postCollaborationWhitelistExemptTargetsRouteHandler,
  )
  .openapi(
    deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
    deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  )
  .openapi(
    getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
    getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  )
  .openapi(getCollaborationsRoute, getCollaborationsRouteHandler)
  .openapi(postCollaborationsRoute, postCollaborationsRouteHandler)
  .openapi(
    deleteCollaborationsCollaborationIdRoute,
    deleteCollaborationsCollaborationIdRouteHandler,
  )
  .openapi(getCollaborationsCollaborationIdRoute, getCollaborationsCollaborationIdRouteHandler)
  .openapi(putCollaborationsCollaborationIdRoute, putCollaborationsCollaborationIdRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(getCollectionsCollectionIdItemsRoute, getCollectionsCollectionIdItemsRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(deleteCommentsCommentIdRoute, deleteCommentsCommentIdRouteHandler)
  .openapi(getCommentsCommentIdRoute, getCommentsCommentIdRouteHandler)
  .openapi(putCommentsCommentIdRoute, putCommentsCommentIdRouteHandler)
  .openapi(deleteDevicePinnersDevicePinnerIdRoute, deleteDevicePinnersDevicePinnerIdRouteHandler)
  .openapi(getDevicePinnersDevicePinnerIdRoute, getDevicePinnersDevicePinnerIdRouteHandler)
  .openapi(
    getEnterprisesEnterpriseIdDevicePinnersRoute,
    getEnterprisesEnterpriseIdDevicePinnersRouteHandler,
  )
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(optionsEventsRoute, optionsEventsRouteHandler)
  .openapi(deleteFileRequestsFileRequestIdRoute, deleteFileRequestsFileRequestIdRouteHandler)
  .openapi(getFileRequestsFileRequestIdRoute, getFileRequestsFileRequestIdRouteHandler)
  .openapi(putFileRequestsFileRequestIdRoute, putFileRequestsFileRequestIdRouteHandler)
  .openapi(postFileRequestsFileRequestIdCopyRoute, postFileRequestsFileRequestIdCopyRouteHandler)
  .openapi(getFileVersionLegalHoldsRoute, getFileVersionLegalHoldsRouteHandler)
  .openapi(
    getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
    getFileVersionLegalHoldsFileVersionLegalHoldIdRouteHandler,
  )
  .openapi(getFileVersionRetentionsRoute, getFileVersionRetentionsRouteHandler)
  .openapi(
    getFileVersionRetentionsFileVersionRetentionIdRoute,
    getFileVersionRetentionsFileVersionRetentionIdRouteHandler,
  )
  .openapi(optionsFilesContentRoute, optionsFilesContentRouteHandler)
  .openapi(postFilesContentRoute, postFilesContentRouteHandler)
  .openapi(postFilesUploadSessionsRoute, postFilesUploadSessionsRouteHandler)
  .openapi(
    deleteFilesUploadSessionsUploadSessionIdRoute,
    deleteFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    getFilesUploadSessionsUploadSessionIdRoute,
    getFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    putFilesUploadSessionsUploadSessionIdRoute,
    putFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    postFilesUploadSessionsUploadSessionIdCommitRoute,
    postFilesUploadSessionsUploadSessionIdCommitRouteHandler,
  )
  .openapi(
    getFilesUploadSessionsUploadSessionIdPartsRoute,
    getFilesUploadSessionsUploadSessionIdPartsRouteHandler,
  )
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(postFilesFileIdRoute, postFilesFileIdRouteHandler)
  .openapi(putFilesFileIdRoute, putFilesFileIdRouteHandler)
  .openapi(putFilesFileIdAddSharedLinkRoute, putFilesFileIdAddSharedLinkRouteHandler)
  .openapi(getFilesFileIdGetSharedLinkRoute, getFilesFileIdGetSharedLinkRouteHandler)
  .openapi(putFilesFileIdRemoveSharedLinkRoute, putFilesFileIdRemoveSharedLinkRouteHandler)
  .openapi(putFilesFileIdUpdateSharedLinkRoute, putFilesFileIdUpdateSharedLinkRouteHandler)
  .openapi(getFilesFileIdCollaborationsRoute, getFilesFileIdCollaborationsRouteHandler)
  .openapi(getFilesFileIdCommentsRoute, getFilesFileIdCommentsRouteHandler)
  .openapi(getFilesFileIdContentRoute, getFilesFileIdContentRouteHandler)
  .openapi(postFilesFileIdContentRoute, postFilesFileIdContentRouteHandler)
  .openapi(postFilesFileIdCopyRoute, postFilesFileIdCopyRouteHandler)
  .openapi(getFilesFileIdMetadataRoute, getFilesFileIdMetadataRouteHandler)
  .openapi(
    deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    deleteFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
    deleteFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  )
  .openapi(
    getFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
    getFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  )
  .openapi(
    postFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
    postFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  )
  .openapi(
    putFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
    putFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  )
  .openapi(
    deleteFilesFileIdMetadataScopeTemplateKeyRoute,
    deleteFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    getFilesFileIdMetadataScopeTemplateKeyRoute,
    getFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    postFilesFileIdMetadataScopeTemplateKeyRoute,
    postFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    putFilesFileIdMetadataScopeTemplateKeyRoute,
    putFilesFileIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(getFilesFileIdTasksRoute, getFilesFileIdTasksRouteHandler)
  .openapi(getFilesFileIdThumbnailExtensionRoute, getFilesFileIdThumbnailExtensionRouteHandler)
  .openapi(deleteFilesFileIdTrashRoute, deleteFilesFileIdTrashRouteHandler)
  .openapi(getFilesFileIdTrashRoute, getFilesFileIdTrashRouteHandler)
  .openapi(postFilesFileIdUploadSessionsRoute, postFilesFileIdUploadSessionsRouteHandler)
  .openapi(getFilesFileIdVersionsRoute, getFilesFileIdVersionsRouteHandler)
  .openapi(postFilesFileIdVersionsCurrentRoute, postFilesFileIdVersionsCurrentRouteHandler)
  .openapi(
    deleteFilesFileIdVersionsFileVersionIdRoute,
    deleteFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(
    getFilesFileIdVersionsFileVersionIdRoute,
    getFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(
    putFilesFileIdVersionsFileVersionIdRoute,
    putFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(deleteFilesFileIdWatermarkRoute, deleteFilesFileIdWatermarkRouteHandler)
  .openapi(getFilesFileIdWatermarkRoute, getFilesFileIdWatermarkRouteHandler)
  .openapi(putFilesFileIdWatermarkRoute, putFilesFileIdWatermarkRouteHandler)
  .openapi(getFolderLocksRoute, getFolderLocksRouteHandler)
  .openapi(postFolderLocksRoute, postFolderLocksRouteHandler)
  .openapi(deleteFolderLocksFolderLockIdRoute, deleteFolderLocksFolderLockIdRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(getFoldersTrashItemsRoute, getFoldersTrashItemsRouteHandler)
  .openapi(deleteFoldersFolderIdRoute, deleteFoldersFolderIdRouteHandler)
  .openapi(getFoldersFolderIdRoute, getFoldersFolderIdRouteHandler)
  .openapi(postFoldersFolderIdRoute, postFoldersFolderIdRouteHandler)
  .openapi(putFoldersFolderIdRoute, putFoldersFolderIdRouteHandler)
  .openapi(putFoldersFolderIdAddSharedLinkRoute, putFoldersFolderIdAddSharedLinkRouteHandler)
  .openapi(getFoldersFolderIdGetSharedLinkRoute, getFoldersFolderIdGetSharedLinkRouteHandler)
  .openapi(putFoldersFolderIdRemoveSharedLinkRoute, putFoldersFolderIdRemoveSharedLinkRouteHandler)
  .openapi(putFoldersFolderIdUpdateSharedLinkRoute, putFoldersFolderIdUpdateSharedLinkRouteHandler)
  .openapi(getFoldersFolderIdCollaborationsRoute, getFoldersFolderIdCollaborationsRouteHandler)
  .openapi(postFoldersFolderIdCopyRoute, postFoldersFolderIdCopyRouteHandler)
  .openapi(getFoldersFolderIdItemsRoute, getFoldersFolderIdItemsRouteHandler)
  .openapi(getFoldersFolderIdMetadataRoute, getFoldersFolderIdMetadataRouteHandler)
  .openapi(
    deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  )
  .openapi(
    deleteFoldersFolderIdMetadataScopeTemplateKeyRoute,
    deleteFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    getFoldersFolderIdMetadataScopeTemplateKeyRoute,
    getFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    postFoldersFolderIdMetadataScopeTemplateKeyRoute,
    postFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(
    putFoldersFolderIdMetadataScopeTemplateKeyRoute,
    putFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(deleteFoldersFolderIdTrashRoute, deleteFoldersFolderIdTrashRouteHandler)
  .openapi(getFoldersFolderIdTrashRoute, getFoldersFolderIdTrashRouteHandler)
  .openapi(deleteFoldersFolderIdWatermarkRoute, deleteFoldersFolderIdWatermarkRouteHandler)
  .openapi(getFoldersFolderIdWatermarkRoute, getFoldersFolderIdWatermarkRouteHandler)
  .openapi(putFoldersFolderIdWatermarkRoute, putFoldersFolderIdWatermarkRouteHandler)
  .openapi(postGroupMembershipsRoute, postGroupMembershipsRouteHandler)
  .openapi(
    deleteGroupMembershipsGroupMembershipIdRoute,
    deleteGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(
    getGroupMembershipsGroupMembershipIdRoute,
    getGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(
    putGroupMembershipsGroupMembershipIdRoute,
    putGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postGroupsTerminateSessionsRoute, postGroupsTerminateSessionsRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(putGroupsGroupIdRoute, putGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdCollaborationsRoute, getGroupsGroupIdCollaborationsRouteHandler)
  .openapi(getGroupsGroupIdMembershipsRoute, getGroupsGroupIdMembershipsRouteHandler)
  .openapi(postInvitesRoute, postInvitesRouteHandler)
  .openapi(getInvitesInviteIdRoute, getInvitesInviteIdRouteHandler)
  .openapi(getLegalHoldPoliciesRoute, getLegalHoldPoliciesRouteHandler)
  .openapi(postLegalHoldPoliciesRoute, postLegalHoldPoliciesRouteHandler)
  .openapi(
    deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
    deleteLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(
    getLegalHoldPoliciesLegalHoldPolicyIdRoute,
    getLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(
    putLegalHoldPoliciesLegalHoldPolicyIdRoute,
    putLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(getLegalHoldPolicyAssignmentsRoute, getLegalHoldPolicyAssignmentsRouteHandler)
  .openapi(postLegalHoldPolicyAssignmentsRoute, postLegalHoldPolicyAssignmentsRouteHandler)
  .openapi(
    deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
    deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRouteHandler,
  )
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRouteHandler,
  )
  .openapi(getMetadataCascadePoliciesRoute, getMetadataCascadePoliciesRouteHandler)
  .openapi(postMetadataCascadePoliciesRoute, postMetadataCascadePoliciesRouteHandler)
  .openapi(
    deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
    deleteMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  )
  .openapi(
    getMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
    getMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  )
  .openapi(
    postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute,
    postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRouteHandler,
  )
  .openapi(postMetadataQueriesExecuteReadRoute, postMetadataQueriesExecuteReadRouteHandler)
  .openapi(getMetadataQueryIndicesRoute, getMetadataQueryIndicesRouteHandler)
  .openapi(getMetadataTemplatesRoute, getMetadataTemplatesRouteHandler)
  .openapi(getMetadataTemplatesEnterpriseRoute, getMetadataTemplatesEnterpriseRouteHandler)
  .openapi(
    deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
    deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  )
  .openapi(
    getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
    getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRouteHandler,
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRoute,
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRouteHandler,
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRouteHandler,
  )
  .openapi(getMetadataTemplatesGlobalRoute, getMetadataTemplatesGlobalRouteHandler)
  .openapi(postMetadataTemplatesSchemaRoute, postMetadataTemplatesSchemaRouteHandler)
  .openapi(
    postMetadataTemplatesSchemaClassificationsRoute,
    postMetadataTemplatesSchemaClassificationsRouteHandler,
  )
  .openapi(
    deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
    deleteMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(
    getMetadataTemplatesScopeTemplateKeySchemaRoute,
    getMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(
    putMetadataTemplatesScopeTemplateKeySchemaRoute,
    putMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(getMetadataTemplatesTemplateIdRoute, getMetadataTemplatesTemplateIdRouteHandler)
  .openapi(postOauth2RevokeRoute, postOauth2RevokeRouteHandler)
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(postOauth2TokenRefreshRoute, postOauth2TokenRefreshRouteHandler)
  .openapi(getRecentItemsRoute, getRecentItemsRouteHandler)
  .openapi(getRetentionPoliciesRoute, getRetentionPoliciesRouteHandler)
  .openapi(postRetentionPoliciesRoute, postRetentionPoliciesRouteHandler)
  .openapi(
    deleteRetentionPoliciesRetentionPolicyIdRoute,
    deleteRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    getRetentionPoliciesRetentionPolicyIdRoute,
    getRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    putRetentionPoliciesRetentionPolicyIdRoute,
    putRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    getRetentionPoliciesRetentionPolicyIdAssignmentsRoute,
    getRetentionPoliciesRetentionPolicyIdAssignmentsRouteHandler,
  )
  .openapi(postRetentionPolicyAssignmentsRoute, postRetentionPolicyAssignmentsRouteHandler)
  .openapi(
    deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
    deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRouteHandler,
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRouteHandler,
  )
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSharedItemsRoute, getSharedItemsRouteHandler)
  .openapi(getSharedItemsFoldersRoute, getSharedItemsFoldersRouteHandler)
  .openapi(getSharedItemsWebLinksRoute, getSharedItemsWebLinksRouteHandler)
  .openapi(getShieldInformationBarrierReportsRoute, getShieldInformationBarrierReportsRouteHandler)
  .openapi(
    postShieldInformationBarrierReportsRoute,
    postShieldInformationBarrierReportsRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute,
    getShieldInformationBarrierReportsShieldInformationBarrierReportIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentMembersRoute,
    getShieldInformationBarrierSegmentMembersRouteHandler,
  )
  .openapi(
    postShieldInformationBarrierSegmentMembersRoute,
    postShieldInformationBarrierSegmentMembersRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentRestrictionsRoute,
    getShieldInformationBarrierSegmentRestrictionsRouteHandler,
  )
  .openapi(
    postShieldInformationBarrierSegmentRestrictionsRoute,
    postShieldInformationBarrierSegmentRestrictionsRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentsRoute,
    getShieldInformationBarrierSegmentsRouteHandler,
  )
  .openapi(
    postShieldInformationBarrierSegmentsRoute,
    postShieldInformationBarrierSegmentsRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  )
  .openapi(
    putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  )
  .openapi(getShieldInformationBarriersRoute, getShieldInformationBarriersRouteHandler)
  .openapi(postShieldInformationBarriersRoute, postShieldInformationBarriersRouteHandler)
  .openapi(
    postShieldInformationBarriersChangeStatusRoute,
    postShieldInformationBarriersChangeStatusRouteHandler,
  )
  .openapi(
    getShieldInformationBarriersShieldInformationBarrierIdRoute,
    getShieldInformationBarriersShieldInformationBarrierIdRouteHandler,
  )
  .openapi(getSignRequestsRoute, getSignRequestsRouteHandler)
  .openapi(postSignRequestsRoute, postSignRequestsRouteHandler)
  .openapi(getSignRequestsSignRequestIdRoute, getSignRequestsSignRequestIdRouteHandler)
  .openapi(
    postSignRequestsSignRequestIdCancelRoute,
    postSignRequestsSignRequestIdCancelRouteHandler,
  )
  .openapi(
    postSignRequestsSignRequestIdResendRoute,
    postSignRequestsSignRequestIdResendRouteHandler,
  )
  .openapi(putSkillInvocationsSkillIdRoute, putSkillInvocationsSkillIdRouteHandler)
  .openapi(getStoragePoliciesRoute, getStoragePoliciesRouteHandler)
  .openapi(getStoragePoliciesStoragePolicyIdRoute, getStoragePoliciesStoragePolicyIdRouteHandler)
  .openapi(getStoragePolicyAssignmentsRoute, getStoragePolicyAssignmentsRouteHandler)
  .openapi(postStoragePolicyAssignmentsRoute, postStoragePolicyAssignmentsRouteHandler)
  .openapi(
    deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    getStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(
    putStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    putStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(postTaskAssignmentsRoute, postTaskAssignmentsRouteHandler)
  .openapi(
    deleteTaskAssignmentsTaskAssignmentIdRoute,
    deleteTaskAssignmentsTaskAssignmentIdRouteHandler,
  )
  .openapi(getTaskAssignmentsTaskAssignmentIdRoute, getTaskAssignmentsTaskAssignmentIdRouteHandler)
  .openapi(putTaskAssignmentsTaskAssignmentIdRoute, putTaskAssignmentsTaskAssignmentIdRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(deleteTasksTaskIdRoute, deleteTasksTaskIdRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(putTasksTaskIdRoute, putTasksTaskIdRouteHandler)
  .openapi(getTasksTaskIdAssignmentsRoute, getTasksTaskIdAssignmentsRouteHandler)
  .openapi(getTermsOfServiceUserStatusesRoute, getTermsOfServiceUserStatusesRouteHandler)
  .openapi(postTermsOfServiceUserStatusesRoute, postTermsOfServiceUserStatusesRouteHandler)
  .openapi(
    putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute,
    putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRouteHandler,
  )
  .openapi(getTermsOfServicesRoute, getTermsOfServicesRouteHandler)
  .openapi(postTermsOfServicesRoute, postTermsOfServicesRouteHandler)
  .openapi(getTermsOfServicesTermsOfServiceIdRoute, getTermsOfServicesTermsOfServiceIdRouteHandler)
  .openapi(putTermsOfServicesTermsOfServiceIdRoute, putTermsOfServicesTermsOfServiceIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(postUsersTerminateSessionsRoute, postUsersTerminateSessionsRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdAvatarRoute, deleteUsersUserIdAvatarRouteHandler)
  .openapi(getUsersUserIdAvatarRoute, getUsersUserIdAvatarRouteHandler)
  .openapi(postUsersUserIdAvatarRoute, postUsersUserIdAvatarRouteHandler)
  .openapi(getUsersUserIdEmailAliasesRoute, getUsersUserIdEmailAliasesRouteHandler)
  .openapi(postUsersUserIdEmailAliasesRoute, postUsersUserIdEmailAliasesRouteHandler)
  .openapi(
    deleteUsersUserIdEmailAliasesEmailAliasIdRoute,
    deleteUsersUserIdEmailAliasesEmailAliasIdRouteHandler,
  )
  .openapi(putUsersUserIdFolders0Route, putUsersUserIdFolders0RouteHandler)
  .openapi(getUsersUserIdMembershipsRoute, getUsersUserIdMembershipsRouteHandler)
  .openapi(postWebLinksRoute, postWebLinksRouteHandler)
  .openapi(deleteWebLinksWebLinkIdRoute, deleteWebLinksWebLinkIdRouteHandler)
  .openapi(getWebLinksWebLinkIdRoute, getWebLinksWebLinkIdRouteHandler)
  .openapi(postWebLinksWebLinkIdRoute, postWebLinksWebLinkIdRouteHandler)
  .openapi(putWebLinksWebLinkIdRoute, putWebLinksWebLinkIdRouteHandler)
  .openapi(putWebLinksWebLinkIdAddSharedLinkRoute, putWebLinksWebLinkIdAddSharedLinkRouteHandler)
  .openapi(getWebLinksWebLinkIdGetSharedLinkRoute, getWebLinksWebLinkIdGetSharedLinkRouteHandler)
  .openapi(
    putWebLinksWebLinkIdRemoveSharedLinkRoute,
    putWebLinksWebLinkIdRemoveSharedLinkRouteHandler,
  )
  .openapi(
    putWebLinksWebLinkIdUpdateSharedLinkRoute,
    putWebLinksWebLinkIdUpdateSharedLinkRouteHandler,
  )
  .openapi(deleteWebLinksWebLinkIdTrashRoute, deleteWebLinksWebLinkIdTrashRouteHandler)
  .openapi(getWebLinksWebLinkIdTrashRoute, getWebLinksWebLinkIdTrashRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(putWebhooksWebhookIdRoute, putWebhooksWebhookIdRouteHandler)
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(postWorkflowsWorkflowIdStartRoute, postWorkflowsWorkflowIdStartRouteHandler)
  .openapi(postZipDownloadsRoute, postZipDownloadsRouteHandler)
  .openapi(
    getZipDownloadsZipDownloadIdContentRoute,
    getZipDownloadsZipDownloadIdContentRouteHandler,
  )
  .openapi(getZipDownloadsZipDownloadIdStatusRoute, getZipDownloadsZipDownloadIdStatusRouteHandler)

export default app
