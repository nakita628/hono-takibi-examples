import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  deleteV21AccountsAccountIdBrandsBrandIdRoute,
  deleteV21AccountsAccountIdBrandsRoute,
  deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
  deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRoute,
  deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
  deleteV21AccountsAccountIdConnectConnectIdRoute,
  deleteV21AccountsAccountIdConnectFailuresFailureIdRoute,
  deleteV21AccountsAccountIdConnectLogsLogIdRoute,
  deleteV21AccountsAccountIdConnectLogsRoute,
  deleteV21AccountsAccountIdConnectOauthRoute,
  deleteV21AccountsAccountIdContactsContactIdRoute,
  deleteV21AccountsAccountIdContactsRoute,
  deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute,
  deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute,
  deleteV21AccountsAccountIdFavoriteTemplatesRoute,
  deleteV21AccountsAccountIdGroupsGroupIdBrandsRoute,
  deleteV21AccountsAccountIdGroupsGroupIdUsersRoute,
  deleteV21AccountsAccountIdGroupsRoute,
  deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
  deleteV21AccountsAccountIdPowerformsPowerFormIdRoute,
  deleteV21AccountsAccountIdPowerformsRoute,
  deleteV21AccountsAccountIdRoute,
  deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute,
  deleteV21AccountsAccountIdSettingsEnoteConfigurationRoute,
  deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  deleteV21AccountsAccountIdSignaturesSignatureIdRoute,
  deleteV21AccountsAccountIdSigningGroupsRoute,
  deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
  deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute,
  deleteV21AccountsAccountIdUsersRoute,
  deleteV21AccountsAccountIdUsersUserIdCloudStorageRoute,
  deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute,
  deleteV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
  deleteV21AccountsAccountIdUsersUserIdProfileImageRoute,
  deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
  deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute,
  deleteV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
  deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
  deleteV21DiagnosticsRequestLogsRoute,
  getV21AccountsAccountIdBillingChargesRoute,
  getV21AccountsAccountIdBillingInvoicesInvoiceIdRoute,
  getV21AccountsAccountIdBillingInvoicesPastDueRoute,
  getV21AccountsAccountIdBillingInvoicesRoute,
  getV21AccountsAccountIdBillingPaymentsPaymentIdRoute,
  getV21AccountsAccountIdBillingPaymentsRoute,
  getV21AccountsAccountIdBillingPlanCreditCardRoute,
  getV21AccountsAccountIdBillingPlanDowngradeRoute,
  getV21AccountsAccountIdBillingPlanRoute,
  getV21AccountsAccountIdBrandsBrandIdFileRoute,
  getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute,
  getV21AccountsAccountIdBrandsBrandIdResourcesRoute,
  getV21AccountsAccountIdBrandsBrandIdRoute,
  getV21AccountsAccountIdBrandsRoute,
  getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRoute,
  getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute,
  getV21AccountsAccountIdBulkSendBatchRoute,
  getV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
  getV21AccountsAccountIdBulkSendListsRoute,
  getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
  getV21AccountsAccountIdConnectConnectIdAllUsersRoute,
  getV21AccountsAccountIdConnectConnectIdRoute,
  getV21AccountsAccountIdConnectConnectIdUsersRoute,
  getV21AccountsAccountIdConnectFailuresRoute,
  getV21AccountsAccountIdConnectLogsLogIdRoute,
  getV21AccountsAccountIdConnectLogsRoute,
  getV21AccountsAccountIdConnectOauthRoute,
  getV21AccountsAccountIdConnectRoute,
  getV21AccountsAccountIdConsumerDisclosureLangCodeRoute,
  getV21AccountsAccountIdConsumerDisclosureRoute,
  getV21AccountsAccountIdContactsContactIdRoute,
  getV21AccountsAccountIdCustomFieldsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute,
  getV21AccountsAccountIdEnvelopesRoute,
  getV21AccountsAccountIdEnvelopesTransferRulesRoute,
  getV21AccountsAccountIdFavoriteTemplatesRoute,
  getV21AccountsAccountIdFoldersFolderIdRoute,
  getV21AccountsAccountIdFoldersRoute,
  getV21AccountsAccountIdGroupsGroupIdBrandsRoute,
  getV21AccountsAccountIdGroupsGroupIdUsersRoute,
  getV21AccountsAccountIdGroupsRoute,
  getV21AccountsAccountIdIdentityVerificationRoute,
  getV21AccountsAccountIdPaymentGatewayAccountsRoute,
  getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
  getV21AccountsAccountIdPermissionProfilesRoute,
  getV21AccountsAccountIdPowerformsPowerFormIdFormDataRoute,
  getV21AccountsAccountIdPowerformsPowerFormIdRoute,
  getV21AccountsAccountIdPowerformsRoute,
  getV21AccountsAccountIdPowerformsSendersRoute,
  getV21AccountsAccountIdRecipientNamesRoute,
  getV21AccountsAccountIdRoute,
  getV21AccountsAccountIdSealsRoute,
  getV21AccountsAccountIdSearchFoldersSearchFolderIdRoute,
  getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute,
  getV21AccountsAccountIdSettingsBccEmailArchivesRoute,
  getV21AccountsAccountIdSettingsEnoteConfigurationRoute,
  getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute,
  getV21AccountsAccountIdSettingsNotificationDefaultsRoute,
  getV21AccountsAccountIdSettingsPasswordRulesRoute,
  getV21AccountsAccountIdSettingsRoute,
  getV21AccountsAccountIdSettingsTabsRoute,
  getV21AccountsAccountIdSharedAccessRoute,
  getV21AccountsAccountIdSignatureProvidersRoute,
  getV21AccountsAccountIdSignaturesRoute,
  getV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  getV21AccountsAccountIdSignaturesSignatureIdRoute,
  getV21AccountsAccountIdSigningGroupsRoute,
  getV21AccountsAccountIdSigningGroupsSigningGroupIdRoute,
  getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
  getV21AccountsAccountIdSupportedLanguagesRoute,
  getV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
  getV21AccountsAccountIdTabDefinitionsRoute,
  getV21AccountsAccountIdTemplatesRoute,
  getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  getV21AccountsAccountIdTemplatesTemplateIdNotificationRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRoute,
  getV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute,
  getV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute,
  getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute,
  getV21AccountsAccountIdUnsupportedFileTypesRoute,
  getV21AccountsAccountIdUsersRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute,
  getV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
  getV21AccountsAccountIdUsersUserIdProfileImageRoute,
  getV21AccountsAccountIdUsersUserIdProfileRoute,
  getV21AccountsAccountIdUsersUserIdRoute,
  getV21AccountsAccountIdUsersUserIdSettingsRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
  getV21AccountsAccountIdWatermarkRoute,
  getV21AccountsAccountIdWorkspacesRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
  getV21AccountsProvisioningRoute,
  getV21BillingPlansBillingPlanIdRoute,
  getV21BillingPlansRoute,
  getV21CurrentUserNotaryJournalsRoute,
  getV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
  getV21CurrentUserNotaryJurisdictionsRoute,
  getV21CurrentUserNotaryRoute,
  getV21CurrentUserPasswordRulesRoute,
  getV21DiagnosticsRequestLogsRequestLogIdRoute,
  getV21DiagnosticsRequestLogsRoute,
  getV21DiagnosticsSettingsRoute,
  getV21Route,
  postV21AccountsAccountIdBillingPaymentsRoute,
  postV21AccountsAccountIdBrandsRoute,
  postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRoute,
  postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRoute,
  postV21AccountsAccountIdBulkSendListsRoute,
  postV21AccountsAccountIdChunkedUploadsRoute,
  postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRoute,
  postV21AccountsAccountIdConnectOauthRoute,
  postV21AccountsAccountIdConnectRoute,
  postV21AccountsAccountIdContactsRoute,
  postV21AccountsAccountIdCustomFieldsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsRoute,
  postV21AccountsAccountIdEnvelopesRoute,
  postV21AccountsAccountIdEnvelopesTransferRulesRoute,
  postV21AccountsAccountIdGroupsRoute,
  postV21AccountsAccountIdPermissionProfilesRoute,
  postV21AccountsAccountIdPowerformsRoute,
  postV21AccountsAccountIdSettingsBccEmailArchivesRoute,
  postV21AccountsAccountIdSignaturesRoute,
  postV21AccountsAccountIdSigningGroupsRoute,
  postV21AccountsAccountIdTabDefinitionsRoute,
  postV21AccountsAccountIdTemplatesRoute,
  postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRoute,
  postV21AccountsAccountIdTemplatesTemplateIdViewsEditRoute,
  postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRoute,
  postV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsRoute,
  postV21AccountsAccountIdUsersRoute,
  postV21AccountsAccountIdUsersUserIdCloudStorageRoute,
  postV21AccountsAccountIdUsersUserIdSignaturesRoute,
  postV21AccountsAccountIdViewsConsoleRoute,
  postV21AccountsAccountIdWorkspacesRoute,
  postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRoute,
  postV21AccountsRoute,
  postV21CurrentUserNotaryJurisdictionsRoute,
  postV21CurrentUserNotaryRoute,
  putV21AccountsAccountIdBillingPlanDowngradeRoute,
  putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRoute,
  putV21AccountsAccountIdBillingPlanRoute,
  putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute,
  putV21AccountsAccountIdBrandsBrandIdRoute,
  putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRoute,
  putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute,
  putV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
  putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRoute,
  putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute,
  putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRoute,
  putV21AccountsAccountIdConnectEnvelopesRetryQueueRoute,
  putV21AccountsAccountIdConnectOauthRoute,
  putV21AccountsAccountIdConnectRoute,
  putV21AccountsAccountIdConsumerDisclosureLangCodeRoute,
  putV21AccountsAccountIdContactsRoute,
  putV21AccountsAccountIdCustomFieldsCustomFieldIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute,
  putV21AccountsAccountIdEnvelopesStatusRoute,
  putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute,
  putV21AccountsAccountIdEnvelopesTransferRulesRoute,
  putV21AccountsAccountIdFavoriteTemplatesRoute,
  putV21AccountsAccountIdFoldersFolderIdRoute,
  putV21AccountsAccountIdGroupsGroupIdBrandsRoute,
  putV21AccountsAccountIdGroupsGroupIdUsersRoute,
  putV21AccountsAccountIdGroupsRoute,
  putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
  putV21AccountsAccountIdPowerformsPowerFormIdRoute,
  putV21AccountsAccountIdSettingsEnoteConfigurationRoute,
  putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute,
  putV21AccountsAccountIdSettingsNotificationDefaultsRoute,
  putV21AccountsAccountIdSettingsPasswordRulesRoute,
  putV21AccountsAccountIdSettingsRoute,
  putV21AccountsAccountIdSettingsTabsRoute,
  putV21AccountsAccountIdSharedAccessRoute,
  putV21AccountsAccountIdSignaturesRoute,
  putV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  putV21AccountsAccountIdSignaturesSignatureIdRoute,
  putV21AccountsAccountIdSigningGroupsRoute,
  putV21AccountsAccountIdSigningGroupsSigningGroupIdRoute,
  putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
  putV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
  putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdLockRoute,
  putV21AccountsAccountIdTemplatesTemplateIdNotificationRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRoute,
  putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute,
  putV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute,
  putV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute,
  putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
  putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute,
  putV21AccountsAccountIdUsersRoute,
  putV21AccountsAccountIdUsersUserIdCustomSettingsRoute,
  putV21AccountsAccountIdUsersUserIdProfileImageRoute,
  putV21AccountsAccountIdUsersUserIdProfileRoute,
  putV21AccountsAccountIdUsersUserIdRoute,
  putV21AccountsAccountIdUsersUserIdSettingsRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
  putV21AccountsAccountIdWatermarkPreviewRoute,
  putV21AccountsAccountIdWatermarkRoute,
  putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute,
  putV21AccountsAccountIdWorkspacesWorkspaceIdRoute,
  putV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
  putV21CurrentUserNotaryRoute,
  putV21DiagnosticsSettingsRoute,
} from '../routes'

