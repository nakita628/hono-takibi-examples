import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiAgentsAgentIdRoute,
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
  deleteIntegrationMappingsSlackIntegrationMappingIdRoute,
  deleteIntegrationMappingsTeamsIntegrationMappingIdRoute,
  deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
  deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
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
  getAiAgentDefaultRoute,
  getAiAgentsAgentIdRoute,
  getAiAgentsRoute,
  getAuthorizeRoute,
  getCollaborationsCollaborationIdRoute,
  getCollaborationsRoute,
  getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
  getCollaborationWhitelistEntriesRoute,
  getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
  getCollaborationWhitelistExemptTargetsRoute,
  getCollectionsCollectionIdItemsRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsRoute,
  getCommentsCommentIdRoute,
  getDevicePinnersDevicePinnerIdRoute,
  getEnterprisesEnterpriseIdDevicePinnersRoute,
  getEventsRoute,
  getFileRequestsFileRequestIdRoute,
  getFilesFileIdAppItemAssociationsRoute,
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
  getFoldersFolderIdAppItemAssociationsRoute,
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
  getIntegrationMappingsSlackRoute,
  getIntegrationMappingsTeamsRoute,
  getInvitesInviteIdRoute,
  getLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  getLegalHoldPolicyAssignmentsRoute,
  getMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  getMetadataCascadePoliciesRoute,
  getMetadataTaxonomiesNamespaceRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
  getMetadataTemplatesEnterpriseRoute,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  getMetadataTemplatesGlobalRoute,
  getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute,
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
  getSharedItemsAppItemsRoute,
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
  getSignTemplatesRoute,
  getSignTemplatesTemplateIdRoute,
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
  patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRoute,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
  postAiAgentsRoute,
  postAiAskRoute,
  postAiExtractRoute,
  postAiExtractStructuredRoute,
  postAiTextGenRoute,
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
  postFilesUploadSessionsUploadSessionIdPlanRoute,
  postFolderLocksRoute,
  postFoldersFolderIdCopyRoute,
  postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  postFoldersFolderIdMetadataScopeTemplateKeyRoute,
  postFoldersFolderIdRoute,
  postFoldersRoute,
  postGroupMembershipsRoute,
  postGroupsRoute,
  postGroupsTerminateSessionsRoute,
  postIntegrationMappingsSlackRoute,
  postIntegrationMappingsTeamsRoute,
  postInvitesRoute,
  postLegalHoldPoliciesRoute,
  postLegalHoldPolicyAssignmentsRoute,
  postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute,
  postMetadataCascadePoliciesRoute,
  postMetadataQueriesExecuteReadRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
  postMetadataTaxonomiesRoute,
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
  putAiAgentsAgentIdRoute,
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
  putIntegrationMappingsSlackIntegrationMappingIdRoute,
  putIntegrationMappingsTeamsIntegrationMappingIdRoute,
  putLegalHoldPoliciesLegalHoldPolicyIdRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
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
  deleteAiAgentsAgentIdRouteHandler,
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
  deleteIntegrationMappingsSlackIntegrationMappingIdRouteHandler,
  deleteIntegrationMappingsTeamsIntegrationMappingIdRouteHandler,
  deleteLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  deleteMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
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
  getAiAgentDefaultRouteHandler,
  getAiAgentsAgentIdRouteHandler,
  getAiAgentsRouteHandler,
  getAuthorizeRouteHandler,
  getCollaborationsCollaborationIdRouteHandler,
  getCollaborationsRouteHandler,
  getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  getCollaborationWhitelistEntriesRouteHandler,
  getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  getCollaborationWhitelistExemptTargetsRouteHandler,
  getCollectionsCollectionIdItemsRouteHandler,
  getCollectionsCollectionIdRouteHandler,
  getCollectionsRouteHandler,
  getCommentsCommentIdRouteHandler,
  getDevicePinnersDevicePinnerIdRouteHandler,
  getEnterprisesEnterpriseIdDevicePinnersRouteHandler,
  getEventsRouteHandler,
  getFileRequestsFileRequestIdRouteHandler,
  getFilesFileIdAppItemAssociationsRouteHandler,
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
  getFoldersFolderIdAppItemAssociationsRouteHandler,
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
  getIntegrationMappingsSlackRouteHandler,
  getIntegrationMappingsTeamsRouteHandler,
  getInvitesInviteIdRouteHandler,
  getLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  getLegalHoldPoliciesRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRouteHandler,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  getLegalHoldPolicyAssignmentsRouteHandler,
  getMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  getMetadataCascadePoliciesRouteHandler,
  getMetadataTaxonomiesNamespaceRouteHandler,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRouteHandler,
  getMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
  getMetadataTemplatesEnterpriseRouteHandler,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  getMetadataTemplatesGlobalRouteHandler,
  getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRouteHandler,
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
  getSharedItemsAppItemsRouteHandler,
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
  getSignTemplatesRouteHandler,
  getSignTemplatesTemplateIdRouteHandler,
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
  patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRouteHandler,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
  postAiAgentsRouteHandler,
  postAiAskRouteHandler,
  postAiExtractRouteHandler,
  postAiExtractStructuredRouteHandler,
  postAiTextGenRouteHandler,
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
  postFilesUploadSessionsUploadSessionIdPlanRouteHandler,
  postFolderLocksRouteHandler,
  postFoldersFolderIdCopyRouteHandler,
  postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
  postFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  postFoldersFolderIdRouteHandler,
  postFoldersRouteHandler,
  postGroupMembershipsRouteHandler,
  postGroupsRouteHandler,
  postGroupsTerminateSessionsRouteHandler,
  postIntegrationMappingsSlackRouteHandler,
  postIntegrationMappingsTeamsRouteHandler,
  postInvitesRouteHandler,
  postLegalHoldPoliciesRouteHandler,
  postLegalHoldPolicyAssignmentsRouteHandler,
  postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRouteHandler,
  postMetadataCascadePoliciesRouteHandler,
  postMetadataQueriesExecuteReadRouteHandler,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRouteHandler,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRouteHandler,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRouteHandler,
  postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRouteHandler,
  postMetadataTaxonomiesRouteHandler,
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
  putAiAgentsAgentIdRouteHandler,
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
  putIntegrationMappingsSlackIntegrationMappingIdRouteHandler,
  putIntegrationMappingsTeamsIntegrationMappingIdRouteHandler,
  putLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRouteHandler,
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
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(postOauth2TokenRefreshRoute, postOauth2TokenRefreshRouteHandler)
  .openapi(postOauth2RevokeRoute, postOauth2RevokeRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(postFilesFileIdRoute, postFilesFileIdRouteHandler)
  .openapi(putFilesFileIdRoute, putFilesFileIdRouteHandler)
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(getFilesFileIdAppItemAssociationsRoute, getFilesFileIdAppItemAssociationsRouteHandler)
  .openapi(getFilesFileIdContentRoute, getFilesFileIdContentRouteHandler)
  .openapi(postFilesFileIdContentRoute, postFilesFileIdContentRouteHandler)
  .openapi(optionsFilesContentRoute, optionsFilesContentRouteHandler)
  .openapi(postFilesContentRoute, postFilesContentRouteHandler)
  .openapi(postFilesUploadSessionsRoute, postFilesUploadSessionsRouteHandler)
  .openapi(postFilesFileIdUploadSessionsRoute, postFilesFileIdUploadSessionsRouteHandler)
  .openapi(
    getFilesUploadSessionsUploadSessionIdRoute,
    getFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    putFilesUploadSessionsUploadSessionIdRoute,
    putFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    deleteFilesUploadSessionsUploadSessionIdRoute,
    deleteFilesUploadSessionsUploadSessionIdRouteHandler,
  )
  .openapi(
    getFilesUploadSessionsUploadSessionIdPartsRoute,
    getFilesUploadSessionsUploadSessionIdPartsRouteHandler,
  )
  .openapi(
    postFilesUploadSessionsUploadSessionIdPlanRoute,
    postFilesUploadSessionsUploadSessionIdPlanRouteHandler,
  )
  .openapi(
    postFilesUploadSessionsUploadSessionIdCommitRoute,
    postFilesUploadSessionsUploadSessionIdCommitRouteHandler,
  )
  .openapi(postFilesFileIdCopyRoute, postFilesFileIdCopyRouteHandler)
  .openapi(getFilesFileIdThumbnailExtensionRoute, getFilesFileIdThumbnailExtensionRouteHandler)
  .openapi(getFilesFileIdCollaborationsRoute, getFilesFileIdCollaborationsRouteHandler)
  .openapi(getFilesFileIdCommentsRoute, getFilesFileIdCommentsRouteHandler)
  .openapi(getFilesFileIdTasksRoute, getFilesFileIdTasksRouteHandler)
  .openapi(getFilesFileIdTrashRoute, getFilesFileIdTrashRouteHandler)
  .openapi(deleteFilesFileIdTrashRoute, deleteFilesFileIdTrashRouteHandler)
  .openapi(getFilesFileIdVersionsRoute, getFilesFileIdVersionsRouteHandler)
  .openapi(
    getFilesFileIdVersionsFileVersionIdRoute,
    getFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(
    deleteFilesFileIdVersionsFileVersionIdRoute,
    deleteFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(
    putFilesFileIdVersionsFileVersionIdRoute,
    putFilesFileIdVersionsFileVersionIdRouteHandler,
  )
  .openapi(postFilesFileIdVersionsCurrentRoute, postFilesFileIdVersionsCurrentRouteHandler)
  .openapi(getFilesFileIdMetadataRoute, getFilesFileIdMetadataRouteHandler)
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
    deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
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
  .openapi(
    deleteFilesFileIdMetadataScopeTemplateKeyRoute,
    deleteFilesFileIdMetadataScopeTemplateKeyRouteHandler,
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
    deleteFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
    deleteFilesFileIdMetadataGlobalBoxSkillsCardsRouteHandler,
  )
  .openapi(getFilesFileIdWatermarkRoute, getFilesFileIdWatermarkRouteHandler)
  .openapi(putFilesFileIdWatermarkRoute, putFilesFileIdWatermarkRouteHandler)
  .openapi(deleteFilesFileIdWatermarkRoute, deleteFilesFileIdWatermarkRouteHandler)
  .openapi(getFileRequestsFileRequestIdRoute, getFileRequestsFileRequestIdRouteHandler)
  .openapi(putFileRequestsFileRequestIdRoute, putFileRequestsFileRequestIdRouteHandler)
  .openapi(deleteFileRequestsFileRequestIdRoute, deleteFileRequestsFileRequestIdRouteHandler)
  .openapi(postFileRequestsFileRequestIdCopyRoute, postFileRequestsFileRequestIdCopyRouteHandler)
  .openapi(getFoldersFolderIdRoute, getFoldersFolderIdRouteHandler)
  .openapi(postFoldersFolderIdRoute, postFoldersFolderIdRouteHandler)
  .openapi(putFoldersFolderIdRoute, putFoldersFolderIdRouteHandler)
  .openapi(deleteFoldersFolderIdRoute, deleteFoldersFolderIdRouteHandler)
  .openapi(
    getFoldersFolderIdAppItemAssociationsRoute,
    getFoldersFolderIdAppItemAssociationsRouteHandler,
  )
  .openapi(getFoldersFolderIdItemsRoute, getFoldersFolderIdItemsRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(postFoldersFolderIdCopyRoute, postFoldersFolderIdCopyRouteHandler)
  .openapi(getFoldersFolderIdCollaborationsRoute, getFoldersFolderIdCollaborationsRouteHandler)
  .openapi(getFoldersFolderIdTrashRoute, getFoldersFolderIdTrashRouteHandler)
  .openapi(deleteFoldersFolderIdTrashRoute, deleteFoldersFolderIdTrashRouteHandler)
  .openapi(getFoldersFolderIdMetadataRoute, getFoldersFolderIdMetadataRouteHandler)
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
    deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
    deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRouteHandler,
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
  .openapi(
    deleteFoldersFolderIdMetadataScopeTemplateKeyRoute,
    deleteFoldersFolderIdMetadataScopeTemplateKeyRouteHandler,
  )
  .openapi(getFoldersTrashItemsRoute, getFoldersTrashItemsRouteHandler)
  .openapi(getFoldersFolderIdWatermarkRoute, getFoldersFolderIdWatermarkRouteHandler)
  .openapi(putFoldersFolderIdWatermarkRoute, putFoldersFolderIdWatermarkRouteHandler)
  .openapi(deleteFoldersFolderIdWatermarkRoute, deleteFoldersFolderIdWatermarkRouteHandler)
  .openapi(getFolderLocksRoute, getFolderLocksRouteHandler)
  .openapi(postFolderLocksRoute, postFolderLocksRouteHandler)
  .openapi(deleteFolderLocksFolderLockIdRoute, deleteFolderLocksFolderLockIdRouteHandler)
  .openapi(getMetadataTemplatesRoute, getMetadataTemplatesRouteHandler)
  .openapi(
    getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
    getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRouteHandler,
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRouteHandler,
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRouteHandler,
  )
  .openapi(
    getMetadataTemplatesScopeTemplateKeySchemaRoute,
    getMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(
    putMetadataTemplatesScopeTemplateKeySchemaRoute,
    putMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(
    deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
    deleteMetadataTemplatesScopeTemplateKeySchemaRouteHandler,
  )
  .openapi(getMetadataTemplatesTemplateIdRoute, getMetadataTemplatesTemplateIdRouteHandler)
  .openapi(getMetadataTemplatesGlobalRoute, getMetadataTemplatesGlobalRouteHandler)
  .openapi(getMetadataTemplatesEnterpriseRoute, getMetadataTemplatesEnterpriseRouteHandler)
  .openapi(postMetadataTemplatesSchemaRoute, postMetadataTemplatesSchemaRouteHandler)
  .openapi(
    postMetadataTemplatesSchemaClassificationsRoute,
    postMetadataTemplatesSchemaClassificationsRouteHandler,
  )
  .openapi(getMetadataCascadePoliciesRoute, getMetadataCascadePoliciesRouteHandler)
  .openapi(postMetadataCascadePoliciesRoute, postMetadataCascadePoliciesRouteHandler)
  .openapi(
    getMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
    getMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  )
  .openapi(
    deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
    deleteMetadataCascadePoliciesMetadataCascadePolicyIdRouteHandler,
  )
  .openapi(
    postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute,
    postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRouteHandler,
  )
  .openapi(postMetadataQueriesExecuteReadRoute, postMetadataQueriesExecuteReadRouteHandler)
  .openapi(getCommentsCommentIdRoute, getCommentsCommentIdRouteHandler)
  .openapi(putCommentsCommentIdRoute, putCommentsCommentIdRouteHandler)
  .openapi(deleteCommentsCommentIdRoute, deleteCommentsCommentIdRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(getCollaborationsCollaborationIdRoute, getCollaborationsCollaborationIdRouteHandler)
  .openapi(putCollaborationsCollaborationIdRoute, putCollaborationsCollaborationIdRouteHandler)
  .openapi(
    deleteCollaborationsCollaborationIdRoute,
    deleteCollaborationsCollaborationIdRouteHandler,
  )
  .openapi(getCollaborationsRoute, getCollaborationsRouteHandler)
  .openapi(postCollaborationsRoute, postCollaborationsRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(putTasksTaskIdRoute, putTasksTaskIdRouteHandler)
  .openapi(deleteTasksTaskIdRoute, deleteTasksTaskIdRouteHandler)
  .openapi(getTasksTaskIdAssignmentsRoute, getTasksTaskIdAssignmentsRouteHandler)
  .openapi(postTaskAssignmentsRoute, postTaskAssignmentsRouteHandler)
  .openapi(getTaskAssignmentsTaskAssignmentIdRoute, getTaskAssignmentsTaskAssignmentIdRouteHandler)
  .openapi(putTaskAssignmentsTaskAssignmentIdRoute, putTaskAssignmentsTaskAssignmentIdRouteHandler)
  .openapi(
    deleteTaskAssignmentsTaskAssignmentIdRoute,
    deleteTaskAssignmentsTaskAssignmentIdRouteHandler,
  )
  .openapi(getSharedItemsRoute, getSharedItemsRouteHandler)
  .openapi(getFilesFileIdGetSharedLinkRoute, getFilesFileIdGetSharedLinkRouteHandler)
  .openapi(putFilesFileIdAddSharedLinkRoute, putFilesFileIdAddSharedLinkRouteHandler)
  .openapi(putFilesFileIdUpdateSharedLinkRoute, putFilesFileIdUpdateSharedLinkRouteHandler)
  .openapi(putFilesFileIdRemoveSharedLinkRoute, putFilesFileIdRemoveSharedLinkRouteHandler)
  .openapi(getSharedItemsFoldersRoute, getSharedItemsFoldersRouteHandler)
  .openapi(getFoldersFolderIdGetSharedLinkRoute, getFoldersFolderIdGetSharedLinkRouteHandler)
  .openapi(putFoldersFolderIdAddSharedLinkRoute, putFoldersFolderIdAddSharedLinkRouteHandler)
  .openapi(putFoldersFolderIdUpdateSharedLinkRoute, putFoldersFolderIdUpdateSharedLinkRouteHandler)
  .openapi(putFoldersFolderIdRemoveSharedLinkRoute, putFoldersFolderIdRemoveSharedLinkRouteHandler)
  .openapi(postWebLinksRoute, postWebLinksRouteHandler)
  .openapi(getWebLinksWebLinkIdRoute, getWebLinksWebLinkIdRouteHandler)
  .openapi(postWebLinksWebLinkIdRoute, postWebLinksWebLinkIdRouteHandler)
  .openapi(putWebLinksWebLinkIdRoute, putWebLinksWebLinkIdRouteHandler)
  .openapi(deleteWebLinksWebLinkIdRoute, deleteWebLinksWebLinkIdRouteHandler)
  .openapi(getWebLinksWebLinkIdTrashRoute, getWebLinksWebLinkIdTrashRouteHandler)
  .openapi(deleteWebLinksWebLinkIdTrashRoute, deleteWebLinksWebLinkIdTrashRouteHandler)
  .openapi(getSharedItemsWebLinksRoute, getSharedItemsWebLinksRouteHandler)
  .openapi(getWebLinksWebLinkIdGetSharedLinkRoute, getWebLinksWebLinkIdGetSharedLinkRouteHandler)
  .openapi(putWebLinksWebLinkIdAddSharedLinkRoute, putWebLinksWebLinkIdAddSharedLinkRouteHandler)
  .openapi(
    putWebLinksWebLinkIdUpdateSharedLinkRoute,
    putWebLinksWebLinkIdUpdateSharedLinkRouteHandler,
  )
  .openapi(
    putWebLinksWebLinkIdRemoveSharedLinkRoute,
    putWebLinksWebLinkIdRemoveSharedLinkRouteHandler,
  )
  .openapi(getSharedItemsAppItemsRoute, getSharedItemsAppItemsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(postUsersTerminateSessionsRoute, postUsersTerminateSessionsRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdAvatarRoute, getUsersUserIdAvatarRouteHandler)
  .openapi(postUsersUserIdAvatarRoute, postUsersUserIdAvatarRouteHandler)
  .openapi(deleteUsersUserIdAvatarRoute, deleteUsersUserIdAvatarRouteHandler)
  .openapi(putUsersUserIdFolders0Route, putUsersUserIdFolders0RouteHandler)
  .openapi(getUsersUserIdEmailAliasesRoute, getUsersUserIdEmailAliasesRouteHandler)
  .openapi(postUsersUserIdEmailAliasesRoute, postUsersUserIdEmailAliasesRouteHandler)
  .openapi(
    deleteUsersUserIdEmailAliasesEmailAliasIdRoute,
    deleteUsersUserIdEmailAliasesEmailAliasIdRouteHandler,
  )
  .openapi(getUsersUserIdMembershipsRoute, getUsersUserIdMembershipsRouteHandler)
  .openapi(postInvitesRoute, postInvitesRouteHandler)
  .openapi(getInvitesInviteIdRoute, getInvitesInviteIdRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postGroupsTerminateSessionsRoute, postGroupsTerminateSessionsRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(putGroupsGroupIdRoute, putGroupsGroupIdRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdMembershipsRoute, getGroupsGroupIdMembershipsRouteHandler)
  .openapi(getGroupsGroupIdCollaborationsRoute, getGroupsGroupIdCollaborationsRouteHandler)
  .openapi(postGroupMembershipsRoute, postGroupMembershipsRouteHandler)
  .openapi(
    getGroupMembershipsGroupMembershipIdRoute,
    getGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(
    putGroupMembershipsGroupMembershipIdRoute,
    putGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(
    deleteGroupMembershipsGroupMembershipIdRoute,
    deleteGroupMembershipsGroupMembershipIdRouteHandler,
  )
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(putWebhooksWebhookIdRoute, putWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(putSkillInvocationsSkillIdRoute, putSkillInvocationsSkillIdRouteHandler)
  .openapi(optionsEventsRoute, optionsEventsRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(getCollectionsCollectionIdItemsRoute, getCollectionsCollectionIdItemsRouteHandler)
  .openapi(getCollectionsCollectionIdRoute, getCollectionsCollectionIdRouteHandler)
  .openapi(getRecentItemsRoute, getRecentItemsRouteHandler)
  .openapi(getRetentionPoliciesRoute, getRetentionPoliciesRouteHandler)
  .openapi(postRetentionPoliciesRoute, postRetentionPoliciesRouteHandler)
  .openapi(
    getRetentionPoliciesRetentionPolicyIdRoute,
    getRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    putRetentionPoliciesRetentionPolicyIdRoute,
    putRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    deleteRetentionPoliciesRetentionPolicyIdRoute,
    deleteRetentionPoliciesRetentionPolicyIdRouteHandler,
  )
  .openapi(
    getRetentionPoliciesRetentionPolicyIdAssignmentsRoute,
    getRetentionPoliciesRetentionPolicyIdAssignmentsRouteHandler,
  )
  .openapi(postRetentionPolicyAssignmentsRoute, postRetentionPolicyAssignmentsRouteHandler)
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
    deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRouteHandler,
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRoute,
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRouteHandler,
  )
  .openapi(getLegalHoldPoliciesRoute, getLegalHoldPoliciesRouteHandler)
  .openapi(postLegalHoldPoliciesRoute, postLegalHoldPoliciesRouteHandler)
  .openapi(
    getLegalHoldPoliciesLegalHoldPolicyIdRoute,
    getLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(
    putLegalHoldPoliciesLegalHoldPolicyIdRoute,
    putLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(
    deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
    deleteLegalHoldPoliciesLegalHoldPolicyIdRouteHandler,
  )
  .openapi(getLegalHoldPolicyAssignmentsRoute, getLegalHoldPolicyAssignmentsRouteHandler)
  .openapi(postLegalHoldPolicyAssignmentsRoute, postLegalHoldPolicyAssignmentsRouteHandler)
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
    deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRouteHandler,
  )
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRouteHandler,
  )
  .openapi(getFileVersionRetentionsRoute, getFileVersionRetentionsRouteHandler)
  .openapi(
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute,
    getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRouteHandler,
  )
  .openapi(
    getFileVersionRetentionsFileVersionRetentionIdRoute,
    getFileVersionRetentionsFileVersionRetentionIdRouteHandler,
  )
  .openapi(
    getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
    getFileVersionLegalHoldsFileVersionLegalHoldIdRouteHandler,
  )
  .openapi(getFileVersionLegalHoldsRoute, getFileVersionLegalHoldsRouteHandler)
  .openapi(
    getShieldInformationBarriersShieldInformationBarrierIdRoute,
    getShieldInformationBarriersShieldInformationBarrierIdRouteHandler,
  )
  .openapi(
    postShieldInformationBarriersChangeStatusRoute,
    postShieldInformationBarriersChangeStatusRouteHandler,
  )
  .openapi(getShieldInformationBarriersRoute, getShieldInformationBarriersRouteHandler)
  .openapi(postShieldInformationBarriersRoute, postShieldInformationBarriersRouteHandler)
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
    getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
  )
  .openapi(
    putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
    putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRouteHandler,
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
    getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRouteHandler,
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
    getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  )
  .openapi(
    deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRouteHandler,
  )
  .openapi(
    getShieldInformationBarrierSegmentRestrictionsRoute,
    getShieldInformationBarrierSegmentRestrictionsRouteHandler,
  )
  .openapi(
    postShieldInformationBarrierSegmentRestrictionsRoute,
    postShieldInformationBarrierSegmentRestrictionsRouteHandler,
  )
  .openapi(getDevicePinnersDevicePinnerIdRoute, getDevicePinnersDevicePinnerIdRouteHandler)
  .openapi(deleteDevicePinnersDevicePinnerIdRoute, deleteDevicePinnersDevicePinnerIdRouteHandler)
  .openapi(
    getEnterprisesEnterpriseIdDevicePinnersRoute,
    getEnterprisesEnterpriseIdDevicePinnersRouteHandler,
  )
  .openapi(getTermsOfServicesRoute, getTermsOfServicesRouteHandler)
  .openapi(postTermsOfServicesRoute, postTermsOfServicesRouteHandler)
  .openapi(getTermsOfServicesTermsOfServiceIdRoute, getTermsOfServicesTermsOfServiceIdRouteHandler)
  .openapi(putTermsOfServicesTermsOfServiceIdRoute, putTermsOfServicesTermsOfServiceIdRouteHandler)
  .openapi(getTermsOfServiceUserStatusesRoute, getTermsOfServiceUserStatusesRouteHandler)
  .openapi(postTermsOfServiceUserStatusesRoute, postTermsOfServiceUserStatusesRouteHandler)
  .openapi(
    putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute,
    putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRouteHandler,
  )
  .openapi(getCollaborationWhitelistEntriesRoute, getCollaborationWhitelistEntriesRouteHandler)
  .openapi(postCollaborationWhitelistEntriesRoute, postCollaborationWhitelistEntriesRouteHandler)
  .openapi(
    getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
    getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
  )
  .openapi(
    deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
    deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRouteHandler,
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
    getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
    getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  )
  .openapi(
    deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
    deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRouteHandler,
  )
  .openapi(getStoragePoliciesRoute, getStoragePoliciesRouteHandler)
  .openapi(getStoragePoliciesStoragePolicyIdRoute, getStoragePoliciesStoragePolicyIdRouteHandler)
  .openapi(getStoragePolicyAssignmentsRoute, getStoragePolicyAssignmentsRouteHandler)
  .openapi(postStoragePolicyAssignmentsRoute, postStoragePolicyAssignmentsRouteHandler)
  .openapi(
    getStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    getStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(
    putStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    putStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(
    deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRoute,
    deleteStoragePolicyAssignmentsStoragePolicyAssignmentIdRouteHandler,
  )
  .openapi(postZipDownloadsRoute, postZipDownloadsRouteHandler)
  .openapi(
    getZipDownloadsZipDownloadIdContentRoute,
    getZipDownloadsZipDownloadIdContentRouteHandler,
  )
  .openapi(getZipDownloadsZipDownloadIdStatusRoute, getZipDownloadsZipDownloadIdStatusRouteHandler)
  .openapi(
    postSignRequestsSignRequestIdCancelRoute,
    postSignRequestsSignRequestIdCancelRouteHandler,
  )
  .openapi(
    postSignRequestsSignRequestIdResendRoute,
    postSignRequestsSignRequestIdResendRouteHandler,
  )
  .openapi(getSignRequestsSignRequestIdRoute, getSignRequestsSignRequestIdRouteHandler)
  .openapi(getSignRequestsRoute, getSignRequestsRouteHandler)
  .openapi(postSignRequestsRoute, postSignRequestsRouteHandler)
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(postWorkflowsWorkflowIdStartRoute, postWorkflowsWorkflowIdStartRouteHandler)
  .openapi(getSignTemplatesRoute, getSignTemplatesRouteHandler)
  .openapi(getSignTemplatesTemplateIdRoute, getSignTemplatesTemplateIdRouteHandler)
  .openapi(getIntegrationMappingsSlackRoute, getIntegrationMappingsSlackRouteHandler)
  .openapi(postIntegrationMappingsSlackRoute, postIntegrationMappingsSlackRouteHandler)
  .openapi(
    putIntegrationMappingsSlackIntegrationMappingIdRoute,
    putIntegrationMappingsSlackIntegrationMappingIdRouteHandler,
  )
  .openapi(
    deleteIntegrationMappingsSlackIntegrationMappingIdRoute,
    deleteIntegrationMappingsSlackIntegrationMappingIdRouteHandler,
  )
  .openapi(getIntegrationMappingsTeamsRoute, getIntegrationMappingsTeamsRouteHandler)
  .openapi(postIntegrationMappingsTeamsRoute, postIntegrationMappingsTeamsRouteHandler)
  .openapi(
    putIntegrationMappingsTeamsIntegrationMappingIdRoute,
    putIntegrationMappingsTeamsIntegrationMappingIdRouteHandler,
  )
  .openapi(
    deleteIntegrationMappingsTeamsIntegrationMappingIdRoute,
    deleteIntegrationMappingsTeamsIntegrationMappingIdRouteHandler,
  )
  .openapi(postAiAskRoute, postAiAskRouteHandler)
  .openapi(postAiTextGenRoute, postAiTextGenRouteHandler)
  .openapi(getAiAgentDefaultRoute, getAiAgentDefaultRouteHandler)
  .openapi(postAiExtractRoute, postAiExtractRouteHandler)
  .openapi(postAiExtractStructuredRoute, postAiExtractStructuredRouteHandler)
  .openapi(getAiAgentsRoute, getAiAgentsRouteHandler)
  .openapi(postAiAgentsRoute, postAiAgentsRouteHandler)
  .openapi(putAiAgentsAgentIdRoute, putAiAgentsAgentIdRouteHandler)
  .openapi(getAiAgentsAgentIdRoute, getAiAgentsAgentIdRouteHandler)
  .openapi(deleteAiAgentsAgentIdRoute, deleteAiAgentsAgentIdRouteHandler)
  .openapi(postMetadataTaxonomiesRoute, postMetadataTaxonomiesRouteHandler)
  .openapi(getMetadataTaxonomiesNamespaceRoute, getMetadataTaxonomiesNamespaceRouteHandler)
  .openapi(
    getMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
    getMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
  )
  .openapi(
    patchMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
    patchMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
  )
  .openapi(
    deleteMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
    deleteMetadataTaxonomiesNamespaceTaxonomyKeyRouteHandler,
  )
  .openapi(
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRoute,
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRouteHandler,
  )
  .openapi(
    patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRoute,
    patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRouteHandler,
  )
  .openapi(
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRoute,
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRouteHandler,
  )
  .openapi(
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRoute,
    postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRouteHandler,
  )
  .openapi(
    getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
    getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRouteHandler,
  )
  .openapi(
    postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
    postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRouteHandler,
  )
  .openapi(
    getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
    getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  )
  .openapi(
    patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
    patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  )
  .openapi(
    deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
    deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRouteHandler,
  )
  .openapi(
    getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute,
    getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRouteHandler,
  )

export default app
