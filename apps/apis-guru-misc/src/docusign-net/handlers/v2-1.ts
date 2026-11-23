import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v21Handler = app
  .openapi(getV21Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingInvoicesPastDueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBillingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPlanCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPlanDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdChunkedUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdChunkedUploadsChunkedUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectEnvelopesRetryQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectFailuresFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectLogsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdAllUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConsumerDisclosureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConsumerDisclosureLangCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConsumerDisclosureLangCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesTransferRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsGroupIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdIdentityVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPaymentGatewayAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPermissionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdPermissionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsPowerFormIdFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdRecipientNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSearchFoldersSearchFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsBccEmailArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSettingsBccEmailArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsEnoteConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsNotificationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsNotificationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSharedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSharedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignatureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsSigningGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsSigningGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTabDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTabDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdViewsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRoutingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUnsupportedFileTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdCustomSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdViewsConsoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWatermarkPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21BillingPlansBillingPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserNotaryJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserNotaryJurisdictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21CurrentUserNotaryJurisdictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21DiagnosticsRequestLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsRequestLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsRequestLogsRequestLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21DiagnosticsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