export const getV21RouteHandler: RouteHandler<typeof getV21Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsRouteHandler: RouteHandler<typeof postV21AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsProvisioningRouteHandler: RouteHandler<
  typeof getV21AccountsProvisioningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingChargesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingChargesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingInvoicesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingInvoicesPastDueRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingInvoicesPastDueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingPaymentsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdBillingPaymentsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdBillingPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingPaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingPaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingPlanRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBillingPlanRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBillingPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingPlanCreditCardRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingPlanCreditCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBillingPlanDowngradeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBillingPlanDowngradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBillingPlanDowngradeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBillingPlanDowngradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdBrandsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdBrandsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdBrandsBrandIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdBrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsBrandIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBrandsBrandIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsBrandIdFileRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsBrandIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsBrandIdResourcesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsBrandIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBulkSendBatchRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBulkSendBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBulkSendListsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBulkSendListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdBulkSendListsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdBulkSendListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdBulkSendListsBulkSendListIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdBulkSendListsBulkSendListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdBulkSendListsBulkSendListIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdBulkSendListsBulkSendListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdChunkedUploadsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdChunkedUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdConnectRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdConnectRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdConnectEnvelopesRetryQueueRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdConnectEnvelopesRetryQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectFailuresRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdConnectFailuresFailureIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdConnectFailuresFailureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdConnectLogsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdConnectLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectLogsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdConnectLogsLogIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdConnectLogsLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectLogsLogIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectLogsLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdConnectOauthRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdConnectOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectOauthRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdConnectOauthRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdConnectOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdConnectOauthRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdConnectOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdConnectConnectIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdConnectConnectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectConnectIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectConnectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectConnectIdAllUsersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectConnectIdAllUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConnectConnectIdUsersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConnectConnectIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConsumerDisclosureRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConsumerDisclosureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdConsumerDisclosureLangCodeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdConsumerDisclosureLangCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdConsumerDisclosureLangCodeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdConsumerDisclosureLangCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdContactsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdContactsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdContactsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdContactsContactIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdContactsContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdContactsContactIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdContactsContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdCustomFieldsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdCustomFieldsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdCustomFieldsCustomFieldIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdCustomFieldsCustomFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesStatusRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesTransferRulesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesTransferRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesTransferRulesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesTransferRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesTransferRulesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesTransferRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdLockRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdLockRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdLockRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdFavoriteTemplatesRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdFavoriteTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdFavoriteTemplatesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdFavoriteTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdFavoriteTemplatesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdFavoriteTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdFoldersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdGroupsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdGroupsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdGroupsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdGroupsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdGroupsGroupIdBrandsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdGroupsGroupIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdGroupsGroupIdBrandsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdGroupsGroupIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdGroupsGroupIdBrandsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdGroupsGroupIdBrandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdGroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdGroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdGroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdGroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdGroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdGroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdIdentityVerificationRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdIdentityVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPaymentGatewayAccountsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPaymentGatewayAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPermissionProfilesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPermissionProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdPermissionProfilesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdPermissionProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdPowerformsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdPowerformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPowerformsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPowerformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdPowerformsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdPowerformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPowerformsSendersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPowerformsSendersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdPowerformsPowerFormIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdPowerformsPowerFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPowerformsPowerFormIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPowerformsPowerFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdPowerformsPowerFormIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdPowerformsPowerFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdPowerformsPowerFormIdFormDataRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdPowerformsPowerFormIdFormDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdRecipientNamesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdRecipientNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSealsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSealsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSearchFoldersSearchFolderIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSearchFoldersSearchFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsBccEmailArchivesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsBccEmailArchivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdSettingsBccEmailArchivesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdSettingsBccEmailArchivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSettingsEnoteConfigurationRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSettingsEnoteConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsEnoteConfigurationRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsEnoteConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsEnoteConfigurationRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsEnoteConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsNotificationDefaultsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsNotificationDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsNotificationDefaultsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsNotificationDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsPasswordRulesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsPasswordRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsPasswordRulesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsPasswordRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSettingsTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSettingsTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSettingsTabsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSettingsTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSharedAccessRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSharedAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSharedAccessRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSharedAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSignatureProvidersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSignatureProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSignaturesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdSignaturesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSignaturesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSigningGroupsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSigningGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSigningGroupsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSigningGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdSigningGroupsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdSigningGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSigningGroupsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSigningGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSigningGroupsSigningGroupIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSigningGroupsSigningGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSigningGroupsSigningGroupIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSigningGroupsSigningGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdSupportedLanguagesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdSupportedLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTabDefinitionsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTabDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTabDefinitionsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTabDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTabDefinitionsCustomTabIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTabDefinitionsCustomTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTabDefinitionsCustomTabIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTabDefinitionsCustomTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdDocumentsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdLockRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdLockRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdLockRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdLockRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdNotificationRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdNotificationRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdRecipientsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdRecipientsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdRecipientsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdViewsEditRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdViewsEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdWorkflowRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdWorkflowRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUnsupportedFileTypesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUnsupportedFileTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdUsersRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdCloudStorageRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdCloudStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdCloudStorageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdCloudStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdUsersUserIdCloudStorageRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdUsersUserIdCloudStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdCustomSettingsRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdCustomSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdCustomSettingsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdCustomSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdCustomSettingsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdCustomSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdProfileRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdProfileRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdProfileImageRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdProfileImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdProfileImageRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdProfileImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdProfileImageRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdProfileImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdSettingsRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdSettingsRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdSignaturesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdUsersUserIdSignaturesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdUsersUserIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdSignaturesRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdViewsConsoleRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdViewsConsoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWatermarkRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWatermarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdWatermarkRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdWatermarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdWatermarkPreviewRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdWatermarkPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWorkspacesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdWorkspacesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRouteHandler: RouteHandler<
  typeof postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRouteHandler: RouteHandler<
  typeof putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRouteHandler: RouteHandler<
  typeof getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21BillingPlansRouteHandler: RouteHandler<typeof getV21BillingPlansRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV21BillingPlansBillingPlanIdRouteHandler: RouteHandler<
  typeof getV21BillingPlansBillingPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21CurrentUserNotaryRouteHandler: RouteHandler<
  typeof getV21CurrentUserNotaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21CurrentUserNotaryRouteHandler: RouteHandler<
  typeof postV21CurrentUserNotaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21CurrentUserNotaryRouteHandler: RouteHandler<
  typeof putV21CurrentUserNotaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21CurrentUserNotaryJournalsRouteHandler: RouteHandler<
  typeof getV21CurrentUserNotaryJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21CurrentUserNotaryJurisdictionsRouteHandler: RouteHandler<
  typeof getV21CurrentUserNotaryJurisdictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21CurrentUserNotaryJurisdictionsRouteHandler: RouteHandler<
  typeof postV21CurrentUserNotaryJurisdictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRouteHandler: RouteHandler<
  typeof deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21CurrentUserNotaryJurisdictionsJurisdictionIdRouteHandler: RouteHandler<
  typeof getV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21CurrentUserNotaryJurisdictionsJurisdictionIdRouteHandler: RouteHandler<
  typeof putV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21CurrentUserPasswordRulesRouteHandler: RouteHandler<
  typeof getV21CurrentUserPasswordRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV21DiagnosticsRequestLogsRouteHandler: RouteHandler<
  typeof deleteV21DiagnosticsRequestLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21DiagnosticsRequestLogsRouteHandler: RouteHandler<
  typeof getV21DiagnosticsRequestLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21DiagnosticsRequestLogsRequestLogIdRouteHandler: RouteHandler<
  typeof getV21DiagnosticsRequestLogsRequestLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV21DiagnosticsSettingsRouteHandler: RouteHandler<
  typeof getV21DiagnosticsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV21DiagnosticsSettingsRouteHandler: RouteHandler<
  typeof putV21DiagnosticsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
