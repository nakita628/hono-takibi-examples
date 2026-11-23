type ServiceVersion = { version?: string | undefined; versionUrl?: string | undefined }
type ServiceInformation = {
  buildBranch?: string | undefined
  buildBranchDeployedDateTime?: string | undefined
  buildSHA?: string | undefined
  buildVersion?: string | undefined
  linkedSites?: string[] | undefined
  serviceVersions?: ServiceVersion[] | undefined
}
type ErrorDetails = { errorCode?: string | undefined; message?: string | undefined }
type NameValue = {
  errorDetails?: ErrorDetails | undefined
  name?: string | undefined
  originalValue?: string | undefined
  value?: string | undefined
}
type ResourceInformation = { resources?: NameValue[] | undefined }
type SettingsMetadata = {
  is21CFRPart11?: string | undefined
  options?: string[] | undefined
  rights?: string | undefined
  uiHint?: string | undefined
  uiOrder?: string | undefined
  uiType?: string | undefined
}
type AccessCodeFormat = {
  formatRequired?: string | undefined
  formatRequiredMetadata?: SettingsMetadata | undefined
  letterRequired?: string | undefined
  letterRequiredMetadata?: SettingsMetadata | undefined
  minimumLength?: string | undefined
  minimumLengthMetadata?: SettingsMetadata | undefined
  numberRequired?: string | undefined
  numberRequiredMetadata?: SettingsMetadata | undefined
  specialCharacterRequired?: string | undefined
  specialCharacterRequiredMetadata?: SettingsMetadata | undefined
}
type Expirations = {
  expireAfter?: string | undefined
  expireEnabled?: string | undefined
  expireWarn?: string | undefined
}
type Reminders = {
  reminderDelay?: string | undefined
  reminderEnabled?: string | undefined
  reminderFrequency?: string | undefined
}
type AccountNotification = {
  expirations?: Expirations | undefined
  reminders?: Reminders | undefined
  userOverrideEnabled?: string | undefined
}
type AdminMessage = { baseMessage?: string | undefined; moreInformation?: string | undefined }
type AskAnAdmin = {
  email?: string | undefined
  message?: string | undefined
  name?: string | undefined
  phone?: string | undefined
}
type AccountUISettings = {
  adminMessage?: AdminMessage | undefined
  askAnAdmin?: AskAnAdmin | undefined
  clickwrapSchemaVersion?: string | undefined
  clickwrapSchemaVersionMetadata?: SettingsMetadata | undefined
  enableAdminMessage?: string | undefined
  enableAdminMessageMetadata?: SettingsMetadata | undefined
  enableEasySignCanUseMultiTemplateApply?: string | undefined
  enableEasySignCanUseMultiTemplateApplyMetadata?: SettingsMetadata | undefined
  enableEasySignTemplateUpload?: string | undefined
  enableEasySignTemplateUploadMetadata?: SettingsMetadata | undefined
  enableEnvelopeCopyWithData?: string | undefined
  enableEnvelopeCopyWithDataMetadata?: SettingsMetadata | undefined
  enableLegacySendflowLink?: string | undefined
  enableLegacySendflowLinkMetadata?: SettingsMetadata | undefined
  hasExternalLinkedAccounts?: string | undefined
  hasExternalLinkedAccountsMetadata?: SettingsMetadata | undefined
  hideSendAnEnvelope?: string | undefined
  hideSendAnEnvelopeMetadata?: SettingsMetadata | undefined
  hideUseATemplate?: string | undefined
  hideUseATemplateInPrepare?: string | undefined
  hideUseATemplateInPrepareMetadata?: SettingsMetadata | undefined
  hideUseATemplateMetadata?: SettingsMetadata | undefined
  orderBasedRecipientIdGeneration?: string | undefined
  orderBasedRecipientIdGenerationMetadata?: SettingsMetadata | undefined
  removeEnvelopeForwarding?: string | undefined
  removeEnvelopeForwardingMetadata?: SettingsMetadata | undefined
  shouldRedactAccessCode?: string | undefined
  shouldRedactAccessCodeMetadata?: SettingsMetadata | undefined
  uploadNewImageToSignOrInitial?: string | undefined
  uploadNewImageToSignOrInitialMetadata?: SettingsMetadata | undefined
}
type AddressInformation = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  fax?: string | undefined
  phone?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  zipPlus4?: string | undefined
}
type ExternalDocumentSources = {
  boxnetEnabled?: string | undefined
  boxnetMetadata?: SettingsMetadata | undefined
  dropboxEnabled?: string | undefined
  dropboxMetadata?: SettingsMetadata | undefined
  googleDriveEnabled?: string | undefined
  googleDriveMetadata?: SettingsMetadata | undefined
  oneDriveEnabled?: string | undefined
  oneDriveMetadata?: SettingsMetadata | undefined
  salesforceEnabled?: string | undefined
  salesforceMetadata?: SettingsMetadata | undefined
}
type IdCheckSecurityStep = { authType?: string | undefined }
type IdCheckConfiguration = {
  authSteps?: IdCheckSecurityStep[] | undefined
  isDefault?: string | undefined
  name?: string | undefined
}
type AccountIdentityInputOption = {
  isRequired?: boolean | undefined
  optionName?: string | undefined
  valueType?: string | undefined
}
type AccountSignatureProviderOption = {
  signatureProviderOptionDisplayName?: string | undefined
  signatureProviderOptionId?: string | undefined
  signatureProviderOptionName?: string | undefined
}
type SignatureProviderRequiredOption = {
  requiredSignatureProviderOptionIds?: string[] | undefined
  signerType?: string | undefined
}
type AccountSignatureProvider = {
  isRequired?: string | undefined
  priority?: string | undefined
  signatureProviderDisplayName?: string | undefined
  signatureProviderId?: string | undefined
  signatureProviderName?: string | undefined
  signatureProviderOptionsMetadata?: AccountSignatureProviderOption[] | undefined
  signatureProviderRequiredOptions?: SignatureProviderRequiredOption[] | undefined
}
type AccountIdentityVerificationWorkflow = {
  defaultDescription?: string | undefined
  defaultName?: string | undefined
  inputOptions?: AccountIdentityInputOption[] | undefined
  signatureProvider?: AccountSignatureProvider | undefined
  workflowId?: string | undefined
  workflowLabel?: string | undefined
  workflowResourceKey?: string | undefined
}
type ExternalPrimaryAccountRecipientAuthRequirements = {
  accessCode?: string | undefined
  idVerification?: string | undefined
  kba?: string | undefined
  phone?: string | undefined
}
type LinkedExternalPrimaryAccount = {
  accountName?: string | undefined
  configurationId?: string | undefined
  email?: string | undefined
  linkId?: string | undefined
  pdfFieldHandlingOption?: string | undefined
  recipientAuthRequirements?: ExternalPrimaryAccountRecipientAuthRequirements | undefined
  status?: string | undefined
  userId?: string | undefined
}
type TabAccountSettings = {
  allowTabOrder?: string | undefined
  allowTabOrderMetadata?: SettingsMetadata | undefined
  approveDeclineTabsEnabled?: string | undefined
  approveDeclineTabsMetadata?: SettingsMetadata | undefined
  calculatedFieldsEnabled?: string | undefined
  calculatedFieldsMetadata?: SettingsMetadata | undefined
  checkBoxTabsMetadata?: SettingsMetadata | undefined
  checkboxTabsEnabled?: string | undefined
  currencyTabsEnabled?: string | undefined
  currencyTabsMetadata?: SettingsMetadata | undefined
  dataFieldRegexEnabled?: string | undefined
  dataFieldRegexMetadata?: SettingsMetadata | undefined
  dataFieldSizeEnabled?: string | undefined
  dataFieldSizeMetadata?: SettingsMetadata | undefined
  drawTabsEnabled?: string | undefined
  drawTabsMetadata?: SettingsMetadata | undefined
  firstLastEmailTabsEnabled?: string | undefined
  firstLastEmailTabsMetadata?: SettingsMetadata | undefined
  listTabsEnabled?: string | undefined
  listTabsMetadata?: SettingsMetadata | undefined
  noteTabsEnabled?: string | undefined
  noteTabsMetadata?: SettingsMetadata | undefined
  prefillTabsEnabled?: string | undefined
  prefillTabsMetadata?: SettingsMetadata | undefined
  radioTabsEnabled?: string | undefined
  radioTabsMetadata?: SettingsMetadata | undefined
  savingCustomTabsEnabled?: string | undefined
  savingCustomTabsMetadata?: SettingsMetadata | undefined
  senderToChangeTabAssignmentsEnabled?: string | undefined
  senderToChangeTabAssignmentsMetadata?: SettingsMetadata | undefined
  sharedCustomTabsEnabled?: string | undefined
  sharedCustomTabsMetadata?: SettingsMetadata | undefined
  tabDataLabelEnabled?: string | undefined
  tabDataLabelMetadata?: SettingsMetadata | undefined
  tabLocationEnabled?: string | undefined
  tabLocationMetadata?: SettingsMetadata | undefined
  tabLockingEnabled?: string | undefined
  tabLockingMetadata?: SettingsMetadata | undefined
  tabScaleEnabled?: string | undefined
  tabScaleMetadata?: SettingsMetadata | undefined
  tabTextFormattingEnabled?: string | undefined
  tabTextFormattingMetadata?: SettingsMetadata | undefined
  textTabsEnabled?: string | undefined
  textTabsMetadata?: SettingsMetadata | undefined
}
type AccountSettingsInformation = {
  accessCodeFormat?: AccessCodeFormat | undefined
  accountDateTimeFormat?: string | undefined
  accountDateTimeFormatMetadata?: SettingsMetadata | undefined
  accountDefaultLanguage?: string | undefined
  accountDefaultLanguageMetadata?: SettingsMetadata | undefined
  accountName?: string | undefined
  accountNameMetadata?: SettingsMetadata | undefined
  accountNotification?: AccountNotification | undefined
  accountUISettings?: AccountUISettings | undefined
  adoptSigConfig?: string | undefined
  adoptSigConfigMetadata?: SettingsMetadata | undefined
  advancedCorrect?: string | undefined
  advancedCorrectMetadata?: SettingsMetadata | undefined
  allowAccessCodeFormat?: string | undefined
  allowAccessCodeFormatMetadata?: SettingsMetadata | undefined
  allowAccountManagementGranular?: string | undefined
  allowAccountManagementGranularMetadata?: SettingsMetadata | undefined
  allowAccountMemberNameChange?: string | undefined
  allowAccountMemberNameChangeMetadata?: SettingsMetadata | undefined
  allowAdvancedRecipientRoutingConditional?: string | undefined
  allowAdvancedRecipientRoutingConditionalMetadata?: SettingsMetadata | undefined
  allowAgentNameEmailEdit?: string | undefined
  allowAgentNameEmailEditMetadata?: SettingsMetadata | undefined
  allowAgreementActions?: string | undefined
  allowAgreementActionsMetadata?: SettingsMetadata | undefined
  allowAgreementOrchestrationWorkflows?: string | undefined
  allowAgreementOrchestrationWorkflowsMetadata?: SettingsMetadata | undefined
  allowAutoNavSettings?: string | undefined
  allowAutoNavSettingsMetadata?: SettingsMetadata | undefined
  allowAutoTagging?: string | undefined
  allowAutoTaggingMetadata?: SettingsMetadata | undefined
  allowBulkSend?: string | undefined
  allowBulkSendMetadata?: SettingsMetadata | undefined
  allowCDWithdraw?: string | undefined
  allowCDWithdrawMetadata?: SettingsMetadata | undefined
  allowConnectHttpListenerConfigs?: string | undefined
  allowConnectOAuthUI?: string | undefined
  allowConnectSendFinishLater?: string | undefined
  allowConnectSendFinishLaterMetadata?: SettingsMetadata | undefined
  allowConnectUnifiedPayloadUI?: string | undefined
  allowConsumerDisclosureOverride?: string | undefined
  allowConsumerDisclosureOverrideMetadata?: SettingsMetadata | undefined
  allowDataDownload?: string | undefined
  allowDataDownloadMetadata?: SettingsMetadata | undefined
  allowDelayedRouting?: string | undefined
  allowDelayedRoutingMetadata?: SettingsMetadata | undefined
  allowDelegatedSigning?: string | undefined
  allowDelegatedSigningMetadata?: SettingsMetadata | undefined
  allowDocGenDocuments?: string | undefined
  allowDocGenDocumentsMetadata?: SettingsMetadata | undefined
  allowDocumentDisclosures?: string | undefined
  allowDocumentDisclosuresMetadata?: SettingsMetadata | undefined
  allowDocumentVisibility?: string | undefined
  allowDocumentVisibilityMetadata?: SettingsMetadata | undefined
  allowDocumentsOnSignedEnvelopes?: string | undefined
  allowDocumentsOnSignedEnvelopesMetadata?: SettingsMetadata | undefined
  allowEHankoStamps?: string | undefined
  allowEHankoStampsMetadata?: SettingsMetadata | undefined
  allowENoteEOriginal?: string | undefined
  allowENoteEOriginalMetadata?: SettingsMetadata | undefined
  allowEnvelopeCorrect?: string | undefined
  allowEnvelopeCorrectMetadata?: SettingsMetadata | undefined
  allowEnvelopeCustodyTransfer?: string | undefined
  allowEnvelopeCustodyTransferMetadata?: SettingsMetadata | undefined
  allowEnvelopeCustomFields?: string | undefined
  allowEnvelopeCustomFieldsMetadata?: SettingsMetadata | undefined
  allowEnvelopePublishReporting?: string | undefined
  allowEnvelopePublishReportingMetadata?: SettingsMetadata | undefined
  allowEnvelopeReporting?: string | undefined
  allowEnvelopeReportingMetadata?: SettingsMetadata | undefined
  allowExpressSignerCertificate?: string | undefined
  allowExpressSignerCertificateMetadata?: SettingsMetadata | undefined
  allowExpression?: string | undefined
  allowExpressionMetadata?: SettingsMetadata | undefined
  allowExtendedSendingResourceFile?: string | undefined
  allowExtendedSendingResourceFileMetadata?: SettingsMetadata | undefined
  allowExternalLinkedAccounts?: string | undefined
  allowExternalLinkedAccountsMetadata?: SettingsMetadata | undefined
  allowExternalSignaturePad?: string | undefined
  allowExternalSignaturePadMetadata?: SettingsMetadata | undefined
  allowIDVForEUQualifiedSignatures?: string | undefined
  allowIDVForEUQualifiedSignaturesMetadata?: SettingsMetadata | undefined
  allowIDVLevel1?: string | undefined
  allowIDVLevel1Metadata?: SettingsMetadata | undefined
  allowIDVLevel2?: string | undefined
  allowIDVLevel2Metadata?: SettingsMetadata | undefined
  allowIDVLevel3?: string | undefined
  allowIDVLevel3Metadata?: SettingsMetadata | undefined
  allowIDVPlatform?: string | undefined
  allowIDVPlatformMetadata?: SettingsMetadata | undefined
  allowInPerson?: string | undefined
  allowInPersonElectronicNotary?: string | undefined
  allowInPersonElectronicNotaryMetadata?: SettingsMetadata | undefined
  allowInPersonMetadata?: SettingsMetadata | undefined
  allowManagedStamps?: string | undefined
  allowManagedStampsMetadata?: SettingsMetadata | undefined
  allowManagingEnvelopesOnBehalfOfOthers?: string | undefined
  allowManagingEnvelopesOnBehalfOfOthersMetadata?: SettingsMetadata | undefined
  allowMarkup?: string | undefined
  allowMarkupMetadata?: SettingsMetadata | undefined
  allowMemberTimeZone?: string | undefined
  allowMemberTimeZoneMetadata?: SettingsMetadata | undefined
  allowMergeFields?: string | undefined
  allowMergeFieldsMetadata?: SettingsMetadata | undefined
  allowMultipleBrandProfiles?: string | undefined
  allowMultipleBrandProfilesMetadata?: SettingsMetadata | undefined
  allowMultipleSignerAttachments?: string | undefined
  allowMultipleSignerAttachmentsMetadata?: SettingsMetadata | undefined
  allowNonUSPhoneAuth?: string | undefined
  allowNonUSPhoneAuthMetadata?: SettingsMetadata | undefined
  allowOcrOfEnvelopeDocuments?: string | undefined
  allowOcrOfEnvelopeDocumentsMetadata?: SettingsMetadata | undefined
  allowOfflineSigning?: string | undefined
  allowOfflineSigningMetadata?: SettingsMetadata | undefined
  allowOpenTrustSignerCertificate?: string | undefined
  allowOpenTrustSignerCertificateMetadata?: SettingsMetadata | undefined
  allowOrganizationDocusignMonitor?: string | undefined
  allowOrganizationDocusignMonitorMetadata?: SettingsMetadata | undefined
  allowOrganizationDomainUserManagement?: string | undefined
  allowOrganizationDomainUserManagementMetadata?: SettingsMetadata | undefined
  allowOrganizationSsoManagement?: string | undefined
  allowOrganizationSsoManagementMetadata?: SettingsMetadata | undefined
  allowOrganizationToUseInPersonElectronicNotary?: string | undefined
  allowOrganizationToUseInPersonElectronicNotaryMetadata?: SettingsMetadata | undefined
  allowOrganizationToUseRemoteNotary?: string | undefined
  allowOrganizationToUseRemoteNotaryMetadata?: SettingsMetadata | undefined
  allowOrganizationToUseThirdPartyElectronicNotary?: string | undefined
  allowOrganizationToUseThirdPartyElectronicNotaryMetadata?: SettingsMetadata | undefined
  allowOrganizations?: string | undefined
  allowOrganizationsMetadata?: SettingsMetadata | undefined
  allowParticipantRecipientType?: string | undefined
  allowParticipantRecipientTypeMetadata?: SettingsMetadata | undefined
  allowPaymentProcessing?: string | undefined
  allowPaymentProcessingMetadata?: SettingsMetadata | undefined
  allowPerformanceAnalytics?: string | undefined
  allowPerformanceAnalyticsMetadata?: SettingsMetadata | undefined
  allowPhoneAuthOverride?: string | undefined
  allowPhoneAuthOverrideMetadata?: SettingsMetadata | undefined
  allowPhoneAuthentication?: string | undefined
  allowPhoneAuthenticationMetadata?: SettingsMetadata | undefined
  allowPrivateSigningGroups?: string | undefined
  allowPrivateSigningGroupsMetadata?: SettingsMetadata | undefined
  allowRecipientConnect?: string | undefined
  allowRecipientConnectMetadata?: SettingsMetadata | undefined
  allowReminders?: string | undefined
  allowRemindersMetadata?: SettingsMetadata | undefined
  allowRemoteNotary?: string | undefined
  allowRemoteNotaryMetadata?: SettingsMetadata | undefined
  allowResourceFileBranding?: string | undefined
  allowResourceFileBrandingMetadata?: SettingsMetadata | undefined
  allowSMSDelivery?: string | undefined
  allowSMSDeliveryMetadata?: SettingsMetadata | undefined
  allowSafeBioPharmaSignerCertificate?: string | undefined
  allowSafeBioPharmaSignerCertificateMetadata?: SettingsMetadata | undefined
  allowScheduledSending?: string | undefined
  allowScheduledSendingMetadata?: SettingsMetadata | undefined
  allowSecurityAppliance?: string | undefined
  allowSecurityApplianceMetadata?: SettingsMetadata | undefined
  allowSendToCertifiedDelivery?: string | undefined
  allowSendToCertifiedDeliveryMetadata?: SettingsMetadata | undefined
  allowSendToIntermediary?: string | undefined
  allowSendToIntermediaryMetadata?: SettingsMetadata | undefined
  allowSendingEnvelopesOnBehalfOfOthers?: string | undefined
  allowSendingEnvelopesOnBehalfOfOthersMetadata?: SettingsMetadata | undefined
  allowServerTemplates?: string | undefined
  allowServerTemplatesMetadata?: SettingsMetadata | undefined
  allowSetEmbeddedRecipientStartURL?: string | undefined
  allowSetEmbeddedRecipientStartURLMetadata?: SettingsMetadata | undefined
  allowSharedTabs?: string | undefined
  allowSharedTabsMetadata?: SettingsMetadata | undefined
  allowSignDocumentFromHomePage?: string | undefined
  allowSignDocumentFromHomePageMetadata?: SettingsMetadata | undefined
  allowSignNow?: string | undefined
  allowSignNowMetadata?: string | undefined
  allowSignatureStamps?: string | undefined
  allowSignatureStampsMetadata?: SettingsMetadata | undefined
  allowSignerReassign?: string | undefined
  allowSignerReassignMetadata?: SettingsMetadata | undefined
  allowSignerReassignOverride?: string | undefined
  allowSignerReassignOverrideMetadata?: SettingsMetadata | undefined
  allowSigningExtensions?: string | undefined
  allowSigningExtensionsMetadata?: SettingsMetadata | undefined
  allowSigningGroups?: string | undefined
  allowSigningGroupsMetadata?: SettingsMetadata | undefined
  allowSigningInsights?: string | undefined
  allowSigningInsightsMetadata?: SettingsMetadata | undefined
  allowSigningRadioDeselect?: string | undefined
  allowSigningRadioDeselectMetadata?: SettingsMetadata | undefined
  allowSocialIdLogin?: string | undefined
  allowSocialIdLoginMetadata?: SettingsMetadata | undefined
  allowSupplementalDocuments?: string | undefined
  allowSupplementalDocumentsMetadata?: SettingsMetadata | undefined
  allowThirdPartyElectronicNotary?: string | undefined
  allowThirdPartyElectronicNotaryMetadata?: SettingsMetadata | undefined
  allowTransactionsWorkspace?: string | undefined
  allowTransactionsWorkspaceMetadata?: SettingsMetadata | undefined
  allowUsersToAccessDirectory?: string | undefined
  allowUsersToAccessDirectoryMetadata?: SettingsMetadata | undefined
  allowValueInsights?: string | undefined
  allowValueInsightsMetadata?: SettingsMetadata | undefined
  allowWebForms?: string | undefined
  allowWebFormsMetadata?: SettingsMetadata | undefined
  allowWhatsAppDelivery?: string | undefined
  allowWhatsAppDeliveryMetadata?: SettingsMetadata | undefined
  anchorPopulationScope?: string | undefined
  anchorPopulationScopeMetadata?: SettingsMetadata | undefined
  anchorTagVersionedPlacementEnabled?: string | undefined
  anchorTagVersionedPlacementMetadataEnabled?: SettingsMetadata | undefined
  attachCompletedEnvelope?: string | undefined
  attachCompletedEnvelopeMetadata?: SettingsMetadata | undefined
  authenticationCheck?: string | undefined
  authenticationCheckMetadata?: SettingsMetadata | undefined
  autoNavRule?: string | undefined
  autoNavRuleMetadata?: SettingsMetadata | undefined
  autoProvisionSignerAccount?: string | undefined
  autoProvisionSignerAccountMetadata?: SettingsMetadata | undefined
  bccEmailArchive?: string | undefined
  bccEmailArchiveMetadata?: SettingsMetadata | undefined
  betaSwitchConfiguration?: string | undefined
  betaSwitchConfigurationMetadata?: SettingsMetadata | undefined
  billingAddress?: AddressInformation | undefined
  billingAddressMetadata?: SettingsMetadata | undefined
  bulkSend?: string | undefined
  bulkSendActionResendLimit?: string | undefined
  bulkSendMaxCopiesInBatch?: string | undefined
  bulkSendMaxUnprocessedEnvelopesCount?: string | undefined
  bulkSendMetadata?: SettingsMetadata | undefined
  canSelfBrandSend?: string | undefined
  canSelfBrandSendMetadata?: SettingsMetadata | undefined
  canSelfBrandSign?: string | undefined
  canSelfBrandSignMetadata?: SettingsMetadata | undefined
  canUseSalesforceOAuth?: string | undefined
  canUseSalesforceOAuthMetadata?: SettingsMetadata | undefined
  captureVoiceRecording?: string | undefined
  captureVoiceRecordingMetadata?: SettingsMetadata | undefined
  cfr21SimplifiedSigningEnabled?: string | undefined
  cfr21SimplifiedSigningEnabledMetadata?: SettingsMetadata | undefined
  cfrUseWideImage?: string | undefined
  cfrUseWideImageMetadata?: SettingsMetadata | undefined
  checkForMultipleAdminsOnAccount?: string | undefined
  checkForMultipleAdminsOnAccountMetadata?: SettingsMetadata | undefined
  chromeSignatureEnabled?: string | undefined
  chromeSignatureEnabledMetadata?: SettingsMetadata | undefined
  commentEmailShowMessageText?: string | undefined
  commentEmailShowMessageTextMetadata?: SettingsMetadata | undefined
  commentsAllowEnvelopeOverride?: string | undefined
  commentsAllowEnvelopeOverrideMetadata?: SettingsMetadata | undefined
  conditionalFieldsEnabled?: string | undefined
  conditionalFieldsEnabledMetadata?: SettingsMetadata | undefined
  consumerDisclosureFrequency?: string | undefined
  consumerDisclosureFrequencyMetadata?: SettingsMetadata | undefined
  convertPdfFields?: string | undefined
  convertPdfFieldsMetadata?: SettingsMetadata | undefined
  dataPopulationScope?: string | undefined
  dataPopulationScopeMetadata?: SettingsMetadata | undefined
  disableAutoTemplateMatching?: string | undefined
  disableAutoTemplateMatchingMetadata?: SettingsMetadata | undefined
  disableMobileApp?: string | undefined
  disableMobileAppMetadata?: SettingsMetadata | undefined
  disableMobilePushNotifications?: string | undefined
  disableMobilePushNotificationsMetadata?: SettingsMetadata | undefined
  disableMobileSending?: string | undefined
  disableMobileSendingMetadata?: SettingsMetadata | undefined
  disableMultipleSessions?: string | undefined
  disableMultipleSessionsMetadata?: SettingsMetadata | undefined
  disablePurgeNotificationsForSenderMetadata?: SettingsMetadata | undefined
  disableSignerCertView?: string | undefined
  disableSignerCertViewMetadata?: SettingsMetadata | undefined
  disableSignerHistoryView?: string | undefined
  disableSignerHistoryViewMetadata?: SettingsMetadata | undefined
  disableStyleSignature?: string | undefined
  disableStyleSignatureMetadata?: SettingsMetadata | undefined
  disableUploadSignature?: string | undefined
  disableUploadSignatureMetadata?: SettingsMetadata | undefined
  disableUserSharing?: string | undefined
  disableUserSharingMetadata?: SettingsMetadata | undefined
  displayBetaSwitch?: string | undefined
  displayBetaSwitchMetadata?: SettingsMetadata | undefined
  documentConversionRestrictions?: string | undefined
  documentConversionRestrictionsMetadata?: SettingsMetadata | undefined
  documentRetention?: string | undefined
  documentRetentionMetadata?: SettingsMetadata | undefined
  documentRetentionPurgeTabs?: string | undefined
  documentVisibility?: string | undefined
  documentVisibilityMetadata?: SettingsMetadata | undefined
  dss_SIGN_28411_EnableLeavePagePrompt_RadminOption?: string | undefined
  dss_SIGN_29182_SlideUpBar_RadminOption?: string | undefined
  emailTemplateVersion?: string | undefined
  emailTemplateVersionMetadata?: SettingsMetadata | undefined
  enableAccessCodeGenerator?: string | undefined
  enableAccessCodeGeneratorMetadata?: SettingsMetadata | undefined
  enableAdmHealthcare?: string | undefined
  enableAdmHealthcareMetadata?: SettingsMetadata | undefined
  enableAdvancedPayments?: string | undefined
  enableAdvancedPaymentsMetadata?: SettingsMetadata | undefined
  enableAdvancedPowerForms?: string | undefined
  enableAdvancedPowerFormsMetadata?: SettingsMetadata | undefined
  enableAgreementActionsForCLM?: string | undefined
  enableAgreementActionsForCLMMetadata?: SettingsMetadata | undefined
  enableAgreementActionsForESign?: string | undefined
  enableAgreementActionsForESignMetadata?: SettingsMetadata | undefined
  enableAutoNav?: string | undefined
  enableAutoNavMetadata?: SettingsMetadata | undefined
  enableBccDummyLink?: string | undefined
  enableBccDummyLinkMetadata?: SettingsMetadata | undefined
  enableCalculatedFields?: string | undefined
  enableCalculatedFieldsMetadata?: SettingsMetadata | undefined
  enableClickPlus?: string | undefined
  enableClickPlusConditionalContent?: string | undefined
  enableClickPlusConditionalContentMetaData?: SettingsMetadata | undefined
  enableClickPlusCustomFields?: string | undefined
  enableClickPlusCustomFieldsMetaData?: SettingsMetadata | undefined
  enableClickPlusCustomStyle?: string | undefined
  enableClickPlusCustomStyleMetaData?: SettingsMetadata | undefined
  enableClickPlusDynamicContent?: string | undefined
  enableClickPlusDynamicContentMetaData?: SettingsMetadata | undefined
  enableClickPlusMetaData?: SettingsMetadata | undefined
  enableClickwraps?: string | undefined
  enableClickwrapsMetadata?: SettingsMetadata | undefined
  enableCombinedPDFDownloadForSBS?: string | undefined
  enableCommentsHistoryDownloadInSigning?: string | undefined
  enableCommentsHistoryDownloadInSigningMetadata?: SettingsMetadata | undefined
  enableContactSuggestions?: string | undefined
  enableContactSuggestionsMetadata?: SettingsMetadata | undefined
  enableCustomerSatisfactionMetricTracking?: string | undefined
  enableCustomerSatisfactionMetricTrackingMetadata?: SettingsMetadata | undefined
  enableDSPro?: string | undefined
  enableDSProMetadata?: SettingsMetadata | undefined
  enableESignAPIHourlyLimitManagement?: string | undefined
  enableESignAPIHourlyLimitManagementMetadata?: SettingsMetadata | undefined
  enableEnforceTlsEmailsSettingMetadata?: SettingsMetadata | undefined
  enableEnvelopeStampingByAccountAdmin?: string | undefined
  enableEnvelopeStampingByAccountAdminMetadata?: SettingsMetadata | undefined
  enableEnvelopeStampingByDSAdmin?: string | undefined
  enableEnvelopeStampingByDSAdminMetadata?: SettingsMetadata | undefined
  enableEsignCommunities?: string | undefined
  enableEsignCommunitiesMetadata?: SettingsMetadata | undefined
  enableIDFxAccountlessSMSAuthForPart11?: string | undefined
  enableIDFxAccountlessSMSAuthForPart11Metadata?: SettingsMetadata | undefined
  enableIDFxIntuitKBA?: string | undefined
  enableIDFxIntuitKBAMetadata?: SettingsMetadata | undefined
  enableIDFxPhoneAuthentication?: string | undefined
  enableIDFxPhoneAuthenticationMetadata?: SettingsMetadata | undefined
  enableIdfxPhoneAuthSignatureAuthStatus?: string | undefined
  enableIdfxPhoneAuthSignatureAuthStatusMetadata?: SettingsMetadata | undefined
  enableInBrowserEditor?: string | undefined
  enableInBrowserEditorMetadata?: SettingsMetadata | undefined
  enableKeyTermsSuggestionsByDocumentType?: string | undefined
  enableKeyTermsSuggestionsByDocumentTypeMetadata?: SettingsMetadata | undefined
  enablePDFAConversion?: string | undefined
  enablePDFAConversionMetadata?: SettingsMetadata | undefined
  enableParticipantRecipientSettingMetadata?: SettingsMetadata | undefined
  enablePaymentProcessing?: string | undefined
  enablePaymentProcessingMetadata?: SettingsMetadata | undefined
  enablePowerForm?: string | undefined
  enablePowerFormDirect?: string | undefined
  enablePowerFormDirectMetadata?: SettingsMetadata | undefined
  enablePowerFormMetadata?: SettingsMetadata | undefined
  enableRecipientDomainValidation?: string | undefined
  enableRecipientDomainValidationMetadata?: SettingsMetadata | undefined
  enableRecipientMayProvidePhoneNumber?: string | undefined
  enableRecipientMayProvidePhoneNumberMetadata?: SettingsMetadata | undefined
  enableReportLinks?: string | undefined
  enableReportLinksMetadata?: SettingsMetadata | undefined
  enableRequireSignOnPaper?: string | undefined
  enableRequireSignOnPaperMetadata?: SettingsMetadata | undefined
  enableReservedDomain?: string | undefined
  enableReservedDomainMetadata?: SettingsMetadata | undefined
  enableResponsiveSigning?: string | undefined
  enableResponsiveSigningMetadata?: SettingsMetadata | undefined
  enableSMSAuthentication?: string | undefined
  enableSMSAuthenticationMetadata?: SettingsMetadata | undefined
  enableSMSDeliveryAdditionalNotification?: string | undefined
  enableSMSDeliveryAdditionalNotificationMetadata?: SettingsMetadata | undefined
  enableSMSDeliveryPrimary?: string | undefined
  enableScheduledRelease?: string | undefined
  enableScheduledReleaseMetadata?: SettingsMetadata | undefined
  enableSearch?: string | undefined
  enableSearchMetadata?: SettingsMetadata | undefined
  enableSearchSiteSpecificApi?: string | undefined
  enableSearchSiteSpecificApiMetadata?: SettingsMetadata | undefined
  enableSearchUI?: string | undefined
  enableSearchUIMetadata?: SettingsMetadata | undefined
  enableSendToAgent?: string | undefined
  enableSendToAgentMetadata?: SettingsMetadata | undefined
  enableSendToIntermediary?: string | undefined
  enableSendToIntermediaryMetadata?: SettingsMetadata | undefined
  enableSendToManage?: string | undefined
  enableSendToManageMetadata?: SettingsMetadata | undefined
  enableSendingTagsFontSettings?: string | undefined
  enableSendingTagsFontSettingsMetadata?: SettingsMetadata | undefined
  enableSequentialSigningAPI?: string | undefined
  enableSequentialSigningAPIMetadata?: SettingsMetadata | undefined
  enableSequentialSigningUI?: string | undefined
  enableSequentialSigningUIMetadata?: SettingsMetadata | undefined
  enableSignOnPaper?: string | undefined
  enableSignOnPaperMetadata?: SettingsMetadata | undefined
  enableSignOnPaperOverride?: string | undefined
  enableSignOnPaperOverrideMetadata?: SettingsMetadata | undefined
  enableSignWithNotary?: string | undefined
  enableSignWithNotaryMetadata?: SettingsMetadata | undefined
  enableSignerAttachments?: string | undefined
  enableSignerAttachmentsMetadata?: SettingsMetadata | undefined
  enableSigningExtensionComments?: string | undefined
  enableSigningExtensionCommentsMetadata?: SettingsMetadata | undefined
  enableSigningExtensionConversations?: string | undefined
  enableSigningExtensionConversationsMetadata?: SettingsMetadata | undefined
  enableSigningOrderSettingsForAccount?: string | undefined
  enableSigningOrderSettingsForAccountMetadata?: SettingsMetadata | undefined
  enableSmartContracts?: string | undefined
  enableSmartContractsMetadata?: SettingsMetadata | undefined
  enableSocialIdLogin?: string | undefined
  enableSocialIdLoginMetadata?: SettingsMetadata | undefined
  enableStrikeThrough?: string | undefined
  enableStrikeThroughMetadata?: SettingsMetadata | undefined
  enableTransactionPoint?: string | undefined
  enableTransactionPointMetadata?: SettingsMetadata | undefined
  enableVaulting?: string | undefined
  enableVaultingMetadata?: SettingsMetadata | undefined
  enableWitnessing?: string | undefined
  enableWitnessingMetadata?: SettingsMetadata | undefined
  enforceTemplateNameUniqueness?: string | undefined
  enforceTemplateNameUniquenessMetadata?: SettingsMetadata | undefined
  enforceTlsEmails?: string | undefined
  enforceTlsEmailsMetadata?: SettingsMetadata | undefined
  envelopeIntegrationAllowed?: string | undefined
  envelopeIntegrationAllowedMetadata?: SettingsMetadata | undefined
  envelopeIntegrationEnabled?: string | undefined
  envelopeIntegrationEnabledMetadata?: SettingsMetadata | undefined
  envelopeLimitsTotalDocumentSizeAllowedInMB?: string | undefined
  envelopeLimitsTotalDocumentSizeAllowedInMBEnabled?: string | undefined
  envelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata?: SettingsMetadata | undefined
  envelopeLimitsTotalDocumentSizeAllowedInMBMetadata?: SettingsMetadata | undefined
  envelopeSearchMode?: string | undefined
  envelopeSearchModeMetadata?: SettingsMetadata | undefined
  envelopeStampingDefaultValue?: string | undefined
  envelopeStampingDefaultValueMetadata?: SettingsMetadata | undefined
  exitPrompt?: string | undefined
  exitPromptMetadata?: SettingsMetadata | undefined
  expressSend?: string | undefined
  expressSendAllowTabs?: string | undefined
  expressSendAllowTabsMetadata?: SettingsMetadata | undefined
  expressSendMetadata?: SettingsMetadata | undefined
  externalDocumentSources?: ExternalDocumentSources | undefined
  externalSignaturePadType?: string | undefined
  externalSignaturePadTypeMetadata?: SettingsMetadata | undefined
  faxOutEnabled?: string | undefined
  faxOutEnabledMetadata?: SettingsMetadata | undefined
  finishReminder?: string | undefined
  finishReminderMetadata?: SettingsMetadata | undefined
  guidedFormsHtmlAllowed?: string | undefined
  guidedFormsHtmlAllowedMetadata?: SettingsMetadata | undefined
  guidedFormsHtmlConversionPolicy?: string | undefined
  guidedFormsHtmlConversionPolicyMetadata?: SettingsMetadata | undefined
  hasRecipientConnectClaimedDomain?: string | undefined
  hideAccountAddressInCoC?: string | undefined
  hideAccountAddressInCoCMetadata?: SettingsMetadata | undefined
  hidePricing?: string | undefined
  hidePricingMetadata?: SettingsMetadata | undefined
  idCheckConfigurations?: IdCheckConfiguration[] | undefined
  idCheckExpire?: string | undefined
  idCheckExpireDays?: string | undefined
  idCheckExpireDaysMetadata?: SettingsMetadata | undefined
  idCheckExpireMetadata?: SettingsMetadata | undefined
  idCheckExpireMinutes?: string | undefined
  idCheckExpireMinutesMetadata?: SettingsMetadata | undefined
  idCheckRequired?: string | undefined
  idCheckRequiredMetadata?: SettingsMetadata | undefined
  identityVerification?: AccountIdentityVerificationWorkflow[] | undefined
  identityVerificationMetadata?: SettingsMetadata | undefined
  idfxKBAAuthenticationOverride?: string | undefined
  idfxKBAAuthenticationOverrideMetadata?: SettingsMetadata | undefined
  idfxPhoneAuthenticationOverride?: string | undefined
  idfxPhoneAuthenticationOverrideMetadata?: SettingsMetadata | undefined
  ignoreErrorIfAnchorTabNotFound?: string | undefined
  ignoreErrorIfAnchorTabNotFoundMetadataEnabled?: SettingsMetadata | undefined
  inPersonIDCheckQuestion?: string | undefined
  inPersonIDCheckQuestionMetadata?: SettingsMetadata | undefined
  inPersonSigningEnabled?: string | undefined
  inPersonSigningEnabledMetadata?: SettingsMetadata | undefined
  inSessionEnabled?: string | undefined
  inSessionEnabledMetadata?: SettingsMetadata | undefined
  inSessionSuppressEmails?: string | undefined
  inSessionSuppressEmailsMetadata?: SettingsMetadata | undefined
  linkedExternalPrimaryAccounts?: LinkedExternalPrimaryAccount[] | undefined
  maxNumberOfCustomStamps?: string | undefined
  maximumSigningGroups?: string | undefined
  maximumSigningGroupsMetadata?: SettingsMetadata | undefined
  maximumUsersPerSigningGroup?: string | undefined
  maximumUsersPerSigningGroupMetadata?: SettingsMetadata | undefined
  mergeMixedModeResults?: string | undefined
  mergeMixedModeResultsMetadata?: SettingsMetadata | undefined
  mobileSessionTimeout?: string | undefined
  mobileSessionTimeoutMetadata?: SettingsMetadata | undefined
  numberOfActiveCustomStamps?: string | undefined
  optInMobileSigningV02?: string | undefined
  optInMobileSigningV02Metadata?: SettingsMetadata | undefined
  optOutAutoNavTextAndTabColorUpdates?: string | undefined
  optOutAutoNavTextAndTabColorUpdatesMetadata?: SettingsMetadata | undefined
  optOutNewPlatformSeal?: string | undefined
  optOutNewPlatformSealPlatformMetadata?: SettingsMetadata | undefined
  pdfMaxChunkedUploadPartSize?: string | undefined
  pdfMaxChunkedUploadPartSizeMetadata?: SettingsMetadata | undefined
  pdfMaxChunkedUploadTotalSize?: string | undefined
  pdfMaxChunkedUploadTotalSizeMetadata?: SettingsMetadata | undefined
  pdfMaxIndividualUploadSize?: string | undefined
  pdfMaxIndividualUploadSizeMetadata?: SettingsMetadata | undefined
  phoneAuthRecipientMayProvidePhoneNumber?: string | undefined
  phoneAuthRecipientMayProvidePhoneNumberMetadata?: SettingsMetadata | undefined
  pkiSignDownloadedPDFDocs?: string | undefined
  pkiSignDownloadedPDFDocsMetadata?: SettingsMetadata | undefined
  readOnlyMode?: string | undefined
  readOnlyModeMetadata?: SettingsMetadata | undefined
  recipientSigningAutoNavigationControl?: string | undefined
  recipientSigningAutoNavigationControlMetadata?: SettingsMetadata | undefined
  recipientsCanSignOffline?: string | undefined
  recipientsCanSignOfflineMetadata?: SettingsMetadata | undefined
  require21CFRpt11Compliance?: string | undefined
  require21CFRpt11ComplianceMetadata?: SettingsMetadata | undefined
  requireDeclineReason?: string | undefined
  requireDeclineReasonMetadata?: SettingsMetadata | undefined
  requireExternalUserManagement?: string | undefined
  requireExternalUserManagementMetadata?: SettingsMetadata | undefined
  requireSignerCertificateType?: string | undefined
  requireSignerCertificateTypeMetadata?: SettingsMetadata | undefined
  rsaVeridAccountName?: string | undefined
  rsaVeridPassword?: string | undefined
  rsaVeridRuleset?: string | undefined
  rsaVeridUserId?: string | undefined
  sbsTransactionLevel?: string | undefined
  selfSignedRecipientEmailDocument?: string | undefined
  selfSignedRecipientEmailDocumentMetadata?: SettingsMetadata | undefined
  selfSignedRecipientEmailDocumentUserOverride?: string | undefined
  selfSignedRecipientEmailDocumentUserOverrideMetadata?: SettingsMetadata | undefined
  sendLockoutRecipientNotification?: string | undefined
  sendLockoutRecipientNotificationMetadata?: SettingsMetadata | undefined
  sendToCertifiedDeliveryEnabled?: string | undefined
  sendToCertifiedDeliveryEnabledMetadata?: SettingsMetadata | undefined
  senderCanSignInEachLocation?: string | undefined
  senderCanSignInEachLocationMetadata?: SettingsMetadata | undefined
  senderMustAuthenticateSigning?: string | undefined
  senderMustAuthenticateSigningMetadata?: SettingsMetadata | undefined
  sendingTagsFontColor?: string | undefined
  sendingTagsFontColorMetadata?: SettingsMetadata | undefined
  sendingTagsFontName?: string | undefined
  sendingTagsFontNameMetadata?: SettingsMetadata | undefined
  sendingTagsFontSize?: string | undefined
  sendingTagsFontSizeMetadata?: SettingsMetadata | undefined
  sessionTimeout?: string | undefined
  sessionTimeoutMetadata?: SettingsMetadata | undefined
  setRecipEmailLang?: string | undefined
  setRecipEmailLangMetadata?: SettingsMetadata | undefined
  setRecipSignLang?: string | undefined
  setRecipSignLangMetadata?: SettingsMetadata | undefined
  sharedTemplateFolders?: string | undefined
  sharedTemplateFoldersMetadata?: SettingsMetadata | undefined
  showCompleteDialogInEmbeddedSession?: string | undefined
  showCompleteDialogInEmbeddedSessionMetadata?: SettingsMetadata | undefined
  showConditionalRoutingOnSend?: string | undefined
  showConditionalRoutingOnSendMetadata?: SettingsMetadata | undefined
  showInitialConditionalFields?: string | undefined
  showInitialConditionalFieldsMetadata?: SettingsMetadata | undefined
  showLocalizedWatermarks?: string | undefined
  showLocalizedWatermarksMetadata?: SettingsMetadata | undefined
  showMaskedFieldsWhenDownloadingDocumentAsSender?: string | undefined
  showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata?: SettingsMetadata | undefined
  showTutorials?: string | undefined
  showTutorialsMetadata?: SettingsMetadata | undefined
  signDateFormat?: string | undefined
  signDateFormatMetadata?: SettingsMetadata | undefined
  signDateTimeAccountLanguageOverride?: string | undefined
  signDateTimeAccountLanguageOverrideMetadata?: SettingsMetadata | undefined
  signDateTimeAccountTimezoneOverride?: string | undefined
  signDateTimeAccountTimezoneOverrideMetadata?: SettingsMetadata | undefined
  signTimeFormat?: string | undefined
  signTimeFormatMetadata?: SettingsMetadata | undefined
  signTimeShowAmPm?: string | undefined
  signTimeShowAmPmMetadata?: SettingsMetadata | undefined
  signatureProviders?: string[] | undefined
  signatureProvidersMetadata?: SettingsMetadata | undefined
  signerAttachCertificateToEnvelopePDF?: string | undefined
  signerAttachCertificateToEnvelopePDFMetadata?: SettingsMetadata | undefined
  signerAttachConcat?: string | undefined
  signerAttachConcatMetadata?: SettingsMetadata | undefined
  signerCanCreateAccount?: string | undefined
  signerCanCreateAccountMetadata?: SettingsMetadata | undefined
  signerCanSignOnMobile?: string | undefined
  signerCanSignOnMobileMetadata?: SettingsMetadata | undefined
  signerInSessionUseEnvelopeCompleteEmail?: string | undefined
  signerInSessionUseEnvelopeCompleteEmailMetadata?: SettingsMetadata | undefined
  signerLoginRequirements?: string | undefined
  signerLoginRequirementsMetadata?: SettingsMetadata | undefined
  signerMustHaveAccount?: string | undefined
  signerMustHaveAccountMetadata?: SettingsMetadata | undefined
  signerMustLoginToSign?: string | undefined
  signerMustLoginToSignMetadata?: SettingsMetadata | undefined
  signerShowSecureFieldInitialValues?: string | undefined
  signerShowSecureFieldInitialValuesMetadata?: SettingsMetadata | undefined
  signingSessionTimeout?: string | undefined
  signingSessionTimeoutMetadata?: SettingsMetadata | undefined
  signingUiVersion?: string | undefined
  signingUiVersionMetadata?: SettingsMetadata | undefined
  simplifiedSendingEnabled?: string | undefined
  simplifiedSendingEnabledMetadata?: SettingsMetadata | undefined
  singleSignOnEnabled?: string | undefined
  singleSignOnEnabledMetadata?: SettingsMetadata | undefined
  skipAuthCompletedEnvelopes?: string | undefined
  skipAuthCompletedEnvelopesMetadata?: SettingsMetadata | undefined
  socialIdRecipAuth?: string | undefined
  socialIdRecipAuthMetadata?: SettingsMetadata | undefined
  specifyDocumentVisibility?: string | undefined
  specifyDocumentVisibilityMetadata?: SettingsMetadata | undefined
  startInAdvancedCorrect?: string | undefined
  startInAdvancedCorrectMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustAccept?: string | undefined
  supplementalDocumentsMustAcceptMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustRead?: string | undefined
  supplementalDocumentsMustReadMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustView?: string | undefined
  supplementalDocumentsMustViewMetadata?: SettingsMetadata | undefined
  suppressCertificateEnforcement?: string | undefined
  suppressCertificateEnforcementMetadata?: SettingsMetadata | undefined
  tabAccountSettings?: TabAccountSettings | undefined
  timezoneOffsetAPI?: string | undefined
  timezoneOffsetAPIMetadata?: SettingsMetadata | undefined
  timezoneOffsetUI?: string | undefined
  timezoneOffsetUIMetadata?: SettingsMetadata | undefined
  universalSignatureOptIn?: string | undefined
  useAccountLevelEmail?: string | undefined
  useAccountLevelEmailMetadata?: SettingsMetadata | undefined
  useConsumerDisclosure?: string | undefined
  useConsumerDisclosureMetadata?: SettingsMetadata | undefined
  useConsumerDisclosureWithinAccount?: string | undefined
  useConsumerDisclosureWithinAccountMetadata?: SettingsMetadata | undefined
  useDerivedKeys?: string | undefined
  useDerivedKeysMetadata?: SettingsMetadata | undefined
  useDocuSignExpressSignerCertificate?: string | undefined
  useDocuSignExpressSignerCertificateMetadata?: SettingsMetadata | undefined
  useEnvelopeSearchMixedMode?: string | undefined
  useEnvelopeSearchMixedModeMetadata?: SettingsMetadata | undefined
  useMultiAppGroupsData?: string | undefined
  useMultiAppGroupsDataMetadata?: SettingsMetadata | undefined
  useNewBlobForPdf?: string | undefined
  useNewBlobForPdfMetadata?: SettingsMetadata | undefined
  useNewEnvelopeSearch?: string | undefined
  useNewEnvelopeSearchMetadata?: SettingsMetadata | undefined
  useSAFESignerCertificates?: string | undefined
  useSAFESignerCertificatesMetadata?: SettingsMetadata | undefined
  useSignatureProviderPlatform?: string | undefined
  useSignatureProviderPlatformMetadata?: SettingsMetadata | undefined
  useSmartContractsV1?: string | undefined
  usesAPI?: string | undefined
  usesAPIMetadata?: SettingsMetadata | undefined
  validationsAllowed?: string | undefined
  validationsAllowedMetadata?: SettingsMetadata | undefined
  validationsBrand?: string | undefined
  validationsBrandMetadata?: SettingsMetadata | undefined
  validationsCadence?: string | undefined
  validationsCadenceMetadata?: SettingsMetadata | undefined
  validationsEnabled?: string | undefined
  validationsEnabledMetadata?: SettingsMetadata | undefined
  validationsReport?: string | undefined
  validationsReportMetadata?: SettingsMetadata | undefined
  waterMarkEnabled?: string | undefined
  waterMarkEnabledMetadata?: SettingsMetadata | undefined
  writeReminderToEnvelopeHistory?: string | undefined
  writeReminderToEnvelopeHistoryMetadata?: SettingsMetadata | undefined
  wurflMinAllowableScreenSize?: string | undefined
  wurflMinAllowableScreenSizeMetadata?: SettingsMetadata | undefined
}
type Province = { isoCode?: string | undefined; name?: string | undefined }
type Country = {
  isoCode?: string | undefined
  name?: string | undefined
  provinceValidated?: string | undefined
  provinces?: Province[] | undefined
}
type AccountAddress = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  phone?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  supportedCountries?: Country[] | undefined
}
type CreditCardInformation = {
  address?: AddressInformation | undefined
  cardLastDigits?: string | undefined
  cardNumber?: string | undefined
  cardType?: string | undefined
  cvNumber?: string | undefined
  expirationMonth?: string | undefined
  expirationYear?: string | undefined
  nameOnCard?: string | undefined
  tokenizedCard?: string | undefined
}
type DirectDebitProcessorInformation = {
  bankBranchCode?: string | undefined
  bankCheckDigit?: string | undefined
  bankCode?: string | undefined
  bankName?: string | undefined
  bankTransferAccountName?: string | undefined
  bankTransferAccountNumber?: string | undefined
  bankTransferType?: string | undefined
  country?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  iBAN?: string | undefined
  lastName?: string | undefined
}
type ConnectUserObject = {
  configurationtype?: string | undefined
  connectId?: string | undefined
  enabled?: string | undefined
  hasAccess?: string | undefined
  senderSearchableItems?: string[] | undefined
}
type ForgottenPasswordInformation = {
  forgottenPasswordAnswer1?: string | undefined
  forgottenPasswordAnswer2?: string | undefined
  forgottenPasswordAnswer3?: string | undefined
  forgottenPasswordAnswer4?: string | undefined
  forgottenPasswordQuestion1?: string | undefined
  forgottenPasswordQuestion2?: string | undefined
  forgottenPasswordQuestion3?: string | undefined
  forgottenPasswordQuestion4?: string | undefined
}
type UserInfo = {
  accountId?: string | undefined
  accountName?: string | undefined
  activationAccessCode?: string | undefined
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  loginStatus?: string | undefined
  membershipId?: string | undefined
  sendActivationEmail?: string | undefined
  uri?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
  userStatus?: string | undefined
  userType?: string | undefined
}
type Group = {
  dsGroupId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  groupId?: string | undefined
  groupName?: string | undefined
  groupType?: string | undefined
  permissionProfileId?: string | undefined
  users?: UserInfo[] | undefined
  usersCount?: string | undefined
}
type UserAccountManagementGranularInformation = {
  canManageAccountSecuritySettings?: string | undefined
  canManageAccountSecuritySettingsMetadata?: SettingsMetadata | undefined
  canManageAccountSettings?: string | undefined
  canManageAccountSettingsMetadata?: SettingsMetadata | undefined
  canManageAdmins?: string | undefined
  canManageAdminsMetadata?: SettingsMetadata | undefined
  canManageConnect?: string | undefined
  canManageConnectMetadata?: SettingsMetadata | undefined
  canManageDocumentRetention?: string | undefined
  canManageDocumentRetentionMetadata?: SettingsMetadata | undefined
  canManageEnvelopeTransfer?: string | undefined
  canManageEnvelopeTransferMetadata?: SettingsMetadata | undefined
  canManageGroupsButNotUsers?: string | undefined
  canManageGroupsButNotUsersMetadata?: SettingsMetadata | undefined
  canManageJointAgreements?: string | undefined
  canManageJointAgreementsMetadata?: SettingsMetadata | undefined
  canManageReporting?: string | undefined
  canManageReportingMetadata?: SettingsMetadata | undefined
  canManageSharing?: string | undefined
  canManageSharingMetadata?: SettingsMetadata | undefined
  canManageSigningGroups?: string | undefined
  canManageSigningGroupsMetadata?: SettingsMetadata | undefined
  canManageStamps?: string | undefined
  canManageStampsMetadata?: SettingsMetadata | undefined
  canManageUsers?: string | undefined
  canManageUsersMetadata?: SettingsMetadata | undefined
  canViewUsers?: string | undefined
}
type LocalePolicy = {
  addressFormat?: string | undefined
  addressFormatMetadata?: SettingsMetadata | undefined
  allowRegion?: string | undefined
  calendarType?: string | undefined
  calendarTypeMetadata?: SettingsMetadata | undefined
  cultureName?: string | undefined
  cultureNameMetadata?: SettingsMetadata | undefined
  currencyCode?: string | undefined
  currencyCodeMetadata?: SettingsMetadata | undefined
  currencyNegativeFormat?: string | undefined
  currencyNegativeFormatMetadata?: SettingsMetadata | undefined
  currencyPositiveFormat?: string | undefined
  currencyPositiveFormatMetadata?: SettingsMetadata | undefined
  customDateFormat?: string | undefined
  customSignDateFormat?: string | undefined
  customSignTimeFormat?: string | undefined
  customTimeFormat?: string | undefined
  dateFormat?: string | undefined
  dateFormatMetadata?: SettingsMetadata | undefined
  effectiveAddressFormat?: string | undefined
  effectiveCalendarType?: string | undefined
  effectiveCurrencyCode?: string | undefined
  effectiveCurrencyNegativeFormat?: string | undefined
  effectiveCurrencyPositiveFormat?: string | undefined
  effectiveCustomDateFormat?: string | undefined
  effectiveCustomTimeFormat?: string | undefined
  effectiveDateFormat?: string | undefined
  effectiveInitialFormat?: string | undefined
  effectiveNameFormat?: string | undefined
  effectiveTimeFormat?: string | undefined
  effectiveTimeZone?: string | undefined
  initialFormat?: string | undefined
  initialFormatMetadata?: SettingsMetadata | undefined
  nameFormat?: string | undefined
  nameFormatMetadata?: SettingsMetadata | undefined
  signDateFormat?: string | undefined
  signDateFormatMetadata?: SettingsMetadata | undefined
  signTimeFormat?: string | undefined
  signTimeFormatMetadata?: SettingsMetadata | undefined
  timeFormat?: string | undefined
  timeFormatMetadata?: SettingsMetadata | undefined
  timeZone?: string | undefined
  timeZoneMetadata?: SettingsMetadata | undefined
}
type SealIdentifier = { sealDisplayName?: string | undefined; sealName?: string | undefined }
type SenderEmailNotifications = {
  changedSigner?: string | undefined
  clickwrapResponsesLimitNotificationEmail?: string | undefined
  commentsOnlyPrivateAndMention?: string | undefined
  commentsReceiveAll?: string | undefined
  deliveryFailed?: string | undefined
  envelopeComplete?: string | undefined
  offlineSigningFailed?: string | undefined
  powerformResponsesLimitNotificationEmail?: string | undefined
  purgeDocuments?: string | undefined
  recipientViewed?: string | undefined
  senderEnvelopeDeclined?: string | undefined
  withdrawnConsent?: string | undefined
}
type SignerEmailNotifications = {
  agentNotification?: string | undefined
  carbonCopyNotification?: string | undefined
  certifiedDeliveryNotification?: string | undefined
  commentsOnlyPrivateAndMention?: string | undefined
  commentsReceiveAll?: string | undefined
  documentMarkupActivation?: string | undefined
  envelopeActivation?: string | undefined
  envelopeComplete?: string | undefined
  envelopeCorrected?: string | undefined
  envelopeDeclined?: string | undefined
  envelopeVoided?: string | undefined
  faxReceived?: string | undefined
  offlineSigningFailed?: string | undefined
  purgeDocuments?: string | undefined
  reassignedSigner?: string | undefined
  whenSigningGroupMember?: string | undefined
}
type UserSettingsInformation = {
  accountManagementGranular?: UserAccountManagementGranularInformation | undefined
  adminOnly?: string | undefined
  adminOnlyMetadata?: SettingsMetadata | undefined
  allowAutoTagging?: string | undefined
  allowEnvelopeTransferTo?: string | undefined
  allowEnvelopeTransferToMetadata?: SettingsMetadata | undefined
  allowEsealRecipients?: string | undefined
  allowEsealRecipientsMetadata?: SettingsMetadata | undefined
  allowPowerFormsAdminToAccessAllPowerFormEnvelope?: string | undefined
  allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata?: SettingsMetadata | undefined
  allowRecipientLanguageSelection?: string | undefined
  allowRecipientLanguageSelectionMetadata?: SettingsMetadata | undefined
  allowSendOnBehalfOf?: string | undefined
  allowSendOnBehalfOfMetadata?: SettingsMetadata | undefined
  allowSupplementalDocuments?: string | undefined
  allowSupplementalDocumentsMetadata?: SettingsMetadata | undefined
  anchorTagVersionedPlacementEnabled?: string | undefined
  apiAccountWideAccess?: string | undefined
  apiAccountWideAccessMetadata?: SettingsMetadata | undefined
  apiCanExportAC?: string | undefined
  apiCanExportACMetadata?: SettingsMetadata | undefined
  bulkSend?: string | undefined
  bulkSendMetadata?: SettingsMetadata | undefined
  canChargeAccount?: string | undefined
  canChargeAccountMetadata?: SettingsMetadata | undefined
  canEditSharedAddressbook?: string | undefined
  canEditSharedAddressbookMetadata?: SettingsMetadata | undefined
  canLockEnvelopes?: string | undefined
  canLockEnvelopesMetadata?: SettingsMetadata | undefined
  canManageAccount?: string | undefined
  canManageAccountMetadata?: SettingsMetadata | undefined
  canManageDistributor?: string | undefined
  canManageDistributorMetadata?: SettingsMetadata | undefined
  canManageTemplates?: string | undefined
  canManageTemplatesMetadata?: SettingsMetadata | undefined
  canSendAPIRequests?: string | undefined
  canSendAPIRequestsMetadata?: SettingsMetadata | undefined
  canSendEnvelope?: string | undefined
  canSendEnvelopeMetadata?: SettingsMetadata | undefined
  canSendEnvelopesViaSMS?: string | undefined
  canSendEnvelopesViaSMSMetadata?: SettingsMetadata | undefined
  canSignEnvelope?: string | undefined
  canSignEnvelopeMetadata?: SettingsMetadata | undefined
  canUseScratchpad?: string | undefined
  canUseScratchpadMetadata?: SettingsMetadata | undefined
  canUseSmartContracts?: string | undefined
  canUseSmartContractsMetadata?: SettingsMetadata | undefined
  disableDocumentUpload?: string | undefined
  disableDocumentUploadMetadata?: SettingsMetadata | undefined
  disableOtherActions?: string | undefined
  disableOtherActionsMetadata?: SettingsMetadata | undefined
  enableDSPro?: string | undefined
  enableDSProMetadata?: SettingsMetadata | undefined
  enableKeyTermsSuggestionsByDocumentType?: string | undefined
  enableKeyTermsSuggestionsByDocumentTypeMetadata?: SettingsMetadata | undefined
  enableSequentialSigningAPI?: string | undefined
  enableSequentialSigningAPIMetadata?: SettingsMetadata | undefined
  enableSequentialSigningUI?: string | undefined
  enableSequentialSigningUIMetadata?: SettingsMetadata | undefined
  enableSignOnPaperOverride?: string | undefined
  enableSignOnPaperOverrideMetadata?: SettingsMetadata | undefined
  enableSignerAttachments?: string | undefined
  enableSignerAttachmentsMetadata?: SettingsMetadata | undefined
  enableTransactionPoint?: string | undefined
  enableTransactionPointMetadata?: SettingsMetadata | undefined
  enableVaulting?: string | undefined
  enableVaultingMetadata?: SettingsMetadata | undefined
  expressSendOnly?: string | undefined
  locale?: string | undefined
  localeMetadata?: SettingsMetadata | undefined
  localePolicy?: LocalePolicy | undefined
  manageClickwrapsMode?: string | undefined
  manageClickwrapsModeMetadata?: SettingsMetadata | undefined
  modifiedBy?: string | undefined
  modifiedByMetadata?: SettingsMetadata | undefined
  modifiedDate?: string | undefined
  modifiedDateMetadata?: SettingsMetadata | undefined
  modifiedPage?: string | undefined
  modifiedPageMetadata?: SettingsMetadata | undefined
  newSendUI?: string | undefined
  newSendUIMetadata?: SettingsMetadata | undefined
  powerFormMode?: string | undefined
  powerFormModeMetadata?: SettingsMetadata | undefined
  recipientViewedNotification?: string | undefined
  recipientViewedNotificationMetadata?: SettingsMetadata | undefined
  sealIdentifiers?: SealIdentifier[] | undefined
  selfSignedRecipientEmailDocument?: string | undefined
  selfSignedRecipientEmailDocumentMetadata?: SettingsMetadata | undefined
  senderEmailNotifications?: SenderEmailNotifications | undefined
  signerEmailNotifications?: SignerEmailNotifications | undefined
  supplementalDocumentIncludeInDownload?: string | undefined
  supplementalDocumentsMustAccept?: string | undefined
  supplementalDocumentsMustAcceptMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustRead?: string | undefined
  supplementalDocumentsMustReadMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustView?: string | undefined
  supplementalDocumentsMustViewMetadata?: SettingsMetadata | undefined
  templateActiveCreation?: string | undefined
  templateActiveCreationMetadata?: SettingsMetadata | undefined
  templateApplyNotify?: string | undefined
  templateApplyNotifyMetadata?: SettingsMetadata | undefined
  templateAutoMatching?: string | undefined
  templateAutoMatchingMetadata?: SettingsMetadata | undefined
  templateMatchingSensitivity?: string | undefined
  templateMatchingSensitivityMetadata?: SettingsMetadata | undefined
  templatePageLevelMatching?: string | undefined
  templatePageLevelMatchingMetadata?: SettingsMetadata | undefined
  timezoneDST?: string | undefined
  timezoneDSTMetadata?: SettingsMetadata | undefined
  timezoneMask?: string | undefined
  timezoneMaskMetadata?: SettingsMetadata | undefined
  timezoneOffset?: string | undefined
  timezoneOffsetMetadata?: SettingsMetadata | undefined
  timezoneSendingPref?: string | undefined
  timezoneSendingPrefMetadata?: SettingsMetadata | undefined
  timezoneSigningPref?: string | undefined
  timezoneSigningPrefMetadata?: SettingsMetadata | undefined
  transactionPointSiteNameURL?: string | undefined
  transactionPointSiteNameURLMetadata?: SettingsMetadata | undefined
  transactionPointUserName?: string | undefined
  transactionPointUserNameMetadata?: SettingsMetadata | undefined
  vaultingMode?: string | undefined
  vaultingModeMetadata?: SettingsMetadata | undefined
  webForms?: string | undefined
  webFormsMetadata?: SettingsMetadata | undefined
}
type UserInformation = {
  activationAccessCode?: string | undefined
  company?: string | undefined
  connectConfigurations?: ConnectUserObject[] | undefined
  countryCode?: string | undefined
  createdDateTime?: string | undefined
  customSettings?: NameValue[] | undefined
  defaultAccountId?: string | undefined
  email?: string | undefined
  enableConnectForUser?: string | undefined
  errorDetails?: ErrorDetails | undefined
  firstName?: string | undefined
  forgottenPasswordInfo?: ForgottenPasswordInformation | undefined
  groupList?: Group[] | undefined
  hasRemoteNotary?: boolean | undefined
  homeAddress?: AddressInformation | undefined
  initialsImageUri?: string | undefined
  isAdmin?: string | undefined
  isAlternateAdmin?: string | undefined
  isNAREnabled?: string | undefined
  jobTitle?: string | undefined
  lastLogin?: string | undefined
  lastName?: string | undefined
  loginStatus?: string | undefined
  middleName?: string | undefined
  password?: string | undefined
  passwordExpiration?: string | undefined
  permissionProfileId?: string | undefined
  permissionProfileName?: string | undefined
  profileImageUri?: string | undefined
  sendActivationEmail?: string | undefined
  sendActivationOnInvalidLogin?: string | undefined
  signatureImageUri?: string | undefined
  subscribe?: string | undefined
  suffixName?: string | undefined
  title?: string | undefined
  uri?: string | undefined
  userAddedToAccountDateTime?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
  userProfileLastModifiedDate?: string | undefined
  userSettings?: UserSettingsInformation | undefined
  userStatus?: string | undefined
  userType?: string | undefined
  workAddress?: AddressInformation | undefined
}
type PaymentProcessorInformation = {
  address?: AddressInformation | undefined
  billingAgreementId?: string | undefined
  email?: string | undefined
}
type AddOn = {
  active?: string | undefined
  addOnId?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type CurrencyFeatureSetPrice = {
  currencyCode?: string | undefined
  currencySymbol?: string | undefined
  envelopeFee?: string | undefined
  fixedFee?: string | undefined
  seatFee?: string | undefined
}
type FeatureSet = {
  currencyFeatureSetPrices?: CurrencyFeatureSetPrice[] | undefined
  envelopeFee?: string | undefined
  featureSetId?: string | undefined
  fixedFee?: string | undefined
  is21CFRPart11?: string | undefined
  isActive?: string | undefined
  isEnabled?: string | undefined
  name?: string | undefined
  seatFee?: string | undefined
}
type RecipientDomain = {
  active?: string | undefined
  domainCode?: string | undefined
  domainName?: string | undefined
  recipientDomainId?: string | undefined
}
type PlanInformation = {
  addOns?: AddOn[] | undefined
  currencyCode?: string | undefined
  freeTrialDaysOverride?: string | undefined
  planFeatureSets?: FeatureSet[] | undefined
  planId?: string | undefined
  recipientDomains?: RecipientDomain[] | undefined
}
type ReferralInformation = {
  advertisementId?: string | undefined
  enableSupport?: string | undefined
  externalOrgId?: string | undefined
  groupMemberId?: string | undefined
  idType?: string | undefined
  includedSeats?: string | undefined
  industry?: string | undefined
  planStartMonth?: string | undefined
  promoCode?: string | undefined
  publisherId?: string | undefined
  referralCode?: string | undefined
  referrerName?: string | undefined
  saleDiscountAmount?: string | undefined
  saleDiscountFixedAmount?: string | undefined
  saleDiscountPercent?: string | undefined
  saleDiscountPeriods?: string | undefined
  saleDiscountSeatPriceOverride?: string | undefined
  shopperId?: string | undefined
}
type SocialAccountInformation = {
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  provider?: string | undefined
  socialId?: string | undefined
  userName?: string | undefined
}
type NewAccountDefinition = {
  accountName?: string | undefined
  accountSettings?: AccountSettingsInformation | undefined
  addressInformation?: AccountAddress | undefined
  creditCardInformation?: CreditCardInformation | undefined
  directDebitProcessorInformation?: DirectDebitProcessorInformation | undefined
  distributorCode?: string | undefined
  distributorPassword?: string | undefined
  enablePreAuth?: string | undefined
  envelopePartitionId?: string | undefined
  initialUser?: UserInformation | undefined
  paymentMethod?: string | undefined
  paymentProcessor?: string | undefined
  paymentProcessorInformation?: PaymentProcessorInformation | undefined
  planInformation?: PlanInformation | undefined
  processPayment?: string | undefined
  referralInformation?: ReferralInformation | undefined
  socialAccountInformation?: SocialAccountInformation | undefined
  taxExemptId?: string | undefined
}
type BillingInvoiceItem = {
  chargeAmount?: string | undefined
  chargeName?: string | undefined
  invoiceItemId?: string | undefined
  quantity?: string | undefined
  taxAmount?: string | undefined
  taxExemptAmount?: string | undefined
  unitPrice?: string | undefined
}
type BillingInvoice = {
  amount?: string | undefined
  balance?: string | undefined
  dueDate?: string | undefined
  invoiceId?: string | undefined
  invoiceItems?: BillingInvoiceItem[] | undefined
  invoiceNumber?: string | undefined
  invoiceUri?: string | undefined
  nonTaxableAmount?: string | undefined
  pdfAvailable?: string | undefined
  taxableAmount?: string | undefined
}
type BillingPlanPreview = {
  currencyCode?: string | undefined
  invoice?: BillingInvoice | undefined
  isProrated?: string | undefined
  subtotalAmount?: string | undefined
  taxAmount?: string | undefined
  totalAmount?: string | undefined
}
type NewAccountSummary = {
  accountId?: string | undefined
  accountIdGuid?: string | undefined
  accountName?: string | undefined
  apiPassword?: string | undefined
  baseUrl?: string | undefined
  billingPlanPreview?: BillingPlanPreview | undefined
  userId?: string | undefined
}
type ProvisioningInformation = {
  defaultConnectionId?: string | undefined
  defaultPlanId?: string | undefined
  distributorCode?: string | undefined
  distributorPassword?: string | undefined
  passwordRuleText?: string | undefined
  planPromotionText?: string | undefined
  purchaseOrderOrPromAllowed?: string | undefined
}
type BrandEmailContent = {
  content?: string | undefined
  emailContentType?: string | undefined
  emailToLink?: string | undefined
  linkText?: string | undefined
}
type BrandLink = {
  linkText?: string | undefined
  linkType?: string | undefined
  showLink?: string | undefined
  urlOrMailTo?: string | undefined
}
type BrandLogos = {
  email?: string | undefined
  primary?: string | undefined
  secondary?: string | undefined
}
type BrandResourceUrls = {
  email?: string | undefined
  sending?: string | undefined
  signing?: string | undefined
  signingCaptive?: string | undefined
}
type Brand = {
  brandCompany?: string | undefined
  brandId?: string | undefined
  brandLanguages?: string[] | undefined
  brandName?: string | undefined
  colors?: NameValue[] | undefined
  defaultBrandLanguage?: string | undefined
  emailContent?: BrandEmailContent[] | undefined
  errorDetails?: ErrorDetails | undefined
  isOverridingCompanyName?: boolean | undefined
  isSendingDefault?: boolean | undefined
  isSigningDefault?: boolean | undefined
  landingPages?: NameValue[] | undefined
  links?: BrandLink[] | undefined
  logos?: BrandLogos | undefined
  resources?: BrandResourceUrls | undefined
}
type AccountBrands = {
  brands?: Brand[] | undefined
  recipientBrandIdDefault?: string | undefined
  senderBrandIdDefault?: string | undefined
}
type AccountInformation = {
  accountIdGuid?: string | undefined
  accountName?: string | undefined
  accountSettings?: AccountSettingsInformation | undefined
  allowTransactionRooms?: string | undefined
  billingPeriodDaysRemaining?: string | undefined
  billingPeriodEndDate?: string | undefined
  billingPeriodEnvelopesAllowed?: string | undefined
  billingPeriodEnvelopesSent?: string | undefined
  billingPeriodStartDate?: string | undefined
  billingProfile?: string | undefined
  brands?: AccountBrands | undefined
  canUpgrade?: string | undefined
  connectPermission?: string | undefined
  createdDate?: string | undefined
  currencyCode?: string | undefined
  currentPlanId?: string | undefined
  displayApplianceStartUrl?: string | undefined
  displayApplianceUrl?: string | undefined
  distributorCode?: string | undefined
  docuSignLandingUrl?: string | undefined
  dssValues?: { [x: string]: string } | undefined
  envelopeSendingBlocked?: string | undefined
  envelopeUnitPrice?: string | undefined
  externalAccountId?: string | undefined
  forgottenPasswordQuestionsCount?: string | undefined
  isDowngrade?: string | undefined
  paymentMethod?: string | undefined
  planClassification?: string | undefined
  planEndDate?: string | undefined
  planName?: string | undefined
  planStartDate?: string | undefined
  recipientDomains?: RecipientDomain[] | undefined
  seatsAllowed?: string | undefined
  seatsInUse?: string | undefined
  status21CFRPart11?: string | undefined
  suspensionDate?: string | undefined
  suspensionStatus?: string | undefined
  useDisplayAppliance?: boolean | undefined
}
type BillingDiscount = {
  beginQuantity?: string | undefined
  discount?: string | undefined
  endQuantity?: string | undefined
}
type BillingPrice = {
  beginQuantity?: string | undefined
  endQuantity?: string | undefined
  unitPrice?: string | undefined
}
type BillingCharge = {
  allowedQuantity?: string | undefined
  blocked?: string | undefined
  chargeName?: string | undefined
  chargeType?: string | undefined
  chargeUnitOfMeasure?: string | undefined
  discounts?: BillingDiscount[] | undefined
  firstEffectiveDate?: string | undefined
  includedQuantity?: string | undefined
  incrementalQuantity?: string | undefined
  lastEffectiveDate?: string | undefined
  prices?: BillingPrice[] | undefined
  unitPrice?: string | undefined
  usedQuantity?: string | undefined
}
type BillingChargeResponse = { billingChargeItems?: BillingCharge[] | undefined }
type BillingInvoicesResponse = {
  billingInvoices?: BillingInvoice[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
}
type BillingInvoicesSummary = {
  accountBalance?: string | undefined
  billingInvoices?: BillingInvoice[] | undefined
  currencyCode?: string | undefined
  pastDueBalance?: string | undefined
  paymentAllowed?: string | undefined
}
type BillingPaymentItem = {
  amount?: string | undefined
  description?: string | undefined
  paymentDate?: string | undefined
  paymentId?: string | undefined
  paymentNumber?: string | undefined
}
type BillingPaymentsResponse = {
  billingPayments?: BillingPaymentItem[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
}
type BillingPaymentRequest = { paymentAmount?: string | undefined }
type BillingPayment = {
  amount?: string | undefined
  invoiceId?: string | undefined
  paymentId?: string | undefined
}
type BillingPaymentResponse = { billingPayments?: BillingPayment[] | undefined }
type DowngradePlanUpdateResponse = {
  accountPaymentMethod?: string | undefined
  discountApplied?: string | undefined
  downgradeEffectiveDate?: string | undefined
  downgradePaymentCycle?: string | undefined
  downgradePlanId?: string | undefined
  downgradePlanName?: string | undefined
  downgradeRequestStatus?: string | undefined
  message?: string | undefined
  productId?: string | undefined
  promoCode?: string | undefined
  saleDiscount?: string | undefined
  saleDiscountPeriods?: string | undefined
  saleDiscountType?: string | undefined
}
type SeatDiscount = {
  beginSeatCount?: string | undefined
  discountPercent?: string | undefined
  endSeatCount?: string | undefined
}
type AccountBillingPlan = {
  addOns?: AddOn[] | undefined
  appStoreReceiptExpirationDate?: string | undefined
  appStoreReceiptPurchaseDate?: string | undefined
  canCancelRenewal?: string | undefined
  canUpgrade?: string | undefined
  currencyCode?: string | undefined
  downgradePlanInformation?: DowngradePlanUpdateResponse | undefined
  enableSupport?: string | undefined
  includedSeats?: string | undefined
  incrementalSeats?: string | undefined
  isDowngrade?: string | undefined
  notificationType?: string | undefined
  otherDiscountPercent?: string | undefined
  paymentCycle?: string | undefined
  paymentMethod?: string | undefined
  perSeatPrice?: string | undefined
  planClassification?: string | undefined
  planFeatureSets?: FeatureSet[] | undefined
  planId?: string | undefined
  planName?: string | undefined
  planStartDate?: string | undefined
  productId?: string | undefined
  renewalDate?: string | undefined
  renewalStatus?: string | undefined
  seatDiscounts?: SeatDiscount[] | undefined
  subscriptionStartDate?: string | undefined
  supportIncidentFee?: string | undefined
  supportPlanFee?: string | undefined
  taxExemptId?: string | undefined
}
type DowngradeRequestInformation = {
  downgradeRequestCreation?: string | undefined
  downgradeRequestProductId?: string | undefined
  downgradeRequestStatus?: string | undefined
}
type BillingEntityInformationResponse = {
  billingProfile?: string | undefined
  entityName?: string | undefined
  externalEntityId?: string | undefined
  isExternallyBilled?: string | undefined
}
type AppStoreProduct = { marketPlace?: string | undefined; productId?: string | undefined }
type CreditCardTypes = { cardTypes?: string[] | undefined }
type CurrencyPlanPrice = {
  currencyCode?: string | undefined
  currencySymbol?: string | undefined
  perSeatPrice?: string | undefined
  supportIncidentFee?: string | undefined
  supportPlanFee?: string | undefined
  supportedCardTypes?: CreditCardTypes | undefined
}
type BillingPlan = {
  appStoreProducts?: AppStoreProduct[] | undefined
  currencyPlanPrices?: CurrencyPlanPrice[] | undefined
  enableSupport?: string | undefined
  includedSeats?: string | undefined
  otherDiscountPercent?: string | undefined
  paymentCycle?: string | undefined
  paymentMethod?: string | undefined
  perSeatPrice?: string | undefined
  planClassification?: string | undefined
  planFeatureSets?: FeatureSet[] | undefined
  planId?: string | undefined
  planName?: string | undefined
  seatDiscounts?: SeatDiscount[] | undefined
  supportIncidentFee?: string | undefined
  supportPlanFee?: string | undefined
}
type AccountBillingPlanResponse = {
  billingAddress?: AccountAddress | undefined
  billingAddressIsCreditCardAddress?: string | undefined
  billingPlan?: AccountBillingPlan | undefined
  creditCardInformation?: CreditCardInformation | undefined
  directDebitProcessorInformation?: DirectDebitProcessorInformation | undefined
  downgradePlanInformation?: DowngradePlanUpdateResponse | undefined
  downgradeRequestInformation?: DowngradeRequestInformation | undefined
  entityInformation?: BillingEntityInformationResponse | undefined
  paymentMethod?: string | undefined
  paymentProcessorInformation?: PaymentProcessorInformation | undefined
  referralInformation?: ReferralInformation | undefined
  successorPlans?: BillingPlan[] | undefined
  taxExemptId?: string | undefined
}
type AppStoreReceipt = {
  downgradeProductId?: string | undefined
  isDowngradeCancellation?: string | undefined
  productId?: string | undefined
  receiptData?: string | undefined
}
type BillingPlanInformation = {
  appStoreReceipt?: AppStoreReceipt | undefined
  billingAddress?: AccountAddress | undefined
  creditCardInformation?: CreditCardInformation | undefined
  directDebitProcessorInformation?: DirectDebitProcessorInformation | undefined
  downgradeReason?: string | undefined
  enablePreAuth?: string | undefined
  enableSupport?: string | undefined
  includedSeats?: string | undefined
  incrementalSeats?: string | undefined
  paymentMethod?: string | undefined
  paymentProcessor?: string | undefined
  paymentProcessorInformation?: PaymentProcessorInformation | undefined
  planInformation?: PlanInformation | undefined
  processPayment?: string | undefined
  referralInformation?: ReferralInformation | undefined
  renewalStatus?: string | undefined
  saleDiscountAmount?: string | undefined
  saleDiscountFixedAmount?: string | undefined
  saleDiscountPercent?: string | undefined
  saleDiscountPeriods?: string | undefined
  saleDiscountSeatPriceOverride?: string | undefined
  taxExemptId?: string | undefined
}
type BillingPlanUpdateResponse = {
  accountPaymentMethod?: string | undefined
  billingPlanPreview?: BillingPlanPreview | undefined
  currencyCode?: string | undefined
  includedSeats?: string | undefined
  paymentCycle?: string | undefined
  paymentMethod?: string | undefined
  planId?: string | undefined
  planName?: string | undefined
}
type DowngradRequestBillingInfoResponse = {
  downgradePlanInformation?: DowngradePlanUpdateResponse | undefined
  paymentMethod?: string | undefined
}
type DowngradeBillingPlanInformation = {
  downgradeEventType?: string | undefined
  planInformation?: PlanInformation | undefined
  promoCode?: string | undefined
  saleDiscount?: string | undefined
  saleDiscountPeriods?: string | undefined
  saleDiscountType?: string | undefined
}
type PurchasedEnvelopesInformation = {
  amount?: string | undefined
  appName?: string | undefined
  currencyCode?: string | undefined
  platform?: string | undefined
  productId?: string | undefined
  quantity?: string | undefined
  receiptData?: string | undefined
  storeName?: string | undefined
  transactionId?: string | undefined
}
type BrandRequest = { brandId?: string | undefined }
type BrandsRequest = { brands?: BrandRequest[] | undefined }
type BrandResources = {
  createdByUserInfo?: UserInfo | undefined
  createdDate?: string | undefined
  dataNotSavedNotInMaster?: string[] | undefined
  modifiedByUserInfo?: UserInfo | undefined
  modifiedDate?: string | undefined
  modifiedTemplates?: string[] | undefined
  resourcesContentType?: string | undefined
  resourcesContentUri?: string | undefined
}
type BrandResourcesList = { resourcesContentTypes?: BrandResources[] | undefined }
type BulkSendBatchSummary = {
  batchId?: string | undefined
  batchName?: string | undefined
  batchSize?: string | undefined
  batchUri?: string | undefined
  failed?: string | undefined
  queued?: string | undefined
  sent?: string | undefined
  submittedDate?: string | undefined
}
type BulkSendBatchSummaries = {
  batchSizeLimit?: string | undefined
  bulkBatchSummaries?: BulkSendBatchSummary[] | undefined
  bulkProcessQueueLimit?: string | undefined
  bulkProcessTotalQueued?: string | undefined
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  queueLimit?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalQueued?: string | undefined
  totalSetSize?: string | undefined
}
type BulkSendErrorStatus = {
  created?: string | undefined
  envelopeId?: string | undefined
  errorMessage?: string | undefined
  recipientEmails?: string[] | undefined
}
type BulkSendEnvelopesInfo = {
  authoritativeCopy?: string | undefined
  completed?: string | undefined
  correct?: string | undefined
  created?: string | undefined
  declined?: string | undefined
  deleted?: string | undefined
  delivered?: string | undefined
  digitalSignaturesPending?: string | undefined
  sent?: string | undefined
  signed?: string | undefined
  timedOut?: string | undefined
  transferCompleted?: string | undefined
  voided?: string | undefined
}
type BulkSendBatchStatus = {
  action?: string | undefined
  actionStatus?: string | undefined
  batchId?: string | undefined
  batchName?: string | undefined
  batchSize?: string | undefined
  bulkErrors?: BulkSendErrorStatus[] | undefined
  envelopeIdOrTemplateId?: string | undefined
  envelopesInfo?: BulkSendEnvelopesInfo | undefined
  envelopesUri?: string | undefined
  failed?: string | undefined
  mailingListId?: string | undefined
  mailingListName?: string | undefined
  ownerUserId?: string | undefined
  queued?: string | undefined
  resendsRemaining?: string | undefined
  senderUserId?: string | undefined
  sent?: string | undefined
  submittedDate?: string | undefined
}
type BulkSendBatchRequest = { batchName?: string | undefined }
type EnvelopeTransactionStatus = {
  envelopeId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  status?: string | undefined
  transactionId?: string | undefined
}
type ListCustomField = {
  configurationType?: string | undefined
  errorDetails?: ErrorDetails | undefined
  fieldId?: string | undefined
  listItems?: string[] | undefined
  name?: string | undefined
  required?: string | undefined
  show?: string | undefined
  value?: string | undefined
}
type TextCustomField = {
  configurationType?: string | undefined
  errorDetails?: ErrorDetails | undefined
  fieldId?: string | undefined
  name?: string | undefined
  required?: string | undefined
  show?: string | undefined
  value?: string | undefined
}
type AccountCustomFields = {
  listCustomFields?: ListCustomField[] | undefined
  textCustomFields?: TextCustomField[] | undefined
}
type BccEmailAddress = { bccEmailAddressId?: string | undefined; email?: string | undefined }
type EmailSettings = {
  bccEmailAddresses?: BccEmailAddress[] | undefined
  replyEmailAddressOverride?: string | undefined
  replyEmailNameOverride?: string | undefined
}
type Attachment = {
  accessControl?: string | undefined
  attachmentId?: string | undefined
  attachmentType?: string | undefined
  data?: string | undefined
  label?: string | undefined
  name?: string | undefined
  remoteUrl?: string | undefined
}
type EnvelopeCustomMetadata = { envelopeCustomMetadataDetails?: NameValue[] | undefined }
type PropertyMetadata = { options?: string[] | undefined; rights?: string | undefined }
type SignatureType = { isDefault?: string | undefined; type?: string | undefined }
type DocGenSyntaxError = {
  errorCode?: string | undefined
  message?: string | undefined
  tagIdentifier?: string | undefined
}
type DocGenFormField = {
  label?: string | undefined
  name?: string | undefined
  required?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type Page = {
  dpi?: string | undefined
  errorDetails?: ErrorDetails | undefined
  height?: string | undefined
  imageBytes?: string | undefined
  mimeType?: string | undefined
  pageId?: string | undefined
  sequence?: string | undefined
  width?: string | undefined
}
type EnvelopeDocument = {
  addedRecipientIds?: string[] | undefined
  attachmentTabId?: string | undefined
  authoritativeCopy?: string | undefined
  authoritativeCopyMetadata?: PropertyMetadata | undefined
  availableDocumentTypes?: SignatureType[] | undefined
  containsPdfFormFields?: string | undefined
  display?: string | undefined
  displayMetadata?: PropertyMetadata | undefined
  docGenDocumentStatus?: string | undefined
  docGenErrors?: DocGenSyntaxError[] | undefined
  docGenFormFields?: DocGenFormField[] | undefined
  documentBase64?: string | undefined
  documentFields?: NameValue[] | undefined
  documentId?: string | undefined
  documentIdGuid?: string | undefined
  errorDetails?: ErrorDetails | undefined
  includeInDownload?: string | undefined
  includeInDownloadMetadata?: PropertyMetadata | undefined
  isDocGenDocument?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  order?: string | undefined
  pages?: Page[] | undefined
  signerMustAcknowledge?: string | undefined
  signerMustAcknowledgeMetadata?: PropertyMetadata | undefined
  sizeBytes?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  type?: string | undefined
  uri?: string | undefined
}
type EnvelopeMetadata = {
  allowAdvancedCorrect?: string | undefined
  allowCorrect?: string | undefined
  enableSignWithNotary?: string | undefined
}
type Filter = {
  actionRequired?: string | undefined
  expires?: string | undefined
  folderIds?: string | undefined
  fromDateTime?: string | undefined
  isTemplate?: string | undefined
  order?: string | undefined
  orderBy?: string | undefined
  searchTarget?: string | undefined
  searchText?: string | undefined
  status?: string | undefined
  toDateTime?: string | undefined
}
type RecipientPhoneNumber = {
  countryCode?: string | undefined
  countryCodeMetadata?: PropertyMetadata | undefined
  number?: string | undefined
  numberMetadata?: PropertyMetadata | undefined
}
type RecipientAdditionalNotification = {
  phoneNumber?: RecipientPhoneNumber | undefined
  secondaryDeliveryMethod?: string | undefined
  secondaryDeliveryMethodMetadata?: PropertyMetadata | undefined
  secondaryDeliveryStatus?: string | undefined
}
type ConsentDetails = {
  consentKey?: string | undefined
  deliveryMethod?: string | undefined
  signerConsentStatus?: string | undefined
}
type DocumentVisibility = {
  documentId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  recipientId?: string | undefined
  rights?: string | undefined
  visible?: string | undefined
}
type RecipientEmailNotification = {
  emailBody?: string | undefined
  emailBodyMetadata?: PropertyMetadata | undefined
  emailSubject?: string | undefined
  emailSubjectMetadata?: PropertyMetadata | undefined
  supportedLanguage?: string | undefined
  supportedLanguageMetadata?: PropertyMetadata | undefined
}
type AddressInformationInput = {
  addressInformation?: AddressInformation | undefined
  displayLevelCode?: string | undefined
  receiveInResponse?: string | undefined
}
type DobInformationInput = {
  dateOfBirth?: string | undefined
  displayLevelCode?: string | undefined
  receiveInResponse?: string | undefined
}
type Ssn4InformationInput = {
  displayLevelCode?: string | undefined
  receiveInResponse?: string | undefined
  ssn4?: string | undefined
}
type Ssn9InformationInput = { displayLevelCode?: string | undefined; ssn9?: string | undefined }
type IdCheckInformationInput = {
  addressInformationInput?: AddressInformationInput | undefined
  dobInformationInput?: DobInformationInput | undefined
  ssn4InformationInput?: Ssn4InformationInput | undefined
  ssn9InformationInput?: Ssn9InformationInput | undefined
}
type RecipientIdentityPhoneNumber = {
  countryCode?: string | undefined
  countryCodeLock?: string | undefined
  countryCodeMetadata?: PropertyMetadata | undefined
  extension?: string | undefined
  extensionMetadata?: PropertyMetadata | undefined
  number?: string | undefined
  numberMetadata?: PropertyMetadata | undefined
}
type RecipientIdentityInputOption = {
  name?: string | undefined
  phoneNumberList?: RecipientIdentityPhoneNumber[] | undefined
  valueType?: string | undefined
}
type RecipientIdentityVerification = {
  inputOptions?: RecipientIdentityInputOption[] | undefined
  workflowId?: string | undefined
  workflowIdMetadata?: PropertyMetadata | undefined
  workflowLabel?: string | undefined
}
type RecipientPhoneAuthentication = {
  recipMayProvideNumber?: string | undefined
  recipMayProvideNumberMetadata?: PropertyMetadata | undefined
  recordVoicePrint?: string | undefined
  recordVoicePrintMetadata?: PropertyMetadata | undefined
  senderProvidedNumbers?: string[] | undefined
  senderProvidedNumbersMetadata?: PropertyMetadata | undefined
  validateRecipProvidedNumber?: string | undefined
  validateRecipProvidedNumberMetadata?: PropertyMetadata | undefined
}
type RecipientAttachment = {
  attachmentId?: string | undefined
  attachmentType?: string | undefined
  data?: string | undefined
  label?: string | undefined
  name?: string | undefined
  remoteUrl?: string | undefined
}
type EventResult = {
  eventTimestamp?: string | undefined
  failureDescription?: string | undefined
  status?: string | undefined
  vendorFailureStatusCode?: string | undefined
}
type AuthenticationStatus = {
  accessCodeResult?: EventResult | undefined
  ageVerifyResult?: EventResult | undefined
  anySocialIDResult?: EventResult | undefined
  facebookResult?: EventResult | undefined
  googleResult?: EventResult | undefined
  idLookupResult?: EventResult | undefined
  idQuestionsResult?: EventResult | undefined
  identityVerificationResult?: EventResult | undefined
  linkedinResult?: EventResult | undefined
  liveIDResult?: EventResult | undefined
  ofacResult?: EventResult | undefined
  openIDResult?: EventResult | undefined
  phoneAuthResult?: EventResult | undefined
  sTANPinResult?: EventResult | undefined
  salesforceResult?: EventResult | undefined
  signatureProviderResult?: EventResult | undefined
  smsAuthResult?: EventResult | undefined
  twitterResult?: EventResult | undefined
  yahooResult?: EventResult | undefined
}
type FeatureAvailableMetadata = {
  availabilty?: string | undefined
  featureName?: string | undefined
}
type RecipientSMSAuthentication = {
  senderProvidedNumbers?: string[] | undefined
  senderProvidedNumbersMetadata?: PropertyMetadata | undefined
}
type SocialAuthentication = { authentication?: string | undefined }
type Agent = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type RecipientProofFile = {
  hasIdentityAttempts?: string | undefined
  isInProofFile?: string | undefined
}
type LocalePolicyTab = {
  addressFormat?: string | undefined
  calendarType?: string | undefined
  cultureName?: string | undefined
  currencyCode?: string | undefined
  currencyNegativeFormat?: string | undefined
  currencyPositiveFormat?: string | undefined
  customDateFormat?: string | undefined
  customTimeFormat?: string | undefined
  dateFormat?: string | undefined
  initialFormat?: string | undefined
  nameFormat?: string | undefined
  timeFormat?: string | undefined
  timeZone?: string | undefined
  useLongCurrencyFormat?: string | undefined
}
type PathExtendedElement = {
  name?: string | undefined
  type?: string | undefined
  typeName?: string | undefined
}
type MergeField = {
  allowSenderToEdit?: string | undefined
  allowSenderToEditMetadata?: PropertyMetadata | undefined
  configurationType?: string | undefined
  configurationTypeMetadata?: PropertyMetadata | undefined
  path?: string | undefined
  pathExtended?: PathExtendedElement[] | undefined
  pathExtendedMetadata?: PropertyMetadata | undefined
  pathMetadata?: PropertyMetadata | undefined
  row?: string | undefined
  rowMetadata?: PropertyMetadata | undefined
  writeBack?: string | undefined
  writeBackMetadata?: PropertyMetadata | undefined
}
type SmartContractInformation = { code?: string | undefined; uri?: string | undefined }
type Approve = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  buttonText?: string | undefined
  buttonTextMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Checkbox = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  selected?: string | undefined
  selectedMetadata?: PropertyMetadata | undefined
  selectedOriginal?: string | undefined
  selectedOriginalMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Comment = {
  envelopeId?: string | undefined
  hmac?: string | undefined
  id?: string | undefined
  mentions?: string[] | undefined
  read?: boolean | undefined
  sentByEmail?: string | undefined
  sentByFullName?: string | undefined
  sentByImageId?: string | undefined
  sentByInitials?: string | undefined
  sentByRecipientId?: string | undefined
  sentByUserId?: string | undefined
  signingGroupId?: string | undefined
  signingGroupName?: string | undefined
  subject?: string | undefined
  tabId?: string | undefined
  text?: string | undefined
  threadId?: string | undefined
  threadOriginatorId?: string | undefined
  timeStampFormatted?: string | undefined
  timestamp?: string | undefined
  visibleTo?: string[] | undefined
}
type CommentThread = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  comments?: Comment[] | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  threadId?: string | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type CommissionCounty = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type CommissionExpiration = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type CommissionNumber = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type CommissionState = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Company = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Currency = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  maxNumericalValue?: string | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  minNumericalValue?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  numericalValue?: string | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type DateSigned = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Date = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Decline = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  buttonText?: string | undefined
  buttonTextMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  declineReason?: string | undefined
  declineReasonMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Draw = {
  allowSignerUpload?: string | undefined
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  useBackgroundAsCanvas?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type EmailAddress = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Email = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type EnvelopeId = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type FirstName = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type PaymentLineItem = {
  amountReference?: string | undefined
  description?: string | undefined
  itemCode?: string | undefined
  name?: string | undefined
}
type PaymentSignerValues = { paymentOption?: string | undefined }
type Money = {
  amountInBaseUnit?: string | undefined
  currency?: string | undefined
  displayAmount?: string | undefined
}
type PaymentDetails = {
  allowedPaymentMethods?: string[] | undefined
  chargeId?: string | undefined
  currencyCode?: string | undefined
  currencyCodeMetadata?: PropertyMetadata | undefined
  customMetadata?: string | undefined
  customMetadataRequired?: boolean | undefined
  customerId?: string | undefined
  gatewayAccountId?: string | undefined
  gatewayAccountIdMetadata?: PropertyMetadata | undefined
  gatewayDisplayName?: string | undefined
  gatewayName?: string | undefined
  lineItems?: PaymentLineItem[] | undefined
  paymentOption?: string | undefined
  paymentSourceId?: string | undefined
  signerValues?: PaymentSignerValues | undefined
  status?: string | undefined
  subGatewayName?: string | undefined
  total?: Money | undefined
}
type FormulaTab = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  formula?: string | undefined
  formulaMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  hidden?: string | undefined
  hiddenMetadata?: PropertyMetadata | undefined
  isPaymentAmountMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  paymentDetails?: PaymentDetails | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  roundDecimalPlaces?: string | undefined
  roundDecimalPlacesMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type FullName = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type InitialHere = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  handDrawRequired?: string | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  optional?: string | undefined
  optionalMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  scaleValue?: string | undefined
  scaleValueMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type LastName = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type ListItem = {
  selected?: string | undefined
  selectedMetadata?: PropertyMetadata | undefined
  text?: string | undefined
  textMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
}
type List = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  listItems?: ListItem[] | undefined
  listSelectedValue?: string | undefined
  listSelectedValueMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Notarize = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type NotarySeal = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  scaleValue?: string | undefined
  scaleValueMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Note = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Number = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  formula?: string | undefined
  formulaMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Numerical = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  maxNumericalValue?: string | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  minNumericalValue?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  numericalValue?: string | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationType?: string | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type PhoneNumber = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type GraphicsContext = {
  fillColor?: string | undefined
  lineColor?: string | undefined
  lineWeight?: string | undefined
}
type PolyLine = {
  x1?: string | undefined
  x2?: string | undefined
  y1?: string | undefined
  y2?: string | undefined
}
type PolyLineOverlay = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  graphicsContext?: GraphicsContext | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  overlayType?: string | undefined
  overlayTypeMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  polyLines?: PolyLine[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Radio = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  selected?: string | undefined
  selectedMetadata?: PropertyMetadata | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type RadioGroup = {
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  groupName?: string | undefined
  groupNameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  radios?: Radio[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  tooltipMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
}
type SenderCompany = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type SenderName = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Ssn = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type TabGroup = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  groupLabel?: string | undefined
  groupLabelMetadata?: PropertyMetadata | undefined
  groupRule?: string | undefined
  groupRuleMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  maximumAllowed?: string | undefined
  maximumAllowedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  minimumRequired?: string | undefined
  minimumRequiredMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabScope?: string | undefined
  tabScopeMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Text = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  formula?: string | undefined
  formulaMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Zip = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  requireAll?: string | undefined
  requireAllMetadata?: PropertyMetadata | undefined
  requireInitialOnSharedChange?: string | undefined
  requireInitialOnSharedChangeMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  senderRequired?: string | undefined
  senderRequiredMetadata?: PropertyMetadata | undefined
  shareToRecipients?: string | undefined
  shareToRecipientsMetadata?: PropertyMetadata | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  useDash4?: string | undefined
  useDash4Metadata?: PropertyMetadata | undefined
  validationMessage?: string | undefined
  validationMessageMetadata?: PropertyMetadata | undefined
  validationPattern?: string | undefined
  validationPatternMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type PrefillTabs = {
  checkboxTabs?: Checkbox[] | undefined
  dateTabs?: Date[] | undefined
  emailTabs?: Email[] | undefined
  numberTabs?: Number[] | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  senderCompanyTabs?: SenderCompany[] | undefined
  senderNameTabs?: SenderName[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  zipTabs?: Zip[] | undefined
}
type DateStampProperties = {
  dateAreaHeight?: string | undefined
  dateAreaWidth?: string | undefined
  dateAreaX?: string | undefined
  dateAreaY?: string | undefined
}
type Stamp = {
  adoptedDateTime?: string | undefined
  createdDateTime?: string | undefined
  customField?: string | undefined
  dateStampProperties?: DateStampProperties | undefined
  disallowUserResizeStamp?: string | undefined
  errorDetails?: ErrorDetails | undefined
  externalID?: string | undefined
  imageBase64?: string | undefined
  imageType?: string | undefined
  lastModifiedDateTime?: string | undefined
  phoneticName?: string | undefined
  signatureName?: string | undefined
  stampFormat?: string | undefined
  stampImageUri?: string | undefined
  stampSizeMM?: string | undefined
  status?: string | undefined
}
type SignHere = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  handDrawRequired?: string | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  isSealSignTab?: string | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  optional?: string | undefined
  optionalMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  scaleValue?: string | undefined
  scaleValueMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  stamp?: Stamp | undefined
  stampType?: string | undefined
  stampTypeMetadata?: PropertyMetadata | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type SignerAttachment = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  handDrawRequired?: string | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  optional?: string | undefined
  optionalMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  scaleValue?: string | undefined
  scaleValueMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type SmartSectionCollapsibleDisplaySettings = {
  arrowClosed?: string | undefined
  arrowColor?: string | undefined
  arrowLocation?: string | undefined
  arrowOpen?: string | undefined
  arrowSize?: string | undefined
  arrowStyle?: string | undefined
  containerStyle?: string | undefined
  labelStyle?: string | undefined
  onlyArrowIsClickable?: boolean | undefined
  outerLabelAndArrowStyle?: string | undefined
}
type SmartSectionDisplaySettings = {
  cellStyle?: string | undefined
  collapsibleSettings?: SmartSectionCollapsibleDisplaySettings | undefined
  display?: string | undefined
  displayLabel?: string | undefined
  displayOrder?: number | undefined
  displayPageNumber?: number | undefined
  hideLabelWhenOpened?: boolean | undefined
  inlineOuterStyle?: string | undefined
  labelWhenOpened?: string | undefined
  preLabel?: string | undefined
  scrollToTopWhenOpened?: boolean | undefined
  tableStyle?: string | undefined
}
type SmartSectionAnchorPosition = {
  pageNumber?: number | undefined
  xPosition?: number | undefined
  yPosition?: number | undefined
}
type SmartSection = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  caseSensitive?: boolean | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  displaySettings?: SmartSectionDisplaySettings | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  endAnchor?: string | undefined
  endPosition?: SmartSectionAnchorPosition | undefined
  errorDetails?: ErrorDetails | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  overlayType?: string | undefined
  overlayTypeMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  removeEndAnchor?: boolean | undefined
  removeStartAnchor?: boolean | undefined
  shared?: string | undefined
  sharedMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  startAnchor?: string | undefined
  startPosition?: SmartSectionAnchorPosition | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type Title = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  concealValueOnDocument?: string | undefined
  concealValueOnDocumentMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  disableAutoSize?: string | undefined
  disableAutoSizeMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  lockedMetadata?: PropertyMetadata | undefined
  maxLength?: string | undefined
  maxLengthMetadata?: PropertyMetadata | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  originalValue?: string | undefined
  originalValueMetadata?: PropertyMetadata | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  value?: string | undefined
  valueMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type View = {
  anchorAllowWhiteSpaceInCharacters?: string | undefined
  anchorAllowWhiteSpaceInCharactersMetadata?: PropertyMetadata | undefined
  anchorCaseSensitive?: string | undefined
  anchorCaseSensitiveMetadata?: PropertyMetadata | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorHorizontalAlignmentMetadata?: PropertyMetadata | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorIgnoreIfNotPresentMetadata?: PropertyMetadata | undefined
  anchorMatchWholeWord?: string | undefined
  anchorMatchWholeWordMetadata?: PropertyMetadata | undefined
  anchorString?: string | undefined
  anchorStringMetadata?: PropertyMetadata | undefined
  anchorTabProcessorVersion?: string | undefined
  anchorTabProcessorVersionMetadata?: PropertyMetadata | undefined
  anchorUnits?: string | undefined
  anchorUnitsMetadata?: PropertyMetadata | undefined
  anchorXOffset?: string | undefined
  anchorXOffsetMetadata?: PropertyMetadata | undefined
  anchorYOffset?: string | undefined
  anchorYOffsetMetadata?: PropertyMetadata | undefined
  bold?: string | undefined
  boldMetadata?: PropertyMetadata | undefined
  buttonText?: string | undefined
  buttonTextMetadata?: PropertyMetadata | undefined
  caption?: string | undefined
  captionMetadata?: PropertyMetadata | undefined
  conditionalParentLabel?: string | undefined
  conditionalParentLabelMetadata?: PropertyMetadata | undefined
  conditionalParentValue?: string | undefined
  conditionalParentValueMetadata?: PropertyMetadata | undefined
  customTabId?: string | undefined
  customTabIdMetadata?: PropertyMetadata | undefined
  documentId?: string | undefined
  documentIdMetadata?: PropertyMetadata | undefined
  errorDetails?: ErrorDetails | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontColorMetadata?: PropertyMetadata | undefined
  fontMetadata?: PropertyMetadata | undefined
  fontSize?: string | undefined
  fontSizeMetadata?: PropertyMetadata | undefined
  formOrder?: string | undefined
  formOrderMetadata?: PropertyMetadata | undefined
  formPageLabel?: string | undefined
  formPageLabelMetadata?: PropertyMetadata | undefined
  formPageNumber?: string | undefined
  formPageNumberMetadata?: PropertyMetadata | undefined
  height?: string | undefined
  heightMetadata?: PropertyMetadata | undefined
  italic?: string | undefined
  italicMetadata?: PropertyMetadata | undefined
  localePolicy?: LocalePolicyTab | undefined
  mergeField?: MergeField | undefined
  mergeFieldXml?: string | undefined
  pageNumber?: string | undefined
  pageNumberMetadata?: PropertyMetadata | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientIdGuidMetadata?: PropertyMetadata | undefined
  recipientIdMetadata?: PropertyMetadata | undefined
  required?: string | undefined
  requiredMetadata?: PropertyMetadata | undefined
  requiredRead?: string | undefined
  smartContractInformation?: SmartContractInformation | undefined
  source?: string | undefined
  status?: string | undefined
  statusMetadata?: PropertyMetadata | undefined
  tabGroupLabels?: string[] | undefined
  tabGroupLabelsMetadata?: PropertyMetadata | undefined
  tabId?: string | undefined
  tabIdMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  tabLabelMetadata?: PropertyMetadata | undefined
  tabOrder?: string | undefined
  tabOrderMetadata?: PropertyMetadata | undefined
  tabType?: string | undefined
  tabTypeMetadata?: PropertyMetadata | undefined
  templateLocked?: string | undefined
  templateLockedMetadata?: PropertyMetadata | undefined
  templateRequired?: string | undefined
  templateRequiredMetadata?: PropertyMetadata | undefined
  toolTipMetadata?: PropertyMetadata | undefined
  tooltip?: string | undefined
  underline?: string | undefined
  underlineMetadata?: PropertyMetadata | undefined
  width?: string | undefined
  widthMetadata?: PropertyMetadata | undefined
  xPosition?: string | undefined
  xPositionMetadata?: PropertyMetadata | undefined
  yPosition?: string | undefined
  yPositionMetadata?: PropertyMetadata | undefined
}
type EnvelopeRecipientTabs = {
  approveTabs?: Approve[] | undefined
  checkboxTabs?: Checkbox[] | undefined
  commentThreadTabs?: CommentThread[] | undefined
  commissionCountyTabs?: CommissionCounty[] | undefined
  commissionExpirationTabs?: CommissionExpiration[] | undefined
  commissionNumberTabs?: CommissionNumber[] | undefined
  commissionStateTabs?: CommissionState[] | undefined
  companyTabs?: Company[] | undefined
  currencyTabs?: Currency[] | undefined
  dateSignedTabs?: DateSigned[] | undefined
  dateTabs?: Date[] | undefined
  declineTabs?: Decline[] | undefined
  drawTabs?: Draw[] | undefined
  emailAddressTabs?: EmailAddress[] | undefined
  emailTabs?: Email[] | undefined
  envelopeIdTabs?: EnvelopeId[] | undefined
  firstNameTabs?: FirstName[] | undefined
  formulaTabs?: FormulaTab[] | undefined
  fullNameTabs?: FullName[] | undefined
  initialHereTabs?: InitialHere[] | undefined
  lastNameTabs?: LastName[] | undefined
  listTabs?: List[] | undefined
  notarizeTabs?: Notarize[] | undefined
  notarySealTabs?: NotarySeal[] | undefined
  noteTabs?: Note[] | undefined
  numberTabs?: Number[] | undefined
  numericalTabs?: Numerical[] | undefined
  phoneNumberTabs?: PhoneNumber[] | undefined
  polyLineOverlayTabs?: PolyLineOverlay[] | undefined
  prefillTabs?: PrefillTabs | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  signHereTabs?: SignHere[] | undefined
  signerAttachmentTabs?: SignerAttachment[] | undefined
  smartSectionTabs?: SmartSection[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  titleTabs?: Title[] | undefined
  viewTabs?: View[] | undefined
  zipTabs?: Zip[] | undefined
}
type CarbonCopy = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  agentCanEditEmail?: string | undefined
  agentCanEditName?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  linkedAccountConfigurationId?: string | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  proofFile?: RecipientProofFile | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type CertifiedDelivery = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  agentCanEditEmail?: string | undefined
  agentCanEditName?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  proofFile?: RecipientProofFile | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type Editor = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type NotaryHost = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  hostRecipientId?: string | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type OfflineAttributes = {
  accountEsignId?: string | undefined
  deviceModel?: string | undefined
  deviceName?: string | undefined
  gpsLatitude?: string | undefined
  gpsLongitude?: string | undefined
  offlineSigningHash?: string | undefined
}
type RecipientSignatureProviderOptions = {
  cpfNumber?: string | undefined
  cpfNumberMetadata?: PropertyMetadata | undefined
  oneTimePassword?: string | undefined
  oneTimePasswordMetadata?: PropertyMetadata | undefined
  signerRole?: string | undefined
  signerRoleMetadata?: PropertyMetadata | undefined
  sms?: string | undefined
  smsMetadata?: PropertyMetadata | undefined
}
type RecipientSignatureProvider = {
  sealDocumentsWithTabsOnly?: string | undefined
  sealName?: string | undefined
  signatureProviderName?: string | undefined
  signatureProviderNameMetadata?: PropertyMetadata | undefined
  signatureProviderOptions?: RecipientSignatureProviderOptions | undefined
}
type RecipientSignatureInformation = {
  fontStyle?: string | undefined
  signatureInitials?: string | undefined
  signatureName?: string | undefined
}
type InPersonSigner = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoNavigation?: string | undefined
  autoRespondedReason?: string | undefined
  canSignOffline?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  creationReason?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  defaultRecipient?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  hostEmail?: string | undefined
  hostEmailMetadata?: PropertyMetadata | undefined
  hostName?: string | undefined
  hostNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inPersonSigningType?: string | undefined
  inPersonSigningTypeMetadata?: PropertyMetadata | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  notaryHost?: NotaryHost | undefined
  notaryId?: string | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  offlineAttributes?: OfflineAttributes | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  recipientSuppliesTabs?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  requireSignOnPaper?: string | undefined
  requireSignerCertificate?: string | undefined
  requireUploadSignature?: string | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signInEachLocation?: string | undefined
  signInEachLocationMetadata?: PropertyMetadata | undefined
  signatureInfo?: RecipientSignatureInformation | undefined
  signedDateTime?: string | undefined
  signerEmail?: string | undefined
  signerEmailMetadata?: PropertyMetadata | undefined
  signerFirstName?: string | undefined
  signerFirstNameMetadata?: PropertyMetadata | undefined
  signerLastName?: string | undefined
  signerLastNameMetadata?: PropertyMetadata | undefined
  signerName?: string | undefined
  signerNameMetadata?: PropertyMetadata | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type Intermediary = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type DelegationInfo = {
  email?: string | undefined
  name?: string | undefined
  userAuthorizationId?: string | undefined
  userId?: string | undefined
}
type NotaryRecipient = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  agentCanEditEmail?: string | undefined
  agentCanEditName?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoNavigation?: string | undefined
  autoRespondedReason?: string | undefined
  bulkRecipientsUri?: string | undefined
  canSignOffline?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  creationReason?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  defaultRecipient?: string | undefined
  delegatedBy?: DelegationInfo | undefined
  delegatedTo?: DelegationInfo[] | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  isBulkRecipient?: string | undefined
  isBulkRecipientMetadata?: PropertyMetadata | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  liveOakStartURL?: string | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  notaryId?: string | undefined
  notarySignerEmailSent?: string | undefined
  notarySigners?: string[] | undefined
  notarySourceType?: string | undefined
  notaryType?: string | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  offlineAttributes?: OfflineAttributes | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  proofFile?: RecipientProofFile | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  recipientSuppliesTabs?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  requireSignOnPaper?: string | undefined
  requireSignerCertificate?: string | undefined
  requireUploadSignature?: string | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signInEachLocation?: string | undefined
  signInEachLocationMetadata?: PropertyMetadata | undefined
  signatureInfo?: RecipientSignatureInformation | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type Participant = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  participateFor?: string | undefined
  participateForGuid?: string | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type SealSign = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoRespondedReason?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  emailNotification?: RecipientEmailNotification | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signedDateTime?: string | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type Signer = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  agentCanEditEmail?: string | undefined
  agentCanEditName?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoNavigation?: string | undefined
  autoRespondedReason?: string | undefined
  bulkRecipientsUri?: string | undefined
  canSignOffline?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  creationReason?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  defaultRecipient?: string | undefined
  delegatedBy?: DelegationInfo | undefined
  delegatedTo?: DelegationInfo[] | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  isBulkRecipient?: string | undefined
  isBulkRecipientMetadata?: PropertyMetadata | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  notaryId?: string | undefined
  notarySignerEmailSent?: string | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  offlineAttributes?: OfflineAttributes | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  proofFile?: RecipientProofFile | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  recipientSuppliesTabs?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  requireSignOnPaper?: string | undefined
  requireSignerCertificate?: string | undefined
  requireUploadSignature?: string | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signInEachLocation?: string | undefined
  signInEachLocationMetadata?: PropertyMetadata | undefined
  signatureInfo?: RecipientSignatureInformation | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
}
type Witness = {
  accessCode?: string | undefined
  accessCodeMetadata?: PropertyMetadata | undefined
  addAccessCodeToEmail?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  agentCanEditEmail?: string | undefined
  agentCanEditName?: string | undefined
  allowSystemOverrideForLockedRecipient?: string | undefined
  autoNavigation?: string | undefined
  autoRespondedReason?: string | undefined
  bulkRecipientsUri?: string | undefined
  canSignOffline?: string | undefined
  clientUserId?: string | undefined
  completedCount?: string | undefined
  consentDetailsList?: ConsentDetails[] | undefined
  creationReason?: string | undefined
  customFields?: string[] | undefined
  declinedDateTime?: string | undefined
  declinedReason?: string | undefined
  defaultRecipient?: string | undefined
  delegatedBy?: DelegationInfo | undefined
  delegatedTo?: DelegationInfo[] | undefined
  deliveredDateTime?: string | undefined
  deliveryMethod?: string | undefined
  deliveryMethodMetadata?: PropertyMetadata | undefined
  designatorId?: string | undefined
  designatorIdGuid?: string | undefined
  documentVisibility?: DocumentVisibility[] | undefined
  email?: string | undefined
  emailMetadata?: PropertyMetadata | undefined
  emailNotification?: RecipientEmailNotification | undefined
  emailRecipientPostSigningURL?: string | undefined
  embeddedRecipientStartURL?: string | undefined
  errorDetails?: ErrorDetails | undefined
  excludedDocuments?: string[] | undefined
  faxNumber?: string | undefined
  faxNumberMetadata?: PropertyMetadata | undefined
  firstName?: string | undefined
  firstNameMetadata?: PropertyMetadata | undefined
  fullName?: string | undefined
  fullNameMetadata?: PropertyMetadata | undefined
  idCheckConfigurationName?: string | undefined
  idCheckConfigurationNameMetadata?: PropertyMetadata | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  inheritEmailNotificationConfiguration?: string | undefined
  isBulkRecipient?: string | undefined
  isBulkRecipientMetadata?: PropertyMetadata | undefined
  lastName?: string | undefined
  lastNameMetadata?: PropertyMetadata | undefined
  lockedRecipientPhoneAuthEditable?: string | undefined
  lockedRecipientSmsEditable?: string | undefined
  name?: string | undefined
  nameMetadata?: PropertyMetadata | undefined
  notaryId?: string | undefined
  notarySignerEmailSent?: string | undefined
  note?: string | undefined
  noteMetadata?: PropertyMetadata | undefined
  offlineAttributes?: OfflineAttributes | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  proofFile?: RecipientProofFile | undefined
  recipientAttachments?: RecipientAttachment[] | undefined
  recipientAuthenticationStatus?: AuthenticationStatus | undefined
  recipientFeatureMetadata?: FeatureAvailableMetadata[] | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  recipientSuppliesTabs?: string | undefined
  recipientType?: string | undefined
  recipientTypeMetadata?: PropertyMetadata | undefined
  requireIdLookup?: string | undefined
  requireIdLookupMetadata?: PropertyMetadata | undefined
  requireSignOnPaper?: string | undefined
  requireSignerCertificate?: string | undefined
  requireUploadSignature?: string | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  routingOrderMetadata?: PropertyMetadata | undefined
  sentDateTime?: string | undefined
  signInEachLocation?: string | undefined
  signInEachLocationMetadata?: PropertyMetadata | undefined
  signatureInfo?: RecipientSignatureInformation | undefined
  signedDateTime?: string | undefined
  signingGroupId?: string | undefined
  signingGroupIdMetadata?: PropertyMetadata | undefined
  signingGroupName?: string | undefined
  signingGroupUsers?: UserInfo[] | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  status?: string | undefined
  statusCode?: string | undefined
  suppressEmails?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  totalTabCount?: string | undefined
  userId?: string | undefined
  witnessFor?: string | undefined
  witnessForGuid?: string | undefined
}
type EnvelopeRecipients = {
  agents?: Agent[] | undefined
  carbonCopies?: CarbonCopy[] | undefined
  certifiedDeliveries?: CertifiedDelivery[] | undefined
  currentRoutingOrder?: string | undefined
  editors?: Editor[] | undefined
  errorDetails?: ErrorDetails | undefined
  inPersonSigners?: InPersonSigner[] | undefined
  intermediaries?: Intermediary[] | undefined
  notaries?: NotaryRecipient[] | undefined
  participants?: Participant[] | undefined
  recipientCount?: string | undefined
  seals?: SealSign[] | undefined
  signers?: Signer[] | undefined
  witnesses?: Witness[] | undefined
}
type FolderItemV2 = {
  completedDateTime?: string | undefined
  createdDateTime?: string | undefined
  envelopeId?: string | undefined
  envelopeUri?: string | undefined
  expireDateTime?: string | undefined
  folderId?: string | undefined
  folderUri?: string | undefined
  is21CFRPart11?: string | undefined
  lastModifiedDateTime?: string | undefined
  ownerName?: string | undefined
  recipients?: EnvelopeRecipients | undefined
  recipientsUri?: string | undefined
  senderCompany?: string | undefined
  senderEmail?: string | undefined
  senderName?: string | undefined
  senderUserId?: string | undefined
  sentDateTime?: string | undefined
  status?: string | undefined
  subject?: string | undefined
  templateId?: string | undefined
  templateUri?: string | undefined
}
type Folder = {
  errorDetails?: ErrorDetails | undefined
  filter?: Filter | undefined
  folderId?: string | undefined
  folderItems?: FolderItemV2[] | undefined
  folders?: Folder[] | undefined
  hasAccess?: string | undefined
  hasSubFolders?: string | undefined
  itemCount?: string | undefined
  name?: string | undefined
  owner?: UserInfo | undefined
  parentFolderId?: string | undefined
  parentFolderUri?: string | undefined
  subFolderCount?: string | undefined
  type?: string | undefined
  uri?: string | undefined
}
type EnvelopeLocks = {
  errorDetails?: ErrorDetails | undefined
  lockDurationInSeconds?: string | undefined
  lockToken?: string | undefined
  lockType?: string | undefined
  lockedByApp?: string | undefined
  lockedByUser?: UserInfo | undefined
  lockedUntilDateTime?: string | undefined
  useScratchPad?: string | undefined
}
type Notification = {
  expirations?: Expirations | undefined
  reminders?: Reminders | undefined
  useAccountDefaults?: string | undefined
}
type PowerFormRecipient = {
  accessCode?: string | undefined
  accessCodeLocked?: string | undefined
  accessCodeRequired?: string | undefined
  email?: string | undefined
  emailLocked?: string | undefined
  idCheckConfigurationName?: string | undefined
  idCheckRequired?: string | undefined
  name?: string | undefined
  recipientType?: string | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  templateRequiresIdLookup?: string | undefined
  userNameLocked?: string | undefined
}
type PowerForm = {
  createdBy?: string | undefined
  createdDateTime?: string | undefined
  emailBody?: string | undefined
  emailSubject?: string | undefined
  envelopes?: Envelope[] | undefined
  errorDetails?: ErrorDetails | undefined
  instructions?: string | undefined
  isActive?: string | undefined
  lastUsed?: string | undefined
  limitUseInterval?: string | undefined
  limitUseIntervalEnabled?: string | undefined
  limitUseIntervalUnits?: string | undefined
  maxUseEnabled?: string | undefined
  name?: string | undefined
  powerFormId?: string | undefined
  powerFormUrl?: string | undefined
  recipients?: PowerFormRecipient[] | undefined
  senderName?: string | undefined
  senderUserId?: string | undefined
  signingMode?: string | undefined
  templateId?: string | undefined
  templateName?: string | undefined
  timesUsed?: string | undefined
  uri?: string | undefined
  usesRemaining?: string | undefined
}
type EnvelopeDelayRule = { delay?: string | undefined; resumeDate?: string | undefined }
type ScheduledSending = {
  bulkListId?: string | undefined
  resumeDate?: string | undefined
  rules?: EnvelopeDelayRule[] | undefined
  status?: string | undefined
}
type DelayedRouting = {
  resumeDate?: string | undefined
  rules?: EnvelopeDelayRule[] | undefined
  status?: string | undefined
}
type ConditionalRecipientRuleFilter = {
  operator?: string | undefined
  recipientId?: string | undefined
  scope?: string | undefined
  tabId?: string | undefined
  tabLabel?: string | undefined
  tabType?: string | undefined
  value?: string | undefined
}
type ConditionalRecipientRuleCondition = {
  filters?: ConditionalRecipientRuleFilter[] | undefined
  order?: string | undefined
  recipientLabel?: string | undefined
}
type RecipientOption = {
  email?: string | undefined
  name?: string | undefined
  recipientLabel?: string | undefined
  roleName?: string | undefined
  signingGroupId?: string | undefined
}
type RecipientGroup = {
  groupMessage?: string | undefined
  groupName?: string | undefined
  recipients?: RecipientOption[] | undefined
}
type ConditionalRecipientRule = {
  conditions?: ConditionalRecipientRuleCondition[] | undefined
  order?: string | undefined
  recipientGroup?: RecipientGroup | undefined
  recipientId?: string | undefined
}
type RecipientRules = { conditionalRecipients?: ConditionalRecipientRule[] | undefined }
type RecipientRouting = { rules?: RecipientRules | undefined }
type WorkflowStep = {
  action?: string | undefined
  completedDate?: string | undefined
  delayedRouting?: DelayedRouting | undefined
  itemId?: string | undefined
  recipientRouting?: RecipientRouting | undefined
  status?: string | undefined
  triggerOnItem?: string | undefined
  triggeredDate?: string | undefined
  workflowStepId?: string | undefined
}
type Workflow = {
  currentWorkflowStepId?: string | undefined
  resumeDate?: string | undefined
  scheduledSending?: ScheduledSending | undefined
  workflowStatus?: string | undefined
  workflowSteps?: WorkflowStep[] | undefined
}
type Envelope = {
  accessControlListBase64?: string | undefined
  allowComments?: string | undefined
  allowMarkup?: string | undefined
  allowReassign?: string | undefined
  allowViewHistory?: string | undefined
  anySigner?: string | undefined
  asynchronous?: string | undefined
  attachmentsUri?: string | undefined
  authoritativeCopy?: string | undefined
  authoritativeCopyDefault?: string | undefined
  autoNavigation?: string | undefined
  brandId?: string | undefined
  brandLock?: string | undefined
  burnDefaultTabData?: string | undefined
  certificateUri?: string | undefined
  completedDateTime?: string | undefined
  copyRecipientData?: string | undefined
  createdDateTime?: string | undefined
  customFields?: AccountCustomFields | undefined
  customFieldsUri?: string | undefined
  declinedDateTime?: string | undefined
  deletedDateTime?: string | undefined
  deliveredDateTime?: string | undefined
  disableResponsiveDocument?: string | undefined
  documentBase64?: string | undefined
  documentsCombinedUri?: string | undefined
  documentsUri?: string | undefined
  emailBlurb?: string | undefined
  emailSettings?: EmailSettings | undefined
  emailSubject?: string | undefined
  enableWetSign?: string | undefined
  enforceSignerVisibility?: string | undefined
  envelopeAttachments?: Attachment[] | undefined
  envelopeCustomMetadata?: EnvelopeCustomMetadata | undefined
  envelopeDocuments?: EnvelopeDocument[] | undefined
  envelopeId?: string | undefined
  envelopeIdStamping?: string | undefined
  envelopeLocation?: string | undefined
  envelopeMetadata?: EnvelopeMetadata | undefined
  envelopeUri?: string | undefined
  expireAfter?: string | undefined
  expireDateTime?: string | undefined
  expireEnabled?: string | undefined
  externalEnvelopeId?: string | undefined
  folders?: Folder[] | undefined
  hasComments?: string | undefined
  hasFormDataChanged?: string | undefined
  hasWavFile?: string | undefined
  holder?: string | undefined
  initialSentDateTime?: string | undefined
  is21CFRPart11?: string | undefined
  isDynamicEnvelope?: string | undefined
  isSignatureProviderEnvelope?: string | undefined
  lastModifiedDateTime?: string | undefined
  location?: string | undefined
  lockInformation?: EnvelopeLocks | undefined
  messageLock?: string | undefined
  notification?: Notification | undefined
  notificationUri?: string | undefined
  powerForm?: PowerForm | undefined
  purgeCompletedDate?: string | undefined
  purgeRequestDate?: string | undefined
  purgeState?: string | undefined
  recipients?: EnvelopeRecipients | undefined
  recipientsLock?: string | undefined
  recipientsUri?: string | undefined
  sender?: UserInfo | undefined
  sentDateTime?: string | undefined
  signerCanSignOnMobile?: string | undefined
  signingLocation?: string | undefined
  status?: string | undefined
  statusChangedDateTime?: string | undefined
  statusDateTime?: string | undefined
  templatesUri?: string | undefined
  transactionId?: string | undefined
  useDisclosure?: string | undefined
  voidedDateTime?: string | undefined
  voidedReason?: string | undefined
  workflow?: Workflow | undefined
}
type EnvelopesInformation = {
  continuationToken?: string | undefined
  endPosition?: string | undefined
  envelopeTransactionStatuses?: EnvelopeTransactionStatus[] | undefined
  envelopes?: Envelope[] | undefined
  folders?: Folder[] | undefined
  lastQueriedDateTime?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type BulkSendBatchActionRequest = {
  action?: string | undefined
  notification?: Notification | undefined
  voidReason?: string | undefined
}
type BulkSendingListSummary = {
  bulkSendListId?: string | undefined
  createdByUser?: string | undefined
  createdDate?: string | undefined
  name?: string | undefined
}
type BulkSendingListSummaries = { bulkListSummaries?: BulkSendingListSummary[] | undefined }
type BulkSendingCopyCustomField = { name?: string | undefined; value?: string | undefined }
type BulksendingCopyDocGenFormField = { label?: string | undefined; value?: string | undefined }
type BulkSendingCopyTab = { initialValue?: string | undefined; tabLabel?: string | undefined }
type BulkSendingCopyRecipient = {
  accessCode?: string | undefined
  clientUserId?: string | undefined
  customFields?: string[] | undefined
  deliveryMethod?: string | undefined
  email?: string | undefined
  emailNotification?: RecipientEmailNotification | undefined
  embeddedRecipientStartURL?: string | undefined
  faxNumber?: string | undefined
  hostEmail?: string | undefined
  hostName?: string | undefined
  idCheckConfigurationName?: string | undefined
  idCheckInformationInput?: IdCheckInformationInput | undefined
  identificationMethod?: string | undefined
  identityVerification?: RecipientIdentityVerification | undefined
  name?: string | undefined
  note?: string | undefined
  phoneAuthentication?: RecipientPhoneAuthentication | undefined
  recipientId?: string | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  roleName?: string | undefined
  signerName?: string | undefined
  signingGroupId?: string | undefined
  smsAuthentication?: RecipientSMSAuthentication | undefined
  socialAuthentications?: SocialAuthentication[] | undefined
  tabs?: BulkSendingCopyTab[] | undefined
}
type BulkSendingCopy = {
  customFields?: BulkSendingCopyCustomField[] | undefined
  docGenFormFields?: BulksendingCopyDocGenFormField[] | undefined
  emailBlurb?: string | undefined
  emailSubject?: string | undefined
  recipients?: BulkSendingCopyRecipient[] | undefined
}
type BulkSendingList = {
  bulkCopies?: BulkSendingCopy[] | undefined
  listId?: string | undefined
  name?: string | undefined
}
type BulkSendRequest = { batchName?: string | undefined; envelopeOrTemplateId?: string | undefined }
type BulkSendResponse = {
  batchId?: string | undefined
  batchName?: string | undefined
  batchSize?: string | undefined
  envelopeOrTemplateId?: string | undefined
  errorDetails?: string[] | undefined
  errors?: string[] | undefined
  queueLimit?: string | undefined
  totalQueued?: string | undefined
}
type BulkSendTestResponse = {
  canBeSent?: boolean | undefined
  validationErrorDetails?: string[] | undefined
  validationErrors?: string[] | undefined
}
type CaptiveRecipient = {
  clientUserId?: string | undefined
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  userName?: string | undefined
}
type CaptiveRecipientInformation = { captiveRecipients?: CaptiveRecipient[] | undefined }
type ChunkedUploadRequest = { chunkedUploadId?: string | undefined; data?: string | undefined }
type ChunkedUploadPart = { sequence?: string | undefined; size?: string | undefined }
type ChunkedUploadResponse = {
  checksum?: string | undefined
  chunkedUploadId?: string | undefined
  chunkedUploadParts?: ChunkedUploadPart[] | undefined
  chunkedUploadUri?: string | undefined
  committed?: string | undefined
  expirationDateTime?: string | undefined
  maxChunkedUploadParts?: string | undefined
  maxTotalSize?: string | undefined
  totalSize?: string | undefined
}
type ConnectEventData = {
  format?: string | undefined
  includeData?: string[] | undefined
  version?: string | undefined
}
type ConnectSalesforceField = {
  dsAttribute?: string | undefined
  dsLink?: string | undefined
  dsNode?: string | undefined
  id?: string | undefined
  sfField?: string | undefined
  sfFieldName?: string | undefined
  sfFolder?: string | undefined
  sfLockedValue?: string | undefined
}
type ConnectSalesforceObject = {
  active?: string | undefined
  description?: string | undefined
  id?: string | undefined
  insert?: string | undefined
  onCompleteOnly?: string | undefined
  selectFields?: ConnectSalesforceField[] | undefined
  sfObject?: string | undefined
  sfObjectName?: string | undefined
  updateFields?: ConnectSalesforceField[] | undefined
}
type ConnectCustomConfiguration = {
  allUsers?: string | undefined
  allUsersExcept?: string | undefined
  allowEnvelopePublish?: string | undefined
  allowSalesforcePublish?: string | undefined
  configurationType?: string | undefined
  connectId?: string | undefined
  deliveryMode?: string | undefined
  disabledBy?: string | undefined
  enableLog?: string | undefined
  envelopeEvents?: string[] | undefined
  eventData?: ConnectEventData | undefined
  events?: string[] | undefined
  externalFolderId?: string | undefined
  externalFolderLabel?: string | undefined
  groupIds?: string[] | undefined
  includeCertSoapHeader?: string | undefined
  includeCertificateOfCompletion?: string | undefined
  includeDocumentFields?: string | undefined
  includeDocuments?: string | undefined
  includeEnvelopeVoidReason?: string | undefined
  includeHMAC?: string | undefined
  includeOAuth?: string | undefined
  includeSenderAccountasCustomField?: string | undefined
  includeTimeZoneInformation?: string | undefined
  integratorManaged?: string | undefined
  name?: string | undefined
  password?: string | undefined
  recipientEvents?: string[] | undefined
  requireMutualTls?: string | undefined
  requiresAcknowledgement?: string | undefined
  salesforceApiVersion?: string | undefined
  salesforceAuthcode?: string | undefined
  salesforceCallBackUrl?: string | undefined
  salesforceDocumentsAsContentFiles?: string | undefined
  senderOverride?: string | undefined
  senderSelectableItems?: string[] | undefined
  sfObjects?: ConnectSalesforceObject[] | undefined
  signMessageWithX509Certificate?: string | undefined
  soapNamespace?: string | undefined
  urlToPublishTo?: string | undefined
  useSoapInterface?: string | undefined
  userIds?: string[] | undefined
  userName?: string | undefined
}
type ConnectConfigResults = {
  configurations?: ConnectCustomConfiguration[] | undefined
  totalRecords?: string | undefined
}
type ConnectHistoricalEnvelopeRepublish = {
  config?: ConnectCustomConfiguration | undefined
  envelopes?: string[] | undefined
}
type EnvelopePublishTransactionErrorRollup = {
  count?: string | undefined
  errorType?: string | undefined
}
type EnvelopePublishTransaction = {
  applyConnectSettings?: string | undefined
  envelopeCount?: string | undefined
  envelopeLevelErrorRollups?: EnvelopePublishTransactionErrorRollup[] | undefined
  envelopePublishTransactionId?: string | undefined
  errorCount?: string | undefined
  fileLevelErrors?: string[] | undefined
  noActionRequiredEnvelopeCount?: string | undefined
  processedEnvelopeCount?: string | undefined
  processingStatus?: string | undefined
  resultsUri?: string | undefined
  submissionDate?: string | undefined
  submittedByUserInfo?: UserInfo | undefined
  submittedForPublishingEnvelopeCount?: string | undefined
}
type ConnectFailureFilter = { envelopeIds?: string[] | undefined; synchronous?: string | undefined }
type ConnectFailureResult = {
  configId?: string | undefined
  configUrl?: string | undefined
  envelopeId?: string | undefined
  status?: string | undefined
  statusMessage?: string | undefined
}
type ConnectFailureResults = { retryQueue?: ConnectFailureResult[] | undefined }
type ConnectDebugLog = {
  connectConfig?: string | undefined
  errorDetails?: ErrorDetails | undefined
  eventDateTime?: string | undefined
  eventDescription?: string | undefined
  payload?: string | undefined
}
type ConnectLog = {
  accountId?: string | undefined
  configUrl?: string | undefined
  connectDebugLog?: ConnectDebugLog[] | undefined
  connectId?: string | undefined
  created?: string | undefined
  email?: string | undefined
  envelopeId?: string | undefined
  error?: string | undefined
  failureId?: string | undefined
  failureUri?: string | undefined
  lastTry?: string | undefined
  logId?: string | undefined
  logUri?: string | undefined
  retryCount?: string | undefined
  retryUri?: string | undefined
  status?: string | undefined
  subject?: string | undefined
  userName?: string | undefined
}
type ConnectLogs = {
  failures?: ConnectLog[] | undefined
  logs?: ConnectLog[] | undefined
  totalRecords?: string | undefined
  type?: string | undefined
}
type ConnectDeleteFailureResult = { [x: string]: unknown }
type ConnectOAuthConfig = {
  authorizationServerUrl?: string | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  customParameters?: string | undefined
  scope?: string | undefined
}
type ConnectUserInfo = {
  email?: string | undefined
  isIncluded?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
}
type IntegratedConnectUserInfoList = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  users?: ConnectUserInfo[] | undefined
}
type IntegratedUserInfoList = {
  allUsersSelected?: string | undefined
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  users?: UserInfo[] | undefined
}
type AccountConsumerDisclosures = {
  accountEsignId?: string | undefined
  allowCDWithdraw?: string | undefined
  allowCDWithdrawMetadata?: SettingsMetadata | undefined
  changeEmail?: string | undefined
  changeEmailOther?: string | undefined
  companyName?: string | undefined
  companyPhone?: string | undefined
  copyCostPerPage?: string | undefined
  copyFeeCollectionMethod?: string | undefined
  copyRequestEmail?: string | undefined
  custom?: string | undefined
  enableEsign?: string | undefined
  esignAgreement?: string | undefined
  esignText?: string | undefined
  languageCode?: string | undefined
  mustAgreeToEsign?: string | undefined
  pdfId?: string | undefined
  useBrand?: string | undefined
  useConsumerDisclosureWithinAccount?: string | undefined
  useConsumerDisclosureWithinAccountMetadata?: SettingsMetadata | undefined
  withdrawAddressLine1?: string | undefined
  withdrawAddressLine2?: string | undefined
  withdrawByEmail?: string | undefined
  withdrawByMail?: string | undefined
  withdrawByPhone?: string | undefined
  withdrawCity?: string | undefined
  withdrawConsequences?: string | undefined
  withdrawEmail?: string | undefined
  withdrawOther?: string | undefined
  withdrawPhone?: string | undefined
  withdrawPostalCode?: string | undefined
  withdrawState?: string | undefined
}
type ConsumerDisclosure = {
  accountEsignId?: string | undefined
  allowCDWithdraw?: string | undefined
  allowCDWithdrawMetadata?: SettingsMetadata | undefined
  changeEmail?: string | undefined
  changeEmailOther?: string | undefined
  companyName?: string | undefined
  companyPhone?: string | undefined
  copyCostPerPage?: string | undefined
  copyFeeCollectionMethod?: string | undefined
  copyRequestEmail?: string | undefined
  custom?: string | undefined
  enableEsign?: string | undefined
  esignAgreement?: string | undefined
  esignText?: string | undefined
  languageCode?: string | undefined
  mustAgreeToEsign?: string | undefined
  pdfId?: string | undefined
  useBrand?: string | undefined
  useConsumerDisclosureWithinAccount?: string | undefined
  useConsumerDisclosureWithinAccountMetadata?: SettingsMetadata | undefined
  withdrawAddressLine1?: string | undefined
  withdrawAddressLine2?: string | undefined
  withdrawByEmail?: string | undefined
  withdrawByMail?: string | undefined
  withdrawByPhone?: string | undefined
  withdrawCity?: string | undefined
  withdrawConsequences?: string | undefined
  withdrawEmail?: string | undefined
  withdrawOther?: string | undefined
  withdrawPhone?: string | undefined
  withdrawPostalCode?: string | undefined
  withdrawState?: string | undefined
}
type ContactPhoneNumber = { phoneNumber?: string | undefined; phoneType?: string | undefined }
type JurisdictionSummary = {
  authorizedForIPen?: string | undefined
  authorizedForRon?: string | undefined
  jurisdictionId?: string | undefined
  jurisdictionName?: string | undefined
}
type NotaryContactDetails = {
  hasDocusignCertificate?: string | undefined
  jurisdictions?: JurisdictionSummary[] | undefined
}
type Contact = {
  cloudProvider?: string | undefined
  cloudProviderContainerId?: string | undefined
  contactId?: string | undefined
  contactPhoneNumbers?: ContactPhoneNumber[] | undefined
  contactUri?: string | undefined
  emails?: string[] | undefined
  errorDetails?: ErrorDetails | undefined
  isOwner?: boolean | undefined
  name?: string | undefined
  notaryContactDetails?: NotaryContactDetails | undefined
  organization?: string | undefined
  roomContactType?: string | undefined
  shared?: string | undefined
  signingGroup?: string | undefined
  signingGroupName?: string | undefined
}
type ContactModRequest = { contactList?: Contact[] | undefined }
type ContactUpdateResponse = { contacts?: Contact[] | undefined }
type ContactGetResponse = {
  contacts?: Contact[] | undefined
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type CustomField = {
  customFieldType?: string | undefined
  errorDetails?: ErrorDetails | undefined
  fieldId?: string | undefined
  listItems?: string[] | undefined
  name?: string | undefined
  required?: string | undefined
  show?: string | undefined
  value?: string | undefined
}
type DocumentHtmlCollapsibleDisplaySettings = {
  arrowClosed?: string | undefined
  arrowColor?: string | undefined
  arrowLocation?: string | undefined
  arrowOpen?: string | undefined
  arrowSize?: string | undefined
  arrowStyle?: string | undefined
  containerStyle?: string | undefined
  labelStyle?: string | undefined
  onlyArrowIsClickable?: boolean | undefined
  outerLabelAndArrowStyle?: string | undefined
}
type DocumentHtmlDisplaySettings = {
  cellStyle?: string | undefined
  collapsibleSettings?: DocumentHtmlCollapsibleDisplaySettings | undefined
  display?: string | undefined
  displayLabel?: string | undefined
  displayOrder?: number | undefined
  displayPageNumber?: number | undefined
  hideLabelWhenOpened?: boolean | undefined
  inlineOuterStyle?: string | undefined
  labelWhenOpened?: string | undefined
  preLabel?: string | undefined
  scrollToTopWhenOpened?: boolean | undefined
  tableStyle?: string | undefined
}
type DocumentHtmlDisplayAnchor = {
  caseSensitive?: boolean | undefined
  displaySettings?: DocumentHtmlDisplaySettings | undefined
  endAnchor?: string | undefined
  removeEndAnchor?: boolean | undefined
  removeStartAnchor?: boolean | undefined
  startAnchor?: string | undefined
}
type DocumentHtmlDefinition = {
  displayAnchorPrefix?: string | undefined
  displayAnchors?: DocumentHtmlDisplayAnchor[] | undefined
  displayOrder?: string | undefined
  displayPageNumber?: string | undefined
  documentGuid?: string | undefined
  documentId?: string | undefined
  headerLabel?: string | undefined
  maxScreenWidth?: string | undefined
  removeEmptyTags?: string | undefined
  showMobileOptimizedToggle?: string | undefined
  source?: string | undefined
}
type MatchBox = {
  height?: string | undefined
  pageNumber?: string | undefined
  width?: string | undefined
  xPosition?: string | undefined
  yPosition?: string | undefined
}
type Document = {
  applyAnchorTabs?: string | undefined
  assignTabsToRecipientId?: string | undefined
  display?: string | undefined
  docGenFormFields?: DocGenFormField[] | undefined
  documentBase64?: string | undefined
  documentFields?: NameValue[] | undefined
  documentId?: string | undefined
  encryptedWithKeyManager?: string | undefined
  fileExtension?: string | undefined
  fileFormatHint?: string | undefined
  htmlDefinition?: DocumentHtmlDefinition | undefined
  includeInDownload?: string | undefined
  isDocGenDocument?: string | undefined
  matchBoxes?: MatchBox[] | undefined
  name?: string | undefined
  order?: string | undefined
  pages?: string | undefined
  password?: string | undefined
  pdfFormFieldOption?: string | undefined
  remoteUrl?: string | undefined
  signerMustAcknowledge?: string | undefined
  signerMustAcknowledgeUseAccountDefault?: boolean | undefined
  tabs?: EnvelopeRecipientTabs | undefined
  templateLocked?: string | undefined
  templateRequired?: string | undefined
  transformPdfFields?: string | undefined
  uri?: string | undefined
}
type InlineTemplate = {
  customFields?: AccountCustomFields | undefined
  documents?: Document[] | undefined
  envelope?: Envelope | undefined
  recipients?: EnvelopeRecipients | undefined
  sequence?: string | undefined
}
type ServerTemplate = { sequence?: string | undefined; templateId?: string | undefined }
type CompositeTemplate = {
  compositeTemplateId?: string | undefined
  document?: Document | undefined
  inlineTemplates?: InlineTemplate[] | undefined
  pdfMetaDataTemplateSequence?: string | undefined
  serverTemplates?: ServerTemplate[] | undefined
}
type EnvelopeEvent = {
  envelopeEventStatusCode?: string | undefined
  includeDocuments?: string | undefined
}
type RecipientEvent = {
  includeDocuments?: string | undefined
  recipientEventStatusCode?: string | undefined
}
type EventNotification = {
  deliveryMode?: string | undefined
  envelopeEvents?: EnvelopeEvent[] | undefined
  eventData?: ConnectEventData | undefined
  events?: string[] | undefined
  includeCertificateOfCompletion?: string | undefined
  includeCertificateWithSoap?: string | undefined
  includeDocumentFields?: string | undefined
  includeDocuments?: string | undefined
  includeEnvelopeVoidReason?: string | undefined
  includeHMAC?: string | undefined
  includeOAuth?: string | undefined
  includeSenderAccountAsCustomField?: string | undefined
  includeTimeZone?: string | undefined
  integratorManaged?: string | undefined
  loggingEnabled?: string | undefined
  recipientEvents?: RecipientEvent[] | undefined
  requireAcknowledgment?: string | undefined
  signMessageWithX509Cert?: string | undefined
  soapNameSpace?: string | undefined
  url?: string | undefined
  useSoapInterface?: string | undefined
}
type RecipientTokenClientURLs = {
  onAccessCodeFailed?: string | undefined
  onCancel?: string | undefined
  onDecline?: string | undefined
  onException?: string | undefined
  onFaxPending?: string | undefined
  onIdCheckFailed?: string | undefined
  onSessionTimeout?: string | undefined
  onSigningComplete?: string | undefined
  onTTLExpired?: string | undefined
  onViewingComplete?: string | undefined
}
type RecipientViewRequest = {
  assertionId?: string | undefined
  authenticationInstant?: string | undefined
  authenticationMethod?: string | undefined
  clientURLs?: RecipientTokenClientURLs | undefined
  clientUserId?: string | undefined
  email?: string | undefined
  frameAncestors?: string[] | undefined
  messageOrigins?: string[] | undefined
  pingFrequency?: string | undefined
  pingUrl?: string | undefined
  recipientId?: string | undefined
  returnUrl?: string | undefined
  securityDomain?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
  xFrameOptions?: string | undefined
  xFrameOptionsAllowFromUrl?: string | undefined
}
type TemplateRole = {
  accessCode?: string | undefined
  additionalNotifications?: RecipientAdditionalNotification[] | undefined
  clientUserId?: string | undefined
  defaultRecipient?: string | undefined
  deliveryMethod?: string | undefined
  email?: string | undefined
  emailNotification?: RecipientEmailNotification | undefined
  embeddedRecipientStartURL?: string | undefined
  inPersonSignerName?: string | undefined
  name?: string | undefined
  phoneNumber?: RecipientPhoneNumber | undefined
  recipientSignatureProviders?: RecipientSignatureProvider[] | undefined
  roleName?: string | undefined
  routingOrder?: string | undefined
  signingGroupId?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
}
type EnvelopeDefinition = {
  accessControlListBase64?: string | undefined
  accessibility?: string | undefined
  allowComments?: string | undefined
  allowMarkup?: string | undefined
  allowReassign?: string | undefined
  allowRecipientRecursion?: string | undefined
  allowViewHistory?: string | undefined
  anySigner?: string | undefined
  asynchronous?: string | undefined
  attachments?: Attachment[] | undefined
  attachmentsUri?: string | undefined
  authoritativeCopy?: string | undefined
  authoritativeCopyDefault?: string | undefined
  autoNavigation?: string | undefined
  brandId?: string | undefined
  brandLock?: string | undefined
  burnDefaultTabData?: string | undefined
  certificateUri?: string | undefined
  completedDateTime?: string | undefined
  compositeTemplates?: CompositeTemplate[] | undefined
  copyRecipientData?: string | undefined
  createdDateTime?: string | undefined
  customFields?: AccountCustomFields | undefined
  customFieldsUri?: string | undefined
  declinedDateTime?: string | undefined
  deletedDateTime?: string | undefined
  deliveredDateTime?: string | undefined
  disableResponsiveDocument?: string | undefined
  documentBase64?: string | undefined
  documents?: Document[] | undefined
  documentsCombinedUri?: string | undefined
  documentsUri?: string | undefined
  emailBlurb?: string | undefined
  emailSettings?: EmailSettings | undefined
  emailSubject?: string | undefined
  enableWetSign?: string | undefined
  enforceSignerVisibility?: string | undefined
  envelopeAttachments?: Attachment[] | undefined
  envelopeCustomMetadata?: EnvelopeCustomMetadata | undefined
  envelopeDocuments?: EnvelopeDocument[] | undefined
  envelopeId?: string | undefined
  envelopeIdStamping?: string | undefined
  envelopeLocation?: string | undefined
  envelopeMetadata?: EnvelopeMetadata | undefined
  envelopeUri?: string | undefined
  eventNotification?: EventNotification | undefined
  expireAfter?: string | undefined
  expireDateTime?: string | undefined
  expireEnabled?: string | undefined
  externalEnvelopeId?: string | undefined
  folders?: Folder[] | undefined
  hasComments?: string | undefined
  hasFormDataChanged?: string | undefined
  hasWavFile?: string | undefined
  holder?: string | undefined
  initialSentDateTime?: string | undefined
  is21CFRPart11?: string | undefined
  isDynamicEnvelope?: string | undefined
  isSignatureProviderEnvelope?: string | undefined
  lastModifiedDateTime?: string | undefined
  location?: string | undefined
  lockInformation?: EnvelopeLocks | undefined
  messageLock?: string | undefined
  notification?: Notification | undefined
  notificationUri?: string | undefined
  password?: string | undefined
  powerForm?: PowerForm | undefined
  purgeCompletedDate?: string | undefined
  purgeRequestDate?: string | undefined
  purgeState?: string | undefined
  recipientViewRequest?: RecipientViewRequest | undefined
  recipients?: EnvelopeRecipients | undefined
  recipientsLock?: string | undefined
  recipientsUri?: string | undefined
  sender?: UserInfo | undefined
  sentDateTime?: string | undefined
  signerCanSignOnMobile?: string | undefined
  signingLocation?: string | undefined
  status?: string | undefined
  statusChangedDateTime?: string | undefined
  statusDateTime?: string | undefined
  templateId?: string | undefined
  templateRoles?: TemplateRole[] | undefined
  templatesUri?: string | undefined
  transactionId?: string | undefined
  useDisclosure?: string | undefined
  voidedDateTime?: string | undefined
  voidedReason?: string | undefined
  workflow?: Workflow | undefined
}
type BulkEnvelope = {
  bulkRecipientRow?: string | undefined
  bulkStatus?: string | undefined
  email?: string | undefined
  envelopeId?: string | undefined
  envelopeUri?: string | undefined
  errorDetails?: ErrorDetails | undefined
  name?: string | undefined
  submittedDateTime?: string | undefined
  transactionId?: string | undefined
}
type BulkEnvelopeStatus = {
  batchId?: string | undefined
  batchSize?: string | undefined
  bulkEnvelopes?: BulkEnvelope[] | undefined
  bulkEnvelopesBatchUri?: string | undefined
  endPosition?: string | undefined
  failed?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  queued?: string | undefined
  resultSetSize?: string | undefined
  sent?: string | undefined
  startPosition?: string | undefined
  submittedDate?: string | undefined
  totalSetSize?: string | undefined
}
type EnvelopeSummary = {
  bulkEnvelopeStatus?: BulkEnvelopeStatus | undefined
  envelopeId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  recipientSigningUri?: string | undefined
  recipientSigningUriError?: string | undefined
  status?: string | undefined
  statusDateTime?: string | undefined
  uri?: string | undefined
}
type EnvelopeIdsRequest = {
  envelopeIds?: string[] | undefined
  transactionIds?: string[] | undefined
}
type EnvelopeTransferRule = {
  carbonCopyOriginalOwner?: string | undefined
  enabled?: string | undefined
  envelopeTransferRuleId?: string | undefined
  eventType?: string | undefined
  fromGroup?: Group | undefined
  fromUser?: UserInformation | undefined
  modifiedDate?: string | undefined
  modifiedUser?: UserInformation | undefined
  toFolder?: Folder | undefined
  toUser?: UserInformation | undefined
}
type EnvelopeTransferRuleInformation = {
  endPosition?: string | undefined
  envelopeTransferRules?: EnvelopeTransferRule[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type EnvelopeTransferRuleRequest = {
  carbonCopyOriginalOwner?: string | undefined
  enabled?: string | undefined
  envelopeTransferRuleId?: string | undefined
  eventType?: string | undefined
  fromGroups?: Group[] | undefined
  fromUsers?: UserInformation[] | undefined
  modifiedDate?: string | undefined
  modifiedUser?: UserInformation | undefined
  toFolder?: Folder | undefined
  toUser?: UserInformation | undefined
}
type RecipientUpdateResponse = {
  combined?: string | undefined
  errorDetails?: ErrorDetails | undefined
  recipientId?: string | undefined
  recipientIdGuid?: string | undefined
  tabs?: EnvelopeRecipientTabs | undefined
}
type EnvelopeUpdateSummary = {
  bulkEnvelopeStatus?: BulkEnvelopeStatus | undefined
  envelopeId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  listCustomFieldUpdateResults?: ListCustomField[] | undefined
  lockInformation?: EnvelopeLocks | undefined
  purgeState?: string | undefined
  recipientUpdateResults?: RecipientUpdateResponse[] | undefined
  tabUpdateResults?: EnvelopeRecipientTabs | undefined
  textCustomFieldUpdateResults?: TextCustomField[] | undefined
}
type EnvelopeAttachmentsRequest = { attachments?: Attachment[] | undefined }
type EnvelopeAttachment = {
  accessControl?: string | undefined
  attachmentId?: string | undefined
  attachmentType?: string | undefined
  errorDetails?: ErrorDetails | undefined
  label?: string | undefined
  name?: string | undefined
}
type EnvelopeAttachmentsResult = { attachments?: EnvelopeAttachment[] | undefined }
type EnvelopeAuditEvent = { eventFields?: NameValue[] | undefined }
type EnvelopeAuditEventResponse = { auditEvents?: EnvelopeAuditEvent[] | undefined }
type EnvelopeCustomFields = {
  listCustomFields?: ListCustomField[] | undefined
  textCustomFields?: TextCustomField[] | undefined
}
type CustomFieldsEnvelope = {
  listCustomFields?: ListCustomField[] | undefined
  textCustomFields?: TextCustomField[] | undefined
}
type EnvelopeDocumentsResult = {
  envelopeDocuments?: EnvelopeDocument[] | undefined
  envelopeId?: string | undefined
}
type EnvelopeDocumentFields = { documentFields?: NameValue[] | undefined }
type DocumentHtmlDefinitionOriginal = {
  documentId?: string | undefined
  documentIdGuid?: string | undefined
  htmlDefinition?: DocumentHtmlDefinition | undefined
}
type DocumentHtmlDefinitionOriginals = {
  htmlDefinitions?: DocumentHtmlDefinitionOriginal[] | undefined
}
type PageImages = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  pages?: Page[] | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type PageRequest = { password?: string | undefined; rotate?: string | undefined }
type EnvelopeDocumentTabs = {
  approveTabs?: Approve[] | undefined
  checkboxTabs?: Checkbox[] | undefined
  commentThreadTabs?: CommentThread[] | undefined
  commissionCountyTabs?: CommissionCounty[] | undefined
  commissionExpirationTabs?: CommissionExpiration[] | undefined
  commissionNumberTabs?: CommissionNumber[] | undefined
  commissionStateTabs?: CommissionState[] | undefined
  companyTabs?: Company[] | undefined
  currencyTabs?: Currency[] | undefined
  dateSignedTabs?: DateSigned[] | undefined
  dateTabs?: Date[] | undefined
  declineTabs?: Decline[] | undefined
  drawTabs?: Draw[] | undefined
  emailAddressTabs?: EmailAddress[] | undefined
  emailTabs?: Email[] | undefined
  envelopeIdTabs?: EnvelopeId[] | undefined
  firstNameTabs?: FirstName[] | undefined
  formulaTabs?: FormulaTab[] | undefined
  fullNameTabs?: FullName[] | undefined
  initialHereTabs?: InitialHere[] | undefined
  lastNameTabs?: LastName[] | undefined
  listTabs?: List[] | undefined
  notarizeTabs?: Notarize[] | undefined
  notarySealTabs?: NotarySeal[] | undefined
  noteTabs?: Note[] | undefined
  numberTabs?: Number[] | undefined
  numericalTabs?: Numerical[] | undefined
  phoneNumberTabs?: PhoneNumber[] | undefined
  polyLineOverlayTabs?: PolyLineOverlay[] | undefined
  prefillTabs?: PrefillTabs | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  signHereTabs?: SignHere[] | undefined
  signerAttachmentTabs?: SignerAttachment[] | undefined
  smartSectionTabs?: SmartSection[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  titleTabs?: Title[] | undefined
  viewTabs?: View[] | undefined
  zipTabs?: Zip[] | undefined
}
type DocumentHtmlDefinitions = { htmlDefinitions?: string[] | undefined }
type Tabs = {
  approveTabs?: Approve[] | undefined
  checkboxTabs?: Checkbox[] | undefined
  commentThreadTabs?: CommentThread[] | undefined
  commissionCountyTabs?: CommissionCounty[] | undefined
  commissionExpirationTabs?: CommissionExpiration[] | undefined
  commissionNumberTabs?: CommissionNumber[] | undefined
  commissionStateTabs?: CommissionState[] | undefined
  companyTabs?: Company[] | undefined
  currencyTabs?: Currency[] | undefined
  dateSignedTabs?: DateSigned[] | undefined
  dateTabs?: Date[] | undefined
  declineTabs?: Decline[] | undefined
  drawTabs?: Draw[] | undefined
  emailAddressTabs?: EmailAddress[] | undefined
  emailTabs?: Email[] | undefined
  envelopeIdTabs?: EnvelopeId[] | undefined
  firstNameTabs?: FirstName[] | undefined
  formulaTabs?: FormulaTab[] | undefined
  fullNameTabs?: FullName[] | undefined
  initialHereTabs?: InitialHere[] | undefined
  lastNameTabs?: LastName[] | undefined
  listTabs?: List[] | undefined
  notarizeTabs?: Notarize[] | undefined
  notarySealTabs?: NotarySeal[] | undefined
  noteTabs?: Note[] | undefined
  numberTabs?: Number[] | undefined
  numericalTabs?: Numerical[] | undefined
  phoneNumberTabs?: PhoneNumber[] | undefined
  polyLineOverlayTabs?: PolyLineOverlay[] | undefined
  prefillTabs?: PrefillTabs | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  signHereTabs?: SignHere[] | undefined
  signerAttachmentTabs?: SignerAttachment[] | undefined
  smartSectionTabs?: SmartSection[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  titleTabs?: Title[] | undefined
  viewTabs?: View[] | undefined
  zipTabs?: Zip[] | undefined
}
type TemplateMatch = {
  documentEndPage?: string | undefined
  documentStartPage?: string | undefined
  matchPercentage?: string | undefined
}
type TemplateSummary = {
  applied?: string | undefined
  documentId?: string | undefined
  documentName?: string | undefined
  errorDetails?: ErrorDetails | undefined
  name?: string | undefined
  templateId?: string | undefined
  templateMatch?: TemplateMatch | undefined
  uri?: string | undefined
}
type TemplateInformation = { templates?: TemplateSummary[] | undefined }
type DocumentTemplate = {
  documentEndPage?: string | undefined
  documentId?: string | undefined
  documentStartPage?: string | undefined
  errorDetails?: ErrorDetails | undefined
  templateId?: string | undefined
}
type DocumentTemplateList = { documentTemplates?: DocumentTemplate[] | undefined }
type FormDataItem = {
  errorDetails?: ErrorDetails | undefined
  listSelectedValue?: string | undefined
  name?: string | undefined
  numericalValue?: string | undefined
  originalValue?: string | undefined
  value?: string | undefined
}
type PrefillFormData = {
  formData?: FormDataItem[] | undefined
  senderEmail?: string | undefined
  senderName?: string | undefined
  senderUserId?: string | undefined
}
type RecipientFormData = {
  declinedTime?: string | undefined
  deliveredTime?: string | undefined
  email?: string | undefined
  formData?: FormDataItem[] | undefined
  name?: string | undefined
  recipientId?: string | undefined
  sentTime?: string | undefined
  signedTime?: string | undefined
}
type EnvelopeFormData2 = {
  emailSubject?: string | undefined
  envelopeId?: string | undefined
  formData?: FormDataItem[] | undefined
  prefillFormData?: PrefillFormData | undefined
  recipientFormData?: RecipientFormData[] | undefined
  sentDateTime?: string | undefined
  status?: string | undefined
}
type LockRequest = {
  lockDurationInSeconds?: string | undefined
  lockType?: string | undefined
  lockedByApp?: string | undefined
  templatePassword?: string | undefined
  useScratchPad?: string | undefined
}
type EnvelopeNotificationRequest = {
  expirations?: Expirations | undefined
  reminders?: Reminders | undefined
  useAccountDefaults?: string | undefined
}
type RecipientsUpdateSummary = { recipientUpdateResults?: RecipientUpdateResponse[] | undefined }
type DocumentVisibilityList = { documentVisibility?: DocumentVisibility[] | undefined }
type IdEvidenceResourceToken = {
  proofBaseURI?: string | undefined
  resourceToken?: string | undefined
}
type UserSignature = {
  adoptedDateTime?: string | undefined
  createdDateTime?: string | undefined
  customField?: string | undefined
  dateStampProperties?: DateStampProperties | undefined
  disallowUserResizeStamp?: string | undefined
  errorDetails?: ErrorDetails | undefined
  externalID?: string | undefined
  imageBase64?: string | undefined
  imageType?: string | undefined
  initials150ImageId?: string | undefined
  initialsImageUri?: string | undefined
  isDefault?: string | undefined
  lastModifiedDateTime?: string | undefined
  nrdsId?: string | undefined
  nrdsLastName?: string | undefined
  nrdsStatus?: string | undefined
  phoneticName?: string | undefined
  signature150ImageId?: string | undefined
  signatureFont?: string | undefined
  signatureId?: string | undefined
  signatureImageUri?: string | undefined
  signatureInitials?: string | undefined
  signatureName?: string | undefined
  signatureRights?: string | undefined
  signatureType?: string | undefined
  stampFormat?: string | undefined
  stampImageUri?: string | undefined
  stampSizeMM?: string | undefined
  stampType?: string | undefined
  status?: string | undefined
}
type ViewUrl = { url?: string | undefined }
type CorrectViewRequest = {
  beginOnTagger?: string | undefined
  returnUrl?: string | undefined
  suppressNavigation?: string | undefined
  viewUrl?: string | undefined
}
type EnvelopeViews = { url?: string | undefined }
type ReturnUrlRequest = { returnUrl?: string | undefined }
type RecipientPreviewRequest = {
  assertionId?: string | undefined
  authenticationInstant?: string | undefined
  authenticationMethod?: string | undefined
  clientURLs?: RecipientTokenClientURLs | undefined
  pingFrequency?: string | undefined
  pingUrl?: string | undefined
  recipientId?: string | undefined
  returnUrl?: string | undefined
  securityDomain?: string | undefined
  xFrameOptions?: string | undefined
  xFrameOptionsAllowFromUrl?: string | undefined
}
type FavoriteTemplatesContentItem = {
  errorDetails?: ErrorDetails | undefined
  favoritedDate?: string | undefined
  templateId?: string | undefined
}
type FavoriteTemplatesInfo = {
  errorDetails?: ErrorDetails | undefined
  favoriteTemplates?: FavoriteTemplatesContentItem[] | undefined
  templatesUpdatedCount?: number | undefined
}
type FoldersResponse = {
  endPosition?: string | undefined
  envelopes?: EnvelopeSummary[] | undefined
  folders?: Folder[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type FolderItemsResponse = {
  endPosition?: string | undefined
  envelopes?: EnvelopeSummary[] | undefined
  folders?: Folder[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type FoldersRequest = {
  envelopeIds?: string[] | undefined
  folders?: Folder[] | undefined
  fromFolderId?: string | undefined
}
type GroupInformation = {
  endPosition?: string | undefined
  groups?: Group[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type GroupBrands = {
  brandOptions?: Brand[] | undefined
  recipientBrandIdDefault?: string | undefined
  senderBrandIdDefault?: string | undefined
}
type UserInfoList = { users?: UserInfo[] | undefined }
type UsersResponse = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  users?: UserInfo[] | undefined
}
type AccountIdentityVerificationResponse = {
  identityVerification?: AccountIdentityVerificationWorkflow[] | undefined
}
type PaymentGatewayAccountSetting = {
  apiFields?: string | undefined
  authorizationCode?: string | undefined
  credentialStatus?: string | undefined
  merchantId?: string | undefined
}
type PayPalLegacySettings = {
  currency?: string | undefined
  partner?: string | undefined
  password?: string | undefined
  userName?: string | undefined
  vendor?: string | undefined
}
type PaymentMethodWithOptions = {
  supportedCurrencies?: string[] | undefined
  supportedOptions?: string[] | undefined
  type?: string | undefined
}
type PaymentGatewayAccount = {
  allowCustomMetadata?: boolean | undefined
  config?: PaymentGatewayAccountSetting | undefined
  displayName?: string | undefined
  isEnabled?: string | undefined
  isLegacy?: string | undefined
  lastModified?: string | undefined
  payPalLegacySettings?: PayPalLegacySettings | undefined
  paymentGateway?: string | undefined
  paymentGatewayAccountId?: string | undefined
  paymentGatewayDisplayName?: string | undefined
  supportedCurrencies?: string[] | undefined
  supportedPaymentMethods?: string[] | undefined
  supportedPaymentMethodsWithOptions?: PaymentMethodWithOptions[] | undefined
  zeroDecimalCurrencies?: string[] | undefined
}
type PaymentGatewayAccountsInfo = { paymentGatewayAccounts?: PaymentGatewayAccount[] | undefined }
type AccountRoleSettings = {
  allowAccountManagement?: string | undefined
  allowAccountManagementMetadata?: SettingsMetadata | undefined
  allowApiAccess?: string | undefined
  allowApiAccessMetadata?: SettingsMetadata | undefined
  allowApiAccessToAccount?: string | undefined
  allowApiAccessToAccountMetadata?: SettingsMetadata | undefined
  allowApiSendingOnBehalfOfOthers?: string | undefined
  allowApiSendingOnBehalfOfOthersMetadata?: SettingsMetadata | undefined
  allowApiSequentialSigning?: string | undefined
  allowApiSequentialSigningMetadata?: SettingsMetadata | undefined
  allowAutoTagging?: string | undefined
  allowAutoTaggingMetadata?: SettingsMetadata | undefined
  allowBulkSending?: string | undefined
  allowBulkSendingMetadata?: SettingsMetadata | undefined
  allowDocuSignDesktopClient?: string | undefined
  allowDocuSignDesktopClientMetadata?: SettingsMetadata | undefined
  allowESealRecipients?: string | undefined
  allowESealRecipientsMetadata?: SettingsMetadata | undefined
  allowEnvelopeSending?: string | undefined
  allowEnvelopeSendingMetadata?: SettingsMetadata | undefined
  allowPowerFormsAdminToAccessAllPowerFormEnvelopes?: string | undefined
  allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata?: SettingsMetadata | undefined
  allowSendersToSetRecipientEmailLanguage?: string | undefined
  allowSendersToSetRecipientEmailLanguageMetadata?: SettingsMetadata | undefined
  allowSignerAttachments?: string | undefined
  allowSignerAttachmentsMetadata?: SettingsMetadata | undefined
  allowSupplementalDocuments?: string | undefined
  allowSupplementalDocumentsMetadata?: SettingsMetadata | undefined
  allowTaggingInSendAndCorrect?: string | undefined
  allowTaggingInSendAndCorrectMetadata?: SettingsMetadata | undefined
  allowVaulting?: string | undefined
  allowVaultingMetadata?: SettingsMetadata | undefined
  allowWetSigningOverride?: string | undefined
  allowWetSigningOverrideMetadata?: SettingsMetadata | undefined
  allowedAddressBookAccess?: string | undefined
  allowedAddressBookAccessMetadata?: SettingsMetadata | undefined
  allowedClickwrapsAccess?: string | undefined
  allowedClickwrapsAccessMetadata?: SettingsMetadata | undefined
  allowedTemplateAccess?: string | undefined
  allowedTemplateAccessMetadata?: SettingsMetadata | undefined
  allowedToBeEnvelopeTransferRecipient?: string | undefined
  allowedToBeEnvelopeTransferRecipientMetadata?: SettingsMetadata | undefined
  canCreateWorkspaces?: string | undefined
  canCreateWorkspacesMetadata?: SettingsMetadata | undefined
  canSendEnvelopesViaSMS?: string | undefined
  canSendEnvelopesViaSMSMetadata?: SettingsMetadata | undefined
  disableDocumentUpload?: string | undefined
  disableDocumentUploadMetadata?: SettingsMetadata | undefined
  disableOtherActions?: string | undefined
  disableOtherActionsMetadata?: SettingsMetadata | undefined
  enableApiRequestLogging?: string | undefined
  enableApiRequestLoggingMetadata?: SettingsMetadata | undefined
  enableKeyTermsSuggestionsByDocumentType?: string | undefined
  enableKeyTermsSuggestionsByDocumentTypeMetadata?: SettingsMetadata | undefined
  enableRecipientViewingNotifications?: string | undefined
  enableRecipientViewingNotificationsMetadata?: SettingsMetadata | undefined
  enableSequentialSigningInterface?: string | undefined
  enableSequentialSigningInterfaceMetadata?: SettingsMetadata | undefined
  enableTransactionPointIntegration?: string | undefined
  enableTransactionPointIntegrationMetadata?: SettingsMetadata | undefined
  powerFormRole?: string | undefined
  powerFormRoleMetadata?: SettingsMetadata | undefined
  receiveCompletedSelfSignedDocumentsAsEmailLinks?: string | undefined
  receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata?: SettingsMetadata | undefined
  signingUiVersionMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustAccept?: string | undefined
  supplementalDocumentsMustAcceptMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustRead?: string | undefined
  supplementalDocumentsMustReadMetadata?: SettingsMetadata | undefined
  supplementalDocumentsMustView?: string | undefined
  supplementalDocumentsMustViewMetadata?: SettingsMetadata | undefined
  useNewDocuSignExperienceInterface?: string | undefined
  useNewDocuSignExperienceInterfaceMetadata?: SettingsMetadata | undefined
  useNewSendingInterface?: string | undefined
  useNewSendingInterfaceMetadata?: SettingsMetadata | undefined
  vaultingMode?: string | undefined
  vaultingModeMetadata?: SettingsMetadata | undefined
  webForms?: string | undefined
  webFormsMetadata?: SettingsMetadata | undefined
}
type PermissionProfile = {
  modifiedByUsername?: string | undefined
  modifiedDateTime?: string | undefined
  permissionProfileId?: string | undefined
  permissionProfileName?: string | undefined
  settings?: AccountRoleSettings | undefined
  userCount?: string | undefined
  users?: UserInformation[] | undefined
}
type PermissionProfileInformation = { permissionProfiles?: PermissionProfile[] | undefined }
type PowerFormsRequest = { powerForms?: PowerForm[] | undefined }
type PowerFormsResponse = {
  endPosition?: number | undefined
  nextUri?: string | undefined
  powerForms?: PowerForm[] | undefined
  previousUri?: string | undefined
  resultSetSize?: number | undefined
  startPosition?: number | undefined
  totalSetSize?: number | undefined
}
type PowerFormSendersResponse = {
  endPosition?: number | undefined
  nextUri?: string | undefined
  powerFormSenders?: UserInfo[] | undefined
  previousUri?: string | undefined
  resultSetSize?: number | undefined
  startPosition?: number | undefined
  totalSetSize?: number | undefined
}
type PowerFormFormDataRecipient = {
  email?: string | undefined
  formData?: NameValue[] | undefined
  name?: string | undefined
  recipientId?: string | undefined
}
type PowerFormFormDataEnvelope = {
  envelopeId?: string | undefined
  recipients?: PowerFormFormDataRecipient[] | undefined
}
type PowerFormsFormDataResponse = { envelopes?: PowerFormFormDataEnvelope[] | undefined }
type RecipientNamesResponse = {
  multipleUsers?: string | undefined
  recipientNames?: string[] | undefined
  reservedRecipientEmail?: string | undefined
}
type AccountSealProviders = { seals?: SealIdentifier[] | undefined }
type FolderItemResponse = {
  endPosition?: string | undefined
  folderItems?: FolderItemV2[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalRows?: string | undefined
}
type BccEmailArchive = {
  accountId?: string | undefined
  bccEmailArchiveId?: string | undefined
  created?: string | undefined
  createdBy?: UserInfo | undefined
  email?: string | undefined
  emailNotificationId?: string | undefined
  modified?: string | undefined
  modifiedBy?: UserInfo | undefined
  status?: string | undefined
  uri?: string | undefined
}
type BccEmailArchiveList = {
  bccEmailArchives?: BccEmailArchive[] | undefined
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type BccEmailArchiveHistory = {
  accountId?: string | undefined
  action?: string | undefined
  email?: string | undefined
  modified?: string | undefined
  modifiedBy?: UserInfo | undefined
  status?: string | undefined
}
type BccEmailArchiveHistoryList = {
  bccEmailArchiveHistory?: BccEmailArchiveHistory[] | undefined
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type ENoteConfiguration = {
  apiKey?: string | undefined
  connectConfigured?: string | undefined
  eNoteConfigured?: string | undefined
  organization?: string | undefined
  password?: string | undefined
  userName?: string | undefined
}
type EnvelopePurgeConfiguration = {
  purgeEnvelopes?: string | undefined
  redactPII?: string | undefined
  removeTabsAndEnvelopeAttachments?: string | undefined
  retentionDays?: string | undefined
}
type NotificationDefaultSettings = {
  senderEmailNotifications?: SenderEmailNotifications | undefined
  signerEmailNotifications?: SignerEmailNotifications | undefined
}
type NotificationDefaults2 = {
  apiEmailNotifications?: NotificationDefaultSettings | undefined
  emailNotifications?: NotificationDefaultSettings | undefined
}
type AccountPasswordExpirePasswordDays = {
  maximumDays?: string | undefined
  minimumDays?: string | undefined
}
type AccountPasswordLockoutDurationMinutes = {
  maximumMinutes?: string | undefined
  minimumMinutes?: string | undefined
}
type AccountPasswordLockoutDurationType = { options?: string[] | undefined }
type AccountPasswordMinimumPasswordAgeDays = {
  maximumAge?: string | undefined
  minimumAge?: string | undefined
}
type AccountMinimumPasswordLength = {
  maximumLength?: string | undefined
  minimumLength?: string | undefined
}
type AccountPasswordStrengthTypeOption = {
  minimumLength?: string | undefined
  name?: string | undefined
  passwordIncludeDigit?: string | undefined
  passwordIncludeDigitOrSpecialCharacter?: string | undefined
  passwordIncludeLowerCase?: string | undefined
  passwordIncludeSpecialCharacter?: string | undefined
  passwordIncludeUpperCase?: string | undefined
}
type AccountPasswordStrengthType = { options?: AccountPasswordStrengthTypeOption[] | undefined }
type AccountPasswordQuestionsRequired = {
  maximumQuestions?: string | undefined
  minimumQuestions?: string | undefined
}
type AccountPasswordRules2 = {
  expirePassword?: string | undefined
  expirePasswordDays?: string | undefined
  expirePasswordDaysMetadata?: AccountPasswordExpirePasswordDays | undefined
  lockoutDurationMinutes?: string | undefined
  lockoutDurationMinutesMetadata?: AccountPasswordLockoutDurationMinutes | undefined
  lockoutDurationType?: string | undefined
  lockoutDurationTypeMetadata?: AccountPasswordLockoutDurationType | undefined
  minimumPasswordAgeDays?: string | undefined
  minimumPasswordAgeDaysMetadata?: AccountPasswordMinimumPasswordAgeDays | undefined
  minimumPasswordLength?: string | undefined
  minimumPasswordLengthMetadata?: AccountMinimumPasswordLength | undefined
  passwordIncludeDigit?: string | undefined
  passwordIncludeDigitOrSpecialCharacter?: string | undefined
  passwordIncludeLowerCase?: string | undefined
  passwordIncludeSpecialCharacter?: string | undefined
  passwordIncludeUpperCase?: string | undefined
  passwordStrengthType?: string | undefined
  passwordStrengthTypeMetadata?: AccountPasswordStrengthType | undefined
  questionsRequired?: string | undefined
  questionsRequiredMetadata?: AccountPasswordQuestionsRequired | undefined
}
type SharedItem = {
  errorDetails?: ErrorDetails | undefined
  shared?: string | undefined
  user?: UserInfo | undefined
}
type MemberGroupSharedItem = {
  errorDetails?: ErrorDetails | undefined
  group?: Group | undefined
  shared?: string | undefined
}
type UserSharedItem = {
  errorDetails?: ErrorDetails | undefined
  shared?: string | undefined
  user?: UserInfo | undefined
}
type FolderSharedItem = {
  errorDetails?: ErrorDetails | undefined
  folderId?: string | undefined
  name?: string | undefined
  owner?: UserInfo | undefined
  parentFolderId?: string | undefined
  parentFolderUri?: string | undefined
  shared?: string | undefined
  sharedGroups?: MemberGroupSharedItem[] | undefined
  sharedUsers?: UserSharedItem[] | undefined
  uri?: string | undefined
  user?: UserInfo | undefined
}
type TemplateSharedItem = {
  errorDetails?: ErrorDetails | undefined
  owner?: UserInfo | undefined
  password?: string | undefined
  shared?: string | undefined
  sharedGroups?: MemberGroupSharedItem[] | undefined
  sharedUsers?: UserSharedItem[] | undefined
  templateId?: string | undefined
  templateName?: string | undefined
}
type MemberSharedItems = {
  envelopes?: SharedItem[] | undefined
  errorDetails?: ErrorDetails | undefined
  folders?: FolderSharedItem[] | undefined
  templates?: TemplateSharedItem[] | undefined
  user?: UserInfo | undefined
}
type AccountSharedAccess = {
  accountId?: string | undefined
  endPosition?: string | undefined
  errorDetails?: ErrorDetails | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  sharedAccess?: MemberSharedItems[] | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type AccountSignatureProviders2 = { signatureProviders?: AccountSignatureProvider[] | undefined }
type SignatureGroup = {
  groupId?: string | undefined
  groupName?: string | undefined
  rights?: string | undefined
}
type SignatureUser = {
  isDefault?: string | undefined
  rights?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
}
type AccountSignature = {
  adoptedDateTime?: string | undefined
  createdDateTime?: string | undefined
  customField?: string | undefined
  dateStampProperties?: DateStampProperties | undefined
  disallowUserResizeStamp?: string | undefined
  errorDetails?: ErrorDetails | undefined
  externalID?: string | undefined
  imageBase64?: string | undefined
  imageType?: string | undefined
  initials150ImageId?: string | undefined
  initialsImageUri?: string | undefined
  isDefault?: string | undefined
  lastModifiedDateTime?: string | undefined
  nrdsId?: string | undefined
  nrdsLastName?: string | undefined
  nrdsStatus?: string | undefined
  phoneticName?: string | undefined
  signature150ImageId?: string | undefined
  signatureFont?: string | undefined
  signatureGroups?: SignatureGroup[] | undefined
  signatureId?: string | undefined
  signatureImageUri?: string | undefined
  signatureInitials?: string | undefined
  signatureName?: string | undefined
  signatureRights?: string | undefined
  signatureType?: string | undefined
  signatureUsers?: SignatureUser[] | undefined
  stampFormat?: string | undefined
  stampImageUri?: string | undefined
  stampSizeMM?: string | undefined
  stampType?: string | undefined
  status?: string | undefined
}
type AccountSignaturesInformation = { accountSignatures?: AccountSignature[] | undefined }
type SignatureGroupDef = { groupId?: string | undefined; rights?: string | undefined }
type SignatureUserDef = {
  isDefault?: string | undefined
  rights?: string | undefined
  userId?: string | undefined
}
type AccountSignatureDefinition = {
  dateStampProperties?: DateStampProperties | undefined
  disallowUserResizeStamp?: string | undefined
  externalID?: string | undefined
  imageType?: string | undefined
  isDefault?: string | undefined
  nrdsId?: string | undefined
  nrdsLastName?: string | undefined
  phoneticName?: string | undefined
  signatureFont?: string | undefined
  signatureGroups?: SignatureGroupDef[] | undefined
  signatureId?: string | undefined
  signatureInitials?: string | undefined
  signatureName?: string | undefined
  signatureType?: string | undefined
  signatureUsers?: SignatureUserDef[] | undefined
  stampFormat?: string | undefined
  stampSizeMM?: string | undefined
}
type SigningGroupUser = {
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  userName?: string | undefined
}
type SigningGroup = {
  created?: string | undefined
  createdBy?: string | undefined
  errorDetails?: ErrorDetails | undefined
  groupEmail?: string | undefined
  groupName?: string | undefined
  groupType?: string | undefined
  modified?: string | undefined
  modifiedBy?: string | undefined
  signingGroupId?: string | undefined
  users?: SigningGroupUser[] | undefined
}
type SigningGroupInformation = { groups?: SigningGroup[] | undefined }
type SigningGroupUsers2 = { users?: SigningGroupUser[] | undefined }
type SupportedLanguages = { languages?: NameValue[] | undefined }
type TabMetadata = {
  anchor?: string | undefined
  anchorCaseSensitive?: string | undefined
  anchorHorizontalAlignment?: string | undefined
  anchorIgnoreIfNotPresent?: string | undefined
  anchorMatchWholeWord?: string | undefined
  anchorUnits?: string | undefined
  anchorXOffset?: string | undefined
  anchorYOffset?: string | undefined
  bold?: string | undefined
  collaborative?: string | undefined
  concealValueOnDocument?: string | undefined
  createdByDisplayName?: string | undefined
  createdByUserId?: string | undefined
  customTabId?: string | undefined
  disableAutoSize?: string | undefined
  editable?: string | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontSize?: string | undefined
  height?: string | undefined
  includedInEmail?: string | undefined
  initialValue?: string | undefined
  italic?: string | undefined
  items?: string[] | undefined
  lastModified?: string | undefined
  lastModifiedByDisplayName?: string | undefined
  lastModifiedByUserId?: string | undefined
  localePolicy?: LocalePolicyTab | undefined
  locked?: string | undefined
  maxNumericalValue?: string | undefined
  maximumLength?: string | undefined
  mergeField?: MergeField | undefined
  minNumericalValue?: string | undefined
  name?: string | undefined
  numericalValue?: string | undefined
  paymentItemCode?: string | undefined
  paymentItemDescription?: string | undefined
  paymentItemName?: string | undefined
  requireAll?: string | undefined
  requireInitialOnSharedChange?: string | undefined
  required?: string | undefined
  scaleValue?: string | undefined
  selected?: string | undefined
  shared?: string | undefined
  signatureProviderId?: string | undefined
  stampType?: string | undefined
  stampTypeMetadata?: PropertyMetadata | undefined
  tabLabel?: string | undefined
  type?: string | undefined
  underline?: string | undefined
  validationMessage?: string | undefined
  validationPattern?: string | undefined
  validationType?: string | undefined
  width?: string | undefined
}
type TabMetadataList = { tabs?: TabMetadata[] | undefined }
type EnvelopeTemplate = {
  accessControlListBase64?: string | undefined
  allowComments?: string | undefined
  allowMarkup?: string | undefined
  allowReassign?: string | undefined
  allowViewHistory?: string | undefined
  anySigner?: string | undefined
  asynchronous?: string | undefined
  attachmentsUri?: string | undefined
  authoritativeCopy?: string | undefined
  authoritativeCopyDefault?: string | undefined
  autoMatch?: string | undefined
  autoMatchSpecifiedByUser?: string | undefined
  autoNavigation?: string | undefined
  brandId?: string | undefined
  brandLock?: string | undefined
  burnDefaultTabData?: string | undefined
  certificateUri?: string | undefined
  completedDateTime?: string | undefined
  copyRecipientData?: string | undefined
  created?: string | undefined
  createdDateTime?: string | undefined
  customFields?: AccountCustomFields | undefined
  customFieldsUri?: string | undefined
  declinedDateTime?: string | undefined
  deletedDateTime?: string | undefined
  deliveredDateTime?: string | undefined
  description?: string | undefined
  disableResponsiveDocument?: string | undefined
  documentBase64?: string | undefined
  documents?: Document[] | undefined
  documentsCombinedUri?: string | undefined
  documentsUri?: string | undefined
  emailBlurb?: string | undefined
  emailSettings?: EmailSettings | undefined
  emailSubject?: string | undefined
  enableWetSign?: string | undefined
  enforceSignerVisibility?: string | undefined
  envelopeAttachments?: Attachment[] | undefined
  envelopeCustomMetadata?: EnvelopeCustomMetadata | undefined
  envelopeDocuments?: EnvelopeDocument[] | undefined
  envelopeId?: string | undefined
  envelopeIdStamping?: string | undefined
  envelopeLocation?: string | undefined
  envelopeMetadata?: EnvelopeMetadata | undefined
  envelopeUri?: string | undefined
  expireAfter?: string | undefined
  expireDateTime?: string | undefined
  expireEnabled?: string | undefined
  externalEnvelopeId?: string | undefined
  favoritedByMe?: string | undefined
  folderId?: string | undefined
  folderIds?: string[] | undefined
  folderName?: string | undefined
  folders?: Folder[] | undefined
  hasComments?: string | undefined
  hasFormDataChanged?: string | undefined
  hasWavFile?: string | undefined
  holder?: string | undefined
  initialSentDateTime?: string | undefined
  is21CFRPart11?: string | undefined
  isDocGenTemplate?: string | undefined
  isDynamicEnvelope?: string | undefined
  isSignatureProviderEnvelope?: string | undefined
  lastModified?: string | undefined
  lastModifiedBy?: UserInfo | undefined
  lastModifiedDateTime?: string | undefined
  lastUsed?: string | undefined
  location?: string | undefined
  lockInformation?: EnvelopeLocks | undefined
  messageLock?: string | undefined
  name?: string | undefined
  newPassword?: string | undefined
  notification?: Notification | undefined
  notificationUri?: string | undefined
  owner?: UserInfo | undefined
  pageCount?: string | undefined
  password?: string | undefined
  passwordProtected?: string | undefined
  powerForm?: PowerForm | undefined
  powerForms?: PowerForm[] | undefined
  purgeCompletedDate?: string | undefined
  purgeRequestDate?: string | undefined
  purgeState?: string | undefined
  recipients?: EnvelopeRecipients | undefined
  recipientsLock?: string | undefined
  recipientsUri?: string | undefined
  sender?: UserInfo | undefined
  sentDateTime?: string | undefined
  shared?: string | undefined
  signerCanSignOnMobile?: string | undefined
  signingLocation?: string | undefined
  status?: string | undefined
  statusChangedDateTime?: string | undefined
  statusDateTime?: string | undefined
  templateId?: string | undefined
  templatesUri?: string | undefined
  transactionId?: string | undefined
  uri?: string | undefined
  useDisclosure?: string | undefined
  voidedDateTime?: string | undefined
  voidedReason?: string | undefined
  workflow?: Workflow | undefined
}
type EnvelopeTemplateResults = {
  endPosition?: string | undefined
  envelopeTemplates?: EnvelopeTemplate[] | undefined
  folders?: Folder[] | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type TemplateUpdateSummary = {
  bulkEnvelopeStatus?: BulkEnvelopeStatus | undefined
  envelopeId?: string | undefined
  errorDetails?: ErrorDetails | undefined
  listCustomFieldUpdateResults?: ListCustomField[] | undefined
  lockInformation?: EnvelopeLocks | undefined
  purgeState?: string | undefined
  recipientUpdateResults?: RecipientUpdateResponse[] | undefined
  tabUpdateResults?: EnvelopeRecipientTabs | undefined
  textCustomFieldUpdateResults?: TextCustomField[] | undefined
}
type TemplateCustomFields2 = {
  listCustomFields?: ListCustomField[] | undefined
  textCustomFields?: TextCustomField[] | undefined
}
type CustomFields = {
  listCustomFields?: ListCustomField[] | undefined
  textCustomFields?: TextCustomField[] | undefined
}
type TemplateDocumentsResult = {
  templateDocuments?: EnvelopeDocument[] | undefined
  templateId?: string | undefined
}
type DocumentFieldsInformation = { documentFields?: NameValue[] | undefined }
type TemplateDocumentTabs = {
  approveTabs?: Approve[] | undefined
  checkboxTabs?: Checkbox[] | undefined
  commentThreadTabs?: CommentThread[] | undefined
  commissionCountyTabs?: CommissionCounty[] | undefined
  commissionExpirationTabs?: CommissionExpiration[] | undefined
  commissionNumberTabs?: CommissionNumber[] | undefined
  commissionStateTabs?: CommissionState[] | undefined
  companyTabs?: Company[] | undefined
  currencyTabs?: Currency[] | undefined
  dateSignedTabs?: DateSigned[] | undefined
  dateTabs?: Date[] | undefined
  declineTabs?: Decline[] | undefined
  drawTabs?: Draw[] | undefined
  emailAddressTabs?: EmailAddress[] | undefined
  emailTabs?: Email[] | undefined
  envelopeIdTabs?: EnvelopeId[] | undefined
  firstNameTabs?: FirstName[] | undefined
  formulaTabs?: FormulaTab[] | undefined
  fullNameTabs?: FullName[] | undefined
  initialHereTabs?: InitialHere[] | undefined
  lastNameTabs?: LastName[] | undefined
  listTabs?: List[] | undefined
  notarizeTabs?: Notarize[] | undefined
  notarySealTabs?: NotarySeal[] | undefined
  noteTabs?: Note[] | undefined
  numberTabs?: Number[] | undefined
  numericalTabs?: Numerical[] | undefined
  phoneNumberTabs?: PhoneNumber[] | undefined
  polyLineOverlayTabs?: PolyLineOverlay[] | undefined
  prefillTabs?: PrefillTabs | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  signHereTabs?: SignHere[] | undefined
  signerAttachmentTabs?: SignerAttachment[] | undefined
  smartSectionTabs?: SmartSection[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  titleTabs?: Title[] | undefined
  viewTabs?: View[] | undefined
  zipTabs?: Zip[] | undefined
}
type TemplateTabs = {
  approveTabs?: Approve[] | undefined
  checkboxTabs?: Checkbox[] | undefined
  commentThreadTabs?: CommentThread[] | undefined
  commissionCountyTabs?: CommissionCounty[] | undefined
  commissionExpirationTabs?: CommissionExpiration[] | undefined
  commissionNumberTabs?: CommissionNumber[] | undefined
  commissionStateTabs?: CommissionState[] | undefined
  companyTabs?: Company[] | undefined
  currencyTabs?: Currency[] | undefined
  dateSignedTabs?: DateSigned[] | undefined
  dateTabs?: Date[] | undefined
  declineTabs?: Decline[] | undefined
  drawTabs?: Draw[] | undefined
  emailAddressTabs?: EmailAddress[] | undefined
  emailTabs?: Email[] | undefined
  envelopeIdTabs?: EnvelopeId[] | undefined
  firstNameTabs?: FirstName[] | undefined
  formulaTabs?: FormulaTab[] | undefined
  fullNameTabs?: FullName[] | undefined
  initialHereTabs?: InitialHere[] | undefined
  lastNameTabs?: LastName[] | undefined
  listTabs?: List[] | undefined
  notarizeTabs?: Notarize[] | undefined
  notarySealTabs?: NotarySeal[] | undefined
  noteTabs?: Note[] | undefined
  numberTabs?: Number[] | undefined
  numericalTabs?: Numerical[] | undefined
  phoneNumberTabs?: PhoneNumber[] | undefined
  polyLineOverlayTabs?: PolyLineOverlay[] | undefined
  prefillTabs?: PrefillTabs | undefined
  radioGroupTabs?: RadioGroup[] | undefined
  signHereTabs?: SignHere[] | undefined
  signerAttachmentTabs?: SignerAttachment[] | undefined
  smartSectionTabs?: SmartSection[] | undefined
  ssnTabs?: Ssn[] | undefined
  tabGroups?: TabGroup[] | undefined
  textTabs?: Text[] | undefined
  titleTabs?: Title[] | undefined
  viewTabs?: View[] | undefined
  zipTabs?: Zip[] | undefined
}
type LockInformation = {
  errorDetails?: ErrorDetails | undefined
  lockDurationInSeconds?: string | undefined
  lockToken?: string | undefined
  lockType?: string | undefined
  lockedByApp?: string | undefined
  lockedByUser?: UserInfo | undefined
  lockedUntilDateTime?: string | undefined
  useScratchPad?: string | undefined
}
type TemplateNotificationRequest = {
  expirations?: Expirations | undefined
  password?: string | undefined
  reminders?: Reminders | undefined
  useAccountDefaults?: string | undefined
}
type TemplateRecipients2 = {
  agents?: Agent[] | undefined
  carbonCopies?: CarbonCopy[] | undefined
  certifiedDeliveries?: CertifiedDelivery[] | undefined
  currentRoutingOrder?: string | undefined
  editors?: Editor[] | undefined
  errorDetails?: ErrorDetails | undefined
  inPersonSigners?: InPersonSigner[] | undefined
  intermediaries?: Intermediary[] | undefined
  notaries?: NotaryRecipient[] | undefined
  participants?: Participant[] | undefined
  recipientCount?: string | undefined
  seals?: SealSign[] | undefined
  signers?: Signer[] | undefined
  witnesses?: Witness[] | undefined
}
type Recipients = {
  agents?: Agent[] | undefined
  carbonCopies?: CarbonCopy[] | undefined
  certifiedDeliveries?: CertifiedDelivery[] | undefined
  currentRoutingOrder?: string | undefined
  editors?: Editor[] | undefined
  errorDetails?: ErrorDetails | undefined
  inPersonSigners?: InPersonSigner[] | undefined
  intermediaries?: Intermediary[] | undefined
  notaries?: NotaryRecipient[] | undefined
  participants?: Participant[] | undefined
  recipientCount?: string | undefined
  seals?: SealSign[] | undefined
  signers?: Signer[] | undefined
  witnesses?: Witness[] | undefined
}
type TemplateDocumentVisibilityList = { documentVisibility?: DocumentVisibility[] | undefined }
type BulkRecipientsUpdateResponse = { signer?: Signer | undefined }
type FileType = { fileExtension?: string | undefined; mimeType?: string | undefined }
type FileTypeList = { fileTypes?: FileType[] | undefined }
type UserInformationList = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  users?: UserInformation[] | undefined
}
type NewUsersDefinition = { newUsers?: UserInformation[] | undefined }
type NewUser = {
  apiPassword?: string | undefined
  createdDateTime?: string | undefined
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  membershipId?: string | undefined
  permissionProfileId?: string | undefined
  permissionProfileName?: string | undefined
  uri?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
  userStatus?: string | undefined
}
type NewUsersSummary = { newUsers?: NewUser[] | undefined }
type CloudStorageProvider = {
  authenticationUrl?: string | undefined
  errorDetails?: ErrorDetails | undefined
  redirectUrl?: string | undefined
  service?: string | undefined
  serviceId?: string | undefined
}
type CloudStorageProviders2 = { storageProviders?: CloudStorageProvider[] | undefined }
type ExternalDocServiceErrorDetails = {
  authenticationUrl?: string | undefined
  errorCode?: string | undefined
  message?: string | undefined
}
type ExternalFile = {
  date?: string | undefined
  hasCompositeTemplate?: string | undefined
  id?: string | undefined
  img?: string | undefined
  name?: string | undefined
  ownerName?: string | undefined
  size?: string | undefined
  supported?: string | undefined
  type?: string | undefined
  uri?: string | undefined
}
type ExternalFolder = {
  endPosition?: string | undefined
  errorDetails?: ExternalDocServiceErrorDetails | undefined
  id?: string | undefined
  items?: ExternalFile[] | undefined
  name?: string | undefined
  nextUri?: string | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type CustomSettingsInformation = { customSettings?: NameValue[] | undefined }
type AuthenticationMethod = {
  authenticationType?: string | undefined
  lastProvider?: string | undefined
  lastTimestamp?: string | undefined
  totalCount?: string | undefined
}
type UsageHistory = {
  lastSentDateTime?: string | undefined
  lastSignedDateTime?: string | undefined
  sentCount?: string | undefined
  signedCount?: string | undefined
}
type UserProfile = {
  address?: AddressInformation | undefined
  authenticationMethods?: AuthenticationMethod[] | undefined
  companyName?: string | undefined
  displayOrganizationInfo?: string | undefined
  displayPersonalInfo?: string | undefined
  displayProfile?: string | undefined
  displayUsageHistory?: string | undefined
  profileImageUri?: string | undefined
  title?: string | undefined
  usageHistory?: UsageHistory | undefined
  userDetails?: UserInformation | undefined
  userProfileLastModifiedDate?: string | undefined
}
type UserSignaturesInformation = { userSignatures?: UserSignature[] | undefined }
type UserSignatureDefinition = {
  dateStampProperties?: DateStampProperties | undefined
  disallowUserResizeStamp?: string | undefined
  externalID?: string | undefined
  imageType?: string | undefined
  isDefault?: string | undefined
  nrdsId?: string | undefined
  nrdsLastName?: string | undefined
  phoneticName?: string | undefined
  signatureFont?: string | undefined
  signatureId?: string | undefined
  signatureInitials?: string | undefined
  signatureName?: string | undefined
  signatureType?: string | undefined
  stampFormat?: string | undefined
  stampSizeMM?: string | undefined
}
type ConsoleViewRequest = { envelopeId?: string | undefined; returnUrl?: string | undefined }
type Watermark = {
  displayAngle?: string | undefined
  enabled?: string | undefined
  font?: string | undefined
  fontColor?: string | undefined
  fontSize?: string | undefined
  id?: string | undefined
  imageBase64?: string | undefined
  transparency?: string | undefined
  watermarkText?: string | undefined
}
type WorkspaceUser = {
  accountId?: string | undefined
  accountName?: string | undefined
  activeSince?: string | undefined
  created?: string | undefined
  createdById?: string | undefined
  email?: string | undefined
  errorDetails?: ErrorDetails | undefined
  invitationEmailBlurb?: string | undefined
  invitationEmailSubject?: string | undefined
  lastModified?: string | undefined
  lastModifiedById?: string | undefined
  status?: string | undefined
  type?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
  workspaceId?: string | undefined
  workspaceUserBaseUrl?: string | undefined
  workspaceUserId?: string | undefined
  workspaceUserUri?: string | undefined
}
type WorkspaceSettings = { commentsAllowed?: string | undefined }
type Workspace = {
  billableAccountId?: string | undefined
  callerInformation?: WorkspaceUser | undefined
  created?: string | undefined
  createdByInformation?: WorkspaceUser | undefined
  lastModified?: string | undefined
  lastModifiedByInformation?: WorkspaceUser | undefined
  settings?: WorkspaceSettings | undefined
  status?: string | undefined
  workspaceBaseUrl?: string | undefined
  workspaceDescription?: string | undefined
  workspaceId?: string | undefined
  workspaceName?: string | undefined
  workspaceUri?: string | undefined
}
type WorkspaceList = {
  endPosition?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  workspaces?: Workspace[] | undefined
}
type WorkspaceUserAuthorization = {
  canDelete?: string | undefined
  canMove?: string | undefined
  canTransact?: string | undefined
  canView?: string | undefined
  created?: string | undefined
  createdById?: string | undefined
  errorDetails?: ErrorDetails | undefined
  modified?: string | undefined
  modifiedById?: string | undefined
  workspaceUserId?: string | undefined
  workspaceUserInformation?: WorkspaceUser | undefined
}
type WorkspaceItem = {
  callerAuthorization?: WorkspaceUserAuthorization | undefined
  contentType?: string | undefined
  created?: string | undefined
  createdById?: string | undefined
  createdByInformation?: WorkspaceUser | undefined
  extension?: string | undefined
  fileSize?: string | undefined
  fileUri?: string | undefined
  id?: string | undefined
  isPublic?: string | undefined
  lastModified?: string | undefined
  lastModifiedById?: string | undefined
  lastModifiedByInformation?: WorkspaceUser | undefined
  name?: string | undefined
  pageCount?: string | undefined
  parentFolderId?: string | undefined
  parentFolderUri?: string | undefined
  sha256?: string | undefined
  thumbHeight?: string | undefined
  thumbWidth?: string | undefined
  thumbnail?: Page | undefined
  type?: string | undefined
  uri?: string | undefined
  userAuthorization?: WorkspaceUserAuthorization | undefined
}
type WorkspaceItemList = { items?: WorkspaceItem[] | undefined }
type WorkspaceFolderContents = {
  endPosition?: string | undefined
  folder?: WorkspaceItem | undefined
  items?: WorkspaceItem[] | undefined
  parentFolders?: WorkspaceItem[] | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
  workspaceId?: string | undefined
}
type BillingPlansResponse = { billingPlans?: BillingPlan[] | undefined }
type BillingPlanResponse = {
  billingPlan?: BillingPlan | undefined
  successorPlans?: BillingPlan[] | undefined
}
type Jurisdiction = {
  allowSystemCreatedSeal?: string | undefined
  allowUserUploadedSeal?: string | undefined
  commissionIdInSeal?: string | undefined
  county?: string | undefined
  countyInSeal?: string | undefined
  enabled?: string | undefined
  jurisdictionId?: string | undefined
  name?: string | undefined
  notaryPublicInSeal?: string | undefined
  stateNameInSeal?: string | undefined
}
type Notary2 = {
  createdDate?: string | undefined
  enabled?: string | undefined
  searchable?: string | undefined
  userInfo?: UserInformation | undefined
}
type NotaryResult = { jurisdictions?: Jurisdiction[] | undefined; notary?: Notary2 | undefined }
type NotaryJournalCredibleWitness = {
  address?: string | undefined
  name?: string | undefined
  signatureImage?: string | undefined
}
type NotaryJournalMetaData = {
  comment?: string | undefined
  credibleWitnesses?: NotaryJournalCredibleWitness[] | undefined
  signatureImage?: string | undefined
  signerIdType?: string | undefined
}
type NotaryJournal = {
  createdDate?: string | undefined
  documentName?: string | undefined
  jurisdiction?: Jurisdiction | undefined
  notaryJournalId?: string | undefined
  notaryJournalMetaData?: NotaryJournalMetaData | undefined
  signerName?: string | undefined
}
type NotaryJournalList = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  notaryJournals?: NotaryJournal[] | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type NotaryJurisdiction2 = {
  commissionExpiration?: string | undefined
  commissionId?: string | undefined
  county?: string | undefined
  errorDetails?: ErrorDetails | undefined
  jurisdiction?: Jurisdiction | undefined
  registeredName?: string | undefined
  sealType?: string | undefined
}
type NotaryJurisdictionList = {
  endPosition?: string | undefined
  nextUri?: string | undefined
  notaryJurisdictions?: NotaryJurisdiction2[] | undefined
  previousUri?: string | undefined
  resultSetSize?: string | undefined
  startPosition?: string | undefined
  totalSetSize?: string | undefined
}
type UserPasswordRules = {
  passwordRules?: AccountPasswordRules2 | undefined
  userId?: string | undefined
}
type ApiRequestLog = {
  createdDateTime?: string | undefined
  description?: string | undefined
  requestLogId?: string | undefined
  status?: string | undefined
}
type ApiRequestLogsResult = { apiRequestLogs?: ApiRequestLog[] | undefined }
type DiagnosticsSettingsInformation = {
  apiRequestLogMaxEntries?: string | undefined
  apiRequestLogRemainingEntries?: string | undefined
  apiRequestLogging?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/service_information': {
      $get:
        | { input: {}; output: ServiceInformation; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1': {
      $get:
        | { input: {}; output: ResourceInformation; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1/accounts': {
      $post:
        | {
            input: { json: NewAccountDefinition }
            output: NewAccountSummary
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: NewAccountDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/provisioning': {
      $get:
        | { input: {}; output: ProvisioningInformation; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1/accounts/:accountId': {
      $delete:
        | { input: { param: { accountId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { include_account_settings?: string | undefined }
            }
            output: AccountInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { include_account_settings?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_charges': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { include_charges?: string | undefined }
            }
            output: BillingChargeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { include_charges?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_invoices': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: BillingInvoicesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_invoices/:invoiceId': {
      $get:
        | {
            input: { param: { accountId: string; invoiceId: string } }
            output: BillingInvoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; invoiceId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_invoices_past_due': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: BillingInvoicesSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_payments': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: BillingPaymentsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: BillingPaymentRequest }
            output: BillingPaymentResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: BillingPaymentRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_payments/:paymentId': {
      $get:
        | {
            input: { param: { accountId: string; paymentId: string } }
            output: BillingPaymentItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; paymentId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_plan': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                include_credit_card_information?: string | undefined
                include_downgrade_information?: string | undefined
                include_metadata?: string | undefined
                include_successor_plans?: string | undefined
                include_tax_exempt_id?: string | undefined
              }
            }
            output: AccountBillingPlanResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                include_credit_card_information?: string | undefined
                include_downgrade_information?: string | undefined
                include_metadata?: string | undefined
                include_successor_plans?: string | undefined
                include_tax_exempt_id?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & {
              query: { preview_billing_plan?: string | undefined }
            } & { json: BillingPlanInformation }
            output: BillingPlanUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { preview_billing_plan?: string | undefined }
            } & { json: BillingPlanInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_plan/credit_card': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: CreditCardInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_plan/downgrade': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: DowngradRequestBillingInfoResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: DowngradeBillingPlanInformation }
            output: DowngradePlanUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: DowngradeBillingPlanInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/billing_plan/purchased_envelopes': {
      $put:
        | {
            input: { param: { accountId: string } } & { json: PurchasedEnvelopesInformation }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: PurchasedEnvelopesInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: BrandsRequest }
            output: AccountBrands
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: BrandsRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                exclude_distributor_brand?: string | undefined
                include_logos?: string | undefined
              }
            }
            output: AccountBrands
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                exclude_distributor_brand?: string | undefined
                include_logos?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: Brand }
            output: AccountBrands
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: Brand }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands/:brandId': {
      $delete:
        | {
            input: { param: { accountId: string; brandId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; brandId: string } } & {
              query: {
                include_external_references?: string | undefined
                include_logos?: string | undefined
              }
            }
            output: Brand
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string } } & {
              query: {
                include_external_references?: string | undefined
                include_logos?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; brandId: string } } & {
              query: { replace_brand?: string | undefined }
            } & { json: Brand }
            output: Brand
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string } } & {
              query: { replace_brand?: string | undefined }
            } & { json: Brand }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands/:brandId/file': {
      $get:
        | {
            input: { param: { accountId: string; brandId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands/:brandId/logos/:logoType': {
      $delete:
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string; logoType: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands/:brandId/resources': {
      $get:
        | {
            input: { param: { accountId: string; brandId: string } }
            output: BrandResourcesList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; brandId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/brands/:brandId/resources/:resourceContentType': {
      $get:
        | {
            input: {
              param: { accountId: string; brandId: string; resourceContentType: string }
            } & { query: { langcode?: string | undefined; return_master?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { accountId: string; brandId: string; resourceContentType: string }
            } & { query: { langcode?: string | undefined; return_master?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: {
              param: { accountId: string; brandId: string; resourceContentType: string }
            } & { form: { 'file.xml': File } }
            output: BrandResources
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; brandId: string; resourceContentType: string }
            } & { form: { 'file.xml': File } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_batch': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                batch_ids?: string | undefined
                count?: string | undefined
                from_date?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                user_id?: string | undefined
              }
            }
            output: BulkSendBatchSummaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                batch_ids?: string | undefined
                count?: string | undefined
                from_date?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                user_id?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId': {
      $get:
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } }
            output: BulkSendBatchStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } } & {
              json: BulkSendBatchRequest
            }
            output: BulkSendBatchStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } } & {
              json: BulkSendBatchRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId/envelopes': {
      $get:
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } } & {
              query: {
                count?: string | undefined
                include?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
              }
            }
            output: EnvelopesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendBatchId: string } } & {
              query: {
                count?: string | undefined
                include?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_batch/:bulkSendBatchId/:bulkAction': {
      $put:
        | {
            input: { param: { accountId: string; bulkAction: string; bulkSendBatchId: string } } & {
              json: BulkSendBatchActionRequest
            }
            output: BulkSendBatchStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkAction: string; bulkSendBatchId: string } } & {
              json: BulkSendBatchActionRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_lists': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: BulkSendingListSummaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: BulkSendingList }
            output: BulkSendingList
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: BulkSendingList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId': {
      $delete:
        | {
            input: { param: { accountId: string; bulkSendListId: string } }
            output: BulkSendingListSummaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendListId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; bulkSendListId: string } }
            output: BulkSendingList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendListId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendingList
            }
            output: BulkSendingList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendingList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId/send': {
      $post:
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendRequest
            }
            output: BulkSendResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/bulk_send_lists/:bulkSendListId/test': {
      $post:
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendRequest
            }
            output: BulkSendTestResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; bulkSendListId: string } } & {
              json: BulkSendRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/captive_recipients/:recipientPart': {
      $delete:
        | {
            input: { param: { accountId: string; recipientPart: string } } & {
              json: CaptiveRecipientInformation
            }
            output: CaptiveRecipientInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientPart: string } } & {
              json: CaptiveRecipientInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/chunked_uploads': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: ChunkedUploadRequest }
            output: ChunkedUploadResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ChunkedUploadRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId': {
      $delete:
        | {
            input: { param: { accountId: string; chunkedUploadId: string } }
            output: ChunkedUploadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; chunkedUploadId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; chunkedUploadId: string } } & {
              query: { include?: string | undefined }
            }
            output: ChunkedUploadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; chunkedUploadId: string } } & {
              query: { include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; chunkedUploadId: string } } & {
              query: { action?: string | undefined }
            }
            output: ChunkedUploadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; chunkedUploadId: string } } & {
              query: { action?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/chunked_uploads/:chunkedUploadId/:chunkedUploadPartSeq': {
      $put:
        | {
            input: {
              param: { accountId: string; chunkedUploadId: string; chunkedUploadPartSeq: string }
            } & { json: ChunkedUploadRequest }
            output: ChunkedUploadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; chunkedUploadId: string; chunkedUploadPartSeq: string }
            } & { json: ChunkedUploadRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: ConnectConfigResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: ConnectCustomConfiguration }
            output: ConnectCustomConfiguration
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectCustomConfiguration }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: ConnectCustomConfiguration }
            output: ConnectCustomConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectCustomConfiguration }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/envelopes/publish/historical': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: ConnectHistoricalEnvelopeRepublish }
            output: EnvelopePublishTransaction
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectHistoricalEnvelopeRepublish }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/envelopes/retry_queue': {
      $put:
        | {
            input: { param: { accountId: string } } & { json: ConnectFailureFilter }
            output: ConnectFailureResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectFailureFilter }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/envelopes/:envelopeId/retry_queue': {
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ConnectFailureResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/failures': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ConnectLogs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/failures/:failureId': {
      $delete:
        | {
            input: { param: { accountId: string; failureId: string } }
            output: ConnectDeleteFailureResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; failureId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/logs': {
      $delete:
        | { input: { param: { accountId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ConnectLogs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/logs/:logId': {
      $delete:
        | {
            input: { param: { accountId: string; logId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; logId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; logId: string } } & {
              query: { additional_info?: string | undefined }
            }
            output: ConnectLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; logId: string } } & {
              query: { additional_info?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/oauth': {
      $delete:
        | { input: { param: { accountId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } }
            output: ConnectOAuthConfig
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: ConnectOAuthConfig }
            output: ConnectOAuthConfig
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectOAuthConfig }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: ConnectOAuthConfig }
            output: ConnectOAuthConfig
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ConnectOAuthConfig }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/:connectId': {
      $delete:
        | {
            input: { param: { accountId: string; connectId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; connectId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; connectId: string } }
            output: ConnectConfigResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; connectId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/:connectId/all/users': {
      $get:
        | {
            input: { param: { accountId: string; connectId: string } } & {
              query: {
                count?: string | undefined
                domain_users_only?: string | undefined
                email_substring?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: IntegratedConnectUserInfoList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; connectId: string } } & {
              query: {
                count?: string | undefined
                domain_users_only?: string | undefined
                email_substring?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/connect/:connectId/users': {
      $get:
        | {
            input: { param: { accountId: string; connectId: string } } & {
              query: {
                count?: string | undefined
                email_substring?: string | undefined
                list_included_users?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: IntegratedUserInfoList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; connectId: string } } & {
              query: {
                count?: string | undefined
                email_substring?: string | undefined
                list_included_users?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/consumer_disclosure': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { langCode?: string | undefined } }
            output: AccountConsumerDisclosures
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { langCode?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/consumer_disclosure/:langCode': {
      $get:
        | {
            input: { param: { accountId: string; langCode: string } }
            output: AccountConsumerDisclosures
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; langCode: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; langCode: string } } & {
              query: { include_metadata?: string | undefined }
            } & { json: ConsumerDisclosure }
            output: ConsumerDisclosure
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; langCode: string } } & {
              query: { include_metadata?: string | undefined }
            } & { json: ConsumerDisclosure }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/contacts': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ContactUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ContactUpdateResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ContactUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ContactModRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/contacts/:contactId': {
      $delete:
        | {
            input: { param: { accountId: string; contactId: string } }
            output: ContactUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; contactId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; contactId: string } } & {
              query: { cloud_provider?: string | undefined }
            }
            output: ContactGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; contactId: string } } & {
              query: { cloud_provider?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/custom_fields': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountCustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & {
              query: { apply_to_templates?: string | undefined }
            } & { json: CustomField }
            output: AccountCustomFields
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & {
              query: { apply_to_templates?: string | undefined }
            } & { json: CustomField }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/custom_fields/:customFieldId': {
      $delete:
        | {
            input: { param: { accountId: string; customFieldId: string } } & {
              query: { apply_to_templates?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; customFieldId: string } } & {
              query: { apply_to_templates?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; customFieldId: string } } & {
              query: { apply_to_templates?: string | undefined }
            } & { json: CustomField }
            output: AccountCustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; customFieldId: string } } & {
              query: { apply_to_templates?: string | undefined }
            } & { json: CustomField }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                ac_status?: string | undefined
                block?: string | undefined
                cdse_mode?: string | undefined
                continuation_token?: string | undefined
                count?: string | undefined
                custom_field?: string | undefined
                email?: string | undefined
                envelope_ids?: string | undefined
                exclude?: string | undefined
                folder_ids?: string | undefined
                folder_types?: string | undefined
                from_date?: string | undefined
                from_to_status?: string | undefined
                include?: string | undefined
                include_purge_information?: string | undefined
                intersecting_folder_ids?: string | undefined
                last_queried_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                powerformids?: string | undefined
                query_budget?: string | undefined
                requester_date_format?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                transaction_ids?: string | undefined
                user_filter?: string | undefined
                user_id?: string | undefined
                user_name?: string | undefined
              }
            }
            output: EnvelopesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                ac_status?: string | undefined
                block?: string | undefined
                cdse_mode?: string | undefined
                continuation_token?: string | undefined
                count?: string | undefined
                custom_field?: string | undefined
                email?: string | undefined
                envelope_ids?: string | undefined
                exclude?: string | undefined
                folder_ids?: string | undefined
                folder_types?: string | undefined
                from_date?: string | undefined
                from_to_status?: string | undefined
                include?: string | undefined
                include_purge_information?: string | undefined
                intersecting_folder_ids?: string | undefined
                last_queried_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                powerformids?: string | undefined
                query_budget?: string | undefined
                requester_date_format?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                transaction_ids?: string | undefined
                user_filter?: string | undefined
                user_id?: string | undefined
                user_name?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & {
              query: {
                cdse_mode?: string | undefined
                change_routing_order?: string | undefined
                completed_documents_only?: string | undefined
                merge_roles_on_draft?: string | undefined
              }
            } & { json: EnvelopeDefinition }
            output: EnvelopeSummary
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                cdse_mode?: string | undefined
                change_routing_order?: string | undefined
                completed_documents_only?: string | undefined
                merge_roles_on_draft?: string | undefined
              }
            } & { json: EnvelopeDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/status': {
      $put:
        | {
            input: { param: { accountId: string } } & {
              query: {
                ac_status?: string | undefined
                block?: string | undefined
                count?: string | undefined
                email?: string | undefined
                envelope_ids?: string | undefined
                from_date?: string | undefined
                from_to_status?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                transaction_ids?: string | undefined
                user_name?: string | undefined
              }
            } & { json: EnvelopeIdsRequest }
            output: EnvelopesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                ac_status?: string | undefined
                block?: string | undefined
                count?: string | undefined
                email?: string | undefined
                envelope_ids?: string | undefined
                from_date?: string | undefined
                from_to_status?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
                transaction_ids?: string | undefined
                user_name?: string | undefined
              }
            } & { json: EnvelopeIdsRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/transfer_rules': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: EnvelopeTransferRuleInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTransferRuleRequest }
            output: EnvelopeTransferRuleInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTransferRuleRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTransferRuleInformation }
            output: EnvelopeTransferRuleInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTransferRuleInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/transfer_rules/:envelopeTransferRuleId': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeTransferRuleId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeTransferRuleId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeTransferRuleId: string } } & {
              json: EnvelopeTransferRule
            }
            output: EnvelopeTransferRule
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeTransferRuleId: string } } & {
              json: EnvelopeTransferRule
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { advanced_update?: string | undefined; include?: string | undefined }
            }
            output: Envelope
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { advanced_update?: string | undefined; include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { advanced_update?: string | undefined; resend_envelope?: string | undefined }
            } & { json: Envelope }
            output: EnvelopeUpdateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { advanced_update?: string | undefined; resend_envelope?: string | undefined }
            } & { json: Envelope }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeAttachmentsRequest
            }
            output: EnvelopeAttachmentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeAttachmentsRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EnvelopeAttachmentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeAttachmentsRequest
            }
            output: EnvelopeAttachmentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeAttachmentsRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/attachments/:attachmentId': {
      $get:
        | {
            input: { param: { accountId: string; attachmentId: string; envelopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; attachmentId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; attachmentId: string; envelopeId: string } } & {
              json: Attachment
            }
            output: EnvelopeAttachmentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; attachmentId: string; envelopeId: string } } & {
              json: Attachment
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/audit_events': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EnvelopeAuditEventResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/comments/transcript': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { encoding?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { encoding?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/custom_fields': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: EnvelopeCustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: CustomFieldsEnvelope
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: EnvelopeCustomFields
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: EnvelopeCustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeCustomFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeDefinition
            }
            output: EnvelopeDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                documents_by_userid?: string | undefined
                include_docgen_formfields?: string | undefined
                include_metadata?: string | undefined
                include_tabs?: string | undefined
                recipient_id?: string | undefined
                shared_user_id?: string | undefined
              }
            }
            output: EnvelopeDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                documents_by_userid?: string | undefined
                include_docgen_formfields?: string | undefined
                include_metadata?: string | undefined
                include_tabs?: string | undefined
                recipient_id?: string | undefined
                shared_user_id?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeDefinition
            }
            output: EnvelopeDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: {
                certificate?: string | undefined
                documents_by_userid?: string | undefined
                encoding?: string | undefined
                encrypt?: string | undefined
                language?: string | undefined
                recipient_id?: string | undefined
                shared_user_id?: string | undefined
                show_changes?: string | undefined
                watermark?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: {
                certificate?: string | undefined
                documents_by_userid?: string | undefined
                encoding?: string | undefined
                encrypt?: string | undefined
                language?: string | undefined
                recipient_id?: string | undefined
                shared_user_id?: string | undefined
                show_changes?: string | undefined
                watermark?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: File
            }
            output: EnvelopeDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: File
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/fields': {
      $delete:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: EnvelopeDocumentFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } }
            output: EnvelopeDocumentFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: EnvelopeDocumentFields
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: EnvelopeDocumentFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: EnvelopeDocumentFields
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/html_definitions': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } }
            output: DocumentHtmlDefinitionOriginals
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                nocache?: string | undefined
                show_changes?: string | undefined
                start_position?: string | undefined
              }
            }
            output: PageImages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                nocache?: string | undefined
                show_changes?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber': {
      $delete:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber/page_image': {
      $get:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            } & {
              query: {
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                show_changes?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            } & {
              query: {
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                show_changes?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            } & { json: PageRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            } & { json: PageRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/pages/:pageNumber/tabs': {
      $get:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            }
            output: EnvelopeDocumentTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                pageNumber: string
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/responsive_html_preview': {
      $post:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: DocumentHtmlDefinitions
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/tabs': {
      $delete:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { include_metadata?: string | undefined; page_numbers?: string | undefined }
            }
            output: EnvelopeDocumentTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { include_metadata?: string | undefined; page_numbers?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              json: Tabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/templates': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { include?: string | undefined }
            }
            output: TemplateInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { preserve_template_recipient?: string | undefined }
            } & { json: DocumentTemplateList }
            output: DocumentTemplateList
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; envelopeId: string } } & {
              query: { preserve_template_recipient?: string | undefined }
            } & { json: DocumentTemplateList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/documents/:documentId/templates/:templateId': {
      $delete:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                templateId: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                envelopeId: string
                templateId: string
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/email_settings': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EmailSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EmailSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: EmailSettings }
            output: EmailSettings
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: EmailSettings }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: EmailSettings }
            output: EmailSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: EmailSettings }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/form_data': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EnvelopeFormData2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/html_definitions': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: DocumentHtmlDefinitionOriginals
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/lock': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EnvelopeLocks
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: EnvelopeLocks
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: LockRequest }
            output: EnvelopeLocks
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: LockRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: LockRequest }
            output: EnvelopeLocks
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: LockRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/notification': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeNotificationRequest
            }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeNotificationRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeRecipients
            }
            output: EnvelopeRecipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: EnvelopeRecipients
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_extended?: string | undefined
                include_metadata?: string | undefined
                include_tabs?: string | undefined
              }
            }
            output: EnvelopeRecipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_extended?: string | undefined
                include_metadata?: string | undefined
                include_tabs?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: EnvelopeRecipients }
            output: EnvelopeRecipients
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: EnvelopeRecipients }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                combine_same_order_recipients?: string | undefined
                offline_signing?: string | undefined
                resend_envelope?: string | undefined
              }
            } & { json: EnvelopeRecipients }
            output: RecipientsUpdateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: {
                combine_same_order_recipients?: string | undefined
                offline_signing?: string | undefined
                resend_envelope?: string | undefined
              }
            } & { json: EnvelopeRecipients }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/document_visibility': {
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: DocumentVisibilityList
            }
            output: DocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: DocumentVisibilityList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: EnvelopeRecipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/consumer_disclosure': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { langCode?: string | undefined }
            }
            output: ConsumerDisclosure
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { langCode?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/consumer_disclosure/:langCode': {
      $get:
        | {
            input: {
              param: {
                accountId: string
                envelopeId: string
                langCode: string
                recipientId: string
              }
            } & { query: { langCode?: string | undefined } }
            output: ConsumerDisclosure
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                envelopeId: string
                langCode: string
                recipientId: string
              }
            } & { query: { langCode?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/document_visibility': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: DocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: DocumentVisibilityList
            }
            output: DocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: DocumentVisibilityList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/identity_proof_token': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: IdEvidenceResourceToken
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/initials_image': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/signature': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: UserSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/signature_image': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/tabs': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: EnvelopeRecipientTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_metadata?: string | undefined
              }
            }
            output: EnvelopeRecipientTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_metadata?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: EnvelopeRecipientTabs
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: EnvelopeRecipientTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } } & {
              json: EnvelopeRecipientTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/recipients/:recipientId/views/identity_manual_review': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ViewUrl
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string; recipientId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/responsive_html_preview': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: DocumentHtmlDefinitions
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/tabs_blob': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/templates': {
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { include?: string | undefined }
            }
            output: TemplateInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { preserve_template_recipient?: string | undefined }
            } & { json: DocumentTemplateList }
            output: DocumentTemplateList
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              query: { preserve_template_recipient?: string | undefined }
            } & { json: DocumentTemplateList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/correct': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: CorrectViewRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: CorrectViewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: CorrectViewRequest
            }
            output: EnvelopeViews
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: CorrectViewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/edit': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ReturnUrlRequest }
            output: EnvelopeViews
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ReturnUrlRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/recipient': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientViewRequest
            }
            output: EnvelopeViews
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientViewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/recipient_preview': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientPreviewRequest
            }
            output: ViewUrl
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientPreviewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/sender': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ReturnUrlRequest }
            output: EnvelopeViews
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ReturnUrlRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/views/shared': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientViewRequest
            }
            output: ViewUrl
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & {
              json: RecipientViewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: Workflow
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: Workflow }
            output: Workflow
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: Workflow }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/scheduledSending': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ScheduledSending
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ScheduledSending }
            output: ScheduledSending
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: ScheduledSending }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps': {
      $post:
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: WorkflowStep }
            output: WorkflowStep
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; envelopeId: string } } & { json: WorkflowStep }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: WorkflowStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } } & {
              json: WorkflowStep
            }
            output: WorkflowStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } } & {
              json: WorkflowStep
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/envelopes/:envelopeId/workflow/steps/:workflowStepId/delayedRouting': {
      $delete:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: DelayedRouting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } } & {
              json: DelayedRouting
            }
            output: DelayedRouting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; envelopeId: string; workflowStepId: string } } & {
              json: DelayedRouting
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/favorite_templates': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: FavoriteTemplatesInfo }
            output: FavoriteTemplatesInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: FavoriteTemplatesInfo }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } }
            output: FavoriteTemplatesInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: FavoriteTemplatesInfo }
            output: FavoriteTemplatesInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: FavoriteTemplatesInfo }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/folders': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                include?: string | undefined
                include_items?: string | undefined
                start_position?: string | undefined
                sub_folder_depth?: string | undefined
                template?: string | undefined
                user_filter?: string | undefined
              }
            }
            output: FoldersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                include?: string | undefined
                include_items?: string | undefined
                start_position?: string | undefined
                sub_folder_depth?: string | undefined
                template?: string | undefined
                user_filter?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/folders/:folderId': {
      $get:
        | {
            input: { param: { accountId: string; folderId: string } } & {
              query: {
                from_date?: string | undefined
                include_items?: string | undefined
                owner_email?: string | undefined
                owner_name?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
              }
            }
            output: FolderItemsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; folderId: string } } & {
              query: {
                from_date?: string | undefined
                include_items?: string | undefined
                owner_email?: string | undefined
                owner_name?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; folderId: string } } & { json: FoldersRequest }
            output: FoldersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; folderId: string } } & { json: FoldersRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/groups': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: GroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                group_type?: string | undefined
                include_usercount?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: GroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                group_type?: string | undefined
                include_usercount?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: GroupInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: GroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: GroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/groups/:groupId/brands': {
      $delete:
        | {
            input: { param: { accountId: string; groupId: string } } & { json: BrandsRequest }
            output: GroupBrands
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } } & { json: BrandsRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; groupId: string } }
            output: GroupBrands
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; groupId: string } } & { json: BrandsRequest }
            output: GroupBrands
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } } & { json: BrandsRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/groups/:groupId/users': {
      $delete:
        | {
            input: { param: { accountId: string; groupId: string } } & { json: UserInfoList }
            output: UsersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } } & { json: UserInfoList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; groupId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: UsersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; groupId: string } } & { json: UserInfoList }
            output: UsersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; groupId: string } } & { json: UserInfoList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/identity_verification': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountIdentityVerificationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/payment_gateway_accounts': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: PaymentGatewayAccountsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/permission_profiles': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { include?: string | undefined } }
            output: PermissionProfileInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { include?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & {
              query: { include?: string | undefined }
            } & { json: PermissionProfile }
            output: PermissionProfile
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & {
              query: { include?: string | undefined }
            } & { json: PermissionProfile }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/permission_profiles/:permissionProfileId': {
      $delete:
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { move_users_to?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { move_users_to?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { include?: string | undefined }
            }
            output: PermissionProfile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { include?: string | undefined }
            } & { json: PermissionProfile }
            output: PermissionProfile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; permissionProfileId: string } } & {
              query: { include?: string | undefined }
            } & { json: PermissionProfile }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/powerforms': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: PowerFormsRequest }
            output: PowerFormsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: PowerFormsRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                from_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_fields?: string | undefined
                search_text?: string | undefined
                to_date?: string | undefined
              }
            }
            output: PowerFormsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                from_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_fields?: string | undefined
                search_text?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: PowerForm }
            output: PowerForm
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: PowerForm }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/powerforms/senders': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { start_position?: string | undefined }
            }
            output: PowerFormSendersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { start_position?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/powerforms/:powerFormId': {
      $delete:
        | {
            input: { param: { accountId: string; powerFormId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; powerFormId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; powerFormId: string } }
            output: PowerForm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; powerFormId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; powerFormId: string } } & { json: PowerForm }
            output: PowerForm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; powerFormId: string } } & { json: PowerForm }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/powerforms/:powerFormId/form_data': {
      $get:
        | {
            input: { param: { accountId: string; powerFormId: string } } & {
              query: {
                data_layout?: string | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: PowerFormsFormDataResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; powerFormId: string } } & {
              query: {
                data_layout?: string | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/recipient_names': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { email?: string | undefined } }
            output: RecipientNamesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { email?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/seals': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountSealProviders
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/search_folders/:searchFolderId': {
      $get:
        | {
            input: { param: { accountId: string; searchFolderId: string } } & {
              query: {
                all?: string | undefined
                count?: string | undefined
                from_date?: string | undefined
                include_recipients?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                start_position?: string | undefined
                to_date?: string | undefined
              }
            }
            output: FolderItemResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; searchFolderId: string } } & {
              query: {
                all?: string | undefined
                count?: string | undefined
                from_date?: string | undefined
                include_recipients?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                start_position?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: AccountSettingsInformation }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: AccountSettingsInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/bcc_email_archives': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: BccEmailArchiveList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: BccEmailArchive }
            output: BccEmailArchive
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: BccEmailArchive }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/bcc_email_archives/:bccEmailArchiveId': {
      $delete:
        | {
            input: { param: { accountId: string; bccEmailArchiveId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; bccEmailArchiveId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; bccEmailArchiveId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: BccEmailArchiveHistoryList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; bccEmailArchiveId: string } } & {
              query: { count?: string | undefined; start_position?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/enote_configuration': {
      $delete:
        | { input: { param: { accountId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } }
            output: ENoteConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: ENoteConfiguration }
            output: ENoteConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: ENoteConfiguration }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/envelope_purge_configuration': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: EnvelopePurgeConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: EnvelopePurgeConfiguration }
            output: EnvelopePurgeConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: EnvelopePurgeConfiguration }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/notification_defaults': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: NotificationDefaults2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: NotificationDefaults2 }
            output: NotificationDefaults2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: NotificationDefaults2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/password_rules': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountPasswordRules2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: AccountPasswordRules2 }
            output: AccountPasswordRules2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: AccountPasswordRules2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/settings/tabs': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: TabAccountSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: TabAccountSettings }
            output: TabAccountSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: TabAccountSettings }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/shared_access': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                envelopes_not_shared_user_status?: string | undefined
                folder_ids?: string | undefined
                item_type?: string | undefined
                search_text?: string | undefined
                shared?: string | undefined
                start_position?: string | undefined
                user_ids?: string | undefined
              }
            }
            output: AccountSharedAccess
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                envelopes_not_shared_user_status?: string | undefined
                folder_ids?: string | undefined
                item_type?: string | undefined
                search_text?: string | undefined
                shared?: string | undefined
                start_position?: string | undefined
                user_ids?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & {
              query: {
                item_type?: string | undefined
                preserve_existing_shared_access?: string | undefined
                user_ids?: string | undefined
              }
            } & { json: AccountSharedAccess }
            output: AccountSharedAccess
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                item_type?: string | undefined
                preserve_existing_shared_access?: string | undefined
                user_ids?: string | undefined
              }
            } & { json: AccountSharedAccess }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signatureProviders': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountSignatureProviders2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signatures': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                stamp_format?: string | undefined
                stamp_name?: string | undefined
                stamp_type?: string | undefined
              }
            }
            output: AccountSignaturesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                stamp_format?: string | undefined
                stamp_name?: string | undefined
                stamp_type?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & {
              query: { decode_only?: string | undefined }
            } & { json: AccountSignaturesInformation }
            output: AccountSignaturesInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & {
              query: { decode_only?: string | undefined }
            } & { json: AccountSignaturesInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: AccountSignaturesInformation }
            output: AccountSignaturesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: AccountSignaturesInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signatures/:signatureId': {
      $delete:
        | {
            input: { param: { accountId: string; signatureId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; signatureId: string } }
            output: AccountSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; signatureId: string } } & {
              query: { close_existing_signature?: string | undefined }
            } & { json: AccountSignatureDefinition }
            output: AccountSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string } } & {
              query: { close_existing_signature?: string | undefined }
            } & { json: AccountSignatureDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signatures/:signatureId/:imageType': {
      $delete:
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } }
            output: AccountSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } } & {
              query: { include_chrome?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } } & {
              query: { transparent_png?: string | undefined }
            }
            output: AccountSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; imageType: string; signatureId: string } } & {
              query: { transparent_png?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signing_groups': {
      $delete:
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: SigningGroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { group_type?: string | undefined; include_users?: string | undefined }
            }
            output: SigningGroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { group_type?: string | undefined; include_users?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: SigningGroupInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: SigningGroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: SigningGroupInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signing_groups/:signingGroupId': {
      $get:
        | {
            input: { param: { accountId: string; signingGroupId: string } }
            output: SigningGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signingGroupId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; signingGroupId: string } } & { json: SigningGroup }
            output: SigningGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signingGroupId: string } } & { json: SigningGroup }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/signing_groups/:signingGroupId/users': {
      $delete:
        | {
            input: { param: { accountId: string; signingGroupId: string } } & {
              json: SigningGroupUsers2
            }
            output: SigningGroupUsers2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signingGroupId: string } } & {
              json: SigningGroupUsers2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; signingGroupId: string } }
            output: SigningGroupUsers2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signingGroupId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; signingGroupId: string } } & {
              json: SigningGroupUsers2
            }
            output: SigningGroupUsers2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signingGroupId: string } } & {
              json: SigningGroupUsers2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/supported_languages': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: SupportedLanguages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/tab_definitions': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { custom_tab_only?: string | undefined }
            }
            output: TabMetadataList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { custom_tab_only?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: TabMetadata }
            output: TabMetadata
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: TabMetadata }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/tab_definitions/:customTabId': {
      $delete:
        | {
            input: { param: { accountId: string; customTabId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; customTabId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; customTabId: string } }
            output: TabMetadata
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; customTabId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; customTabId: string } } & { json: TabMetadata }
            output: TabMetadata
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; customTabId: string } } & { json: TabMetadata }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                created_from_date?: string | undefined
                created_to_date?: string | undefined
                folder_ids?: string | undefined
                folder_types?: string | undefined
                from_date?: string | undefined
                include?: string | undefined
                is_deleted_template_only?: string | undefined
                is_download?: string | undefined
                modified_from_date?: string | undefined
                modified_to_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_fields?: string | undefined
                search_text?: string | undefined
                shared_by_me?: string | undefined
                start_position?: string | undefined
                template_ids?: string | undefined
                to_date?: string | undefined
                used_from_date?: string | undefined
                used_to_date?: string | undefined
                user_filter?: string | undefined
                user_id?: string | undefined
              }
            }
            output: EnvelopeTemplateResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                count?: string | undefined
                created_from_date?: string | undefined
                created_to_date?: string | undefined
                folder_ids?: string | undefined
                folder_types?: string | undefined
                from_date?: string | undefined
                include?: string | undefined
                is_deleted_template_only?: string | undefined
                is_download?: string | undefined
                modified_from_date?: string | undefined
                modified_to_date?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_fields?: string | undefined
                search_text?: string | undefined
                shared_by_me?: string | undefined
                start_position?: string | undefined
                template_ids?: string | undefined
                to_date?: string | undefined
                used_from_date?: string | undefined
                used_to_date?: string | undefined
                user_filter?: string | undefined
                user_id?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTemplate }
            output: TemplateSummary
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: EnvelopeTemplate }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId': {
      $get:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { include?: string | undefined }
            }
            output: EnvelopeTemplate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { include?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: EnvelopeTemplate }
            output: TemplateUpdateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: EnvelopeTemplate }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/custom_fields': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: CustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: CustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: CustomFields
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: CustomFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateCustomFields2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: EnvelopeDefinition
            }
            output: TemplateDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: EnvelopeDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { include_tabs?: string | undefined }
            }
            output: TemplateDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { include_tabs?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: EnvelopeDefinition
            }
            output: TemplateDocumentsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: EnvelopeDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { encrypt?: string | undefined; show_changes?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { encrypt?: string | undefined; show_changes?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { is_envelope_definition?: string | undefined }
            } & { json: EnvelopeDefinition }
            output: EnvelopeDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { is_envelope_definition?: string | undefined }
            } & { json: EnvelopeDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/fields': {
      $delete:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: DocumentFieldsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } }
            output: DocumentFieldsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: DocumentFieldsInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: DocumentFieldsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentFieldsInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/html_definitions': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } }
            output: DocumentHtmlDefinitionOriginals
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages': {
      $get:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                nocache?: string | undefined
                show_changes?: string | undefined
                start_position?: string | undefined
              }
            }
            output: PageImages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                nocache?: string | undefined
                show_changes?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber': {
      $delete:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & { json: PageRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & { json: PageRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber/page_image': {
      $get:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & {
              query: {
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                show_changes?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & {
              query: {
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                show_changes?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & { json: PageRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            } & { json: PageRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/pages/:pageNumber/tabs': {
      $get:
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            }
            output: TemplateDocumentTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accountId: string
                documentId: string
                pageNumber: string
                templateId: string
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/responsive_html_preview': {
      $post:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: DocumentHtmlDefinitions
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/documents/:documentId/tabs': {
      $delete:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { page_numbers?: string | undefined }
            }
            output: TemplateDocumentTabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              query: { page_numbers?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; documentId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/html_definitions': {
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: DocumentHtmlDefinitionOriginals
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/lock': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: LockInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: LockInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: LockInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: LockInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: LockRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/notification': {
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateNotificationRequest
            }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateNotificationRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateRecipients2
            }
            output: Recipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateRecipients2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_extended?: string | undefined
                include_tabs?: string | undefined
              }
            }
            output: Recipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_extended?: string | undefined
                include_tabs?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: TemplateRecipients2 }
            output: Recipients
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: TemplateRecipients2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: TemplateRecipients2 }
            output: RecipientsUpdateSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              query: { resend_envelope?: string | undefined }
            } & { json: TemplateRecipients2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/document_visibility': {
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateDocumentVisibilityList
            }
            output: TemplateDocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: TemplateDocumentVisibilityList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId': {
      $delete:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateRecipients2
            }
            output: Recipients
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateRecipients2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/bulk_recipients': {
      $delete:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } }
            output: BulkRecipientsUpdateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/document_visibility': {
      $get:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } }
            output: DocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateDocumentVisibilityList
            }
            output: TemplateDocumentVisibilityList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateDocumentVisibilityList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/recipients/:recipientId/tabs': {
      $delete:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_metadata?: string | undefined
              }
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              query: {
                include_anchor_tab_locations?: string | undefined
                include_metadata?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: Tabs
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; recipientId: string; templateId: string } } & {
              json: TemplateTabs
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/responsive_html_preview': {
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: DocumentHtmlDefinitions
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: DocumentHtmlDefinition
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/views/edit': {
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: ReturnUrlRequest }
            output: ViewUrl
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: ReturnUrlRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/views/recipient_preview': {
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: RecipientPreviewRequest
            }
            output: ViewUrl
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & {
              json: RecipientPreviewRequest
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/workflow': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: Workflow
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: Workflow }
            output: Workflow
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: Workflow }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/scheduledSending': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ScheduledSending
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: ScheduledSending }
            output: ScheduledSending
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: ScheduledSending }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps': {
      $post:
        | {
            input: { param: { accountId: string; templateId: string } } & { json: WorkflowStep }
            output: WorkflowStep
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; templateId: string } } & { json: WorkflowStep }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: WorkflowStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } } & {
              json: WorkflowStep
            }
            output: WorkflowStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } } & {
              json: WorkflowStep
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/workflow/steps/:workflowStepId/delayedRouting': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: DelayedRouting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } } & {
              json: DelayedRouting
            }
            output: DelayedRouting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; workflowStepId: string } } & {
              json: DelayedRouting
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/templates/:templateId/:templatePart': {
      $delete:
        | {
            input: { param: { accountId: string; templateId: string; templatePart: string } } & {
              json: GroupInformation
            }
            output: GroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; templatePart: string } } & {
              json: GroupInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; templateId: string; templatePart: string } } & {
              json: GroupInformation
            }
            output: GroupInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; templateId: string; templatePart: string } } & {
              json: GroupInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/unsupported_file_types': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: FileTypeList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users': {
      $delete:
        | {
            input: { param: { accountId: string } } & { query: { delete?: string | undefined } } & {
              json: UserInfoList
            }
            output: UsersResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { delete?: string | undefined } } & {
              json: UserInfoList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                additional_info?: string | undefined
                alternate_admins_only?: string | undefined
                count?: string | undefined
                domain_users_only?: string | undefined
                email?: string | undefined
                email_substring?: string | undefined
                group_id?: string | undefined
                include_usersettings_for_csv?: string | undefined
                login_status?: string | undefined
                not_group_id?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: UserInformationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                additional_info?: string | undefined
                alternate_admins_only?: string | undefined
                count?: string | undefined
                domain_users_only?: string | undefined
                email?: string | undefined
                email_substring?: string | undefined
                group_id?: string | undefined
                include_usersettings_for_csv?: string | undefined
                login_status?: string | undefined
                not_group_id?: string | undefined
                start_position?: string | undefined
                status?: string | undefined
                user_name_substring?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: NewUsersDefinition }
            output: NewUsersSummary
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: NewUsersDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserInformationList }
            output: UserInformationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserInformationList }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId': {
      $get:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { additional_info?: string | undefined; email?: string | undefined }
            }
            output: UserInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { additional_info?: string | undefined; email?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserInformation }
            output: UserInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage': {
      $delete:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CloudStorageProviders2
            }
            output: CloudStorageProviders2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CloudStorageProviders2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { redirectUrl?: string | undefined }
            }
            output: CloudStorageProviders2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { redirectUrl?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CloudStorageProviders2
            }
            output: CloudStorageProviders2
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CloudStorageProviders2
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId': {
      $delete:
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } }
            output: CloudStorageProviders2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } } & {
              query: { redirectUrl?: string | undefined }
            }
            output: CloudStorageProviders2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } } & {
              query: { redirectUrl?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId/folders': {
      $get:
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } } & {
              query: {
                cloud_storage_folder_path?: string | undefined
                count?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ExternalFolder
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; serviceId: string; userId: string } } & {
              query: {
                cloud_storage_folder_path?: string | undefined
                count?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/cloud_storage/:serviceId/folders/:folderId': {
      $get:
        | {
            input: {
              param: { accountId: string; folderId: string; serviceId: string; userId: string }
            } & {
              query: {
                cloud_storage_folder_path?: string | undefined
                cloud_storage_folderid_plain?: string | undefined
                count?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ExternalFolder
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; folderId: string; serviceId: string; userId: string }
            } & {
              query: {
                cloud_storage_folder_path?: string | undefined
                cloud_storage_folderid_plain?: string | undefined
                count?: string | undefined
                order?: string | undefined
                order_by?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/custom_settings': {
      $delete:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CustomSettingsInformation
            }
            output: CustomSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CustomSettingsInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; userId: string } }
            output: CustomSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CustomSettingsInformation
            }
            output: CustomSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: CustomSettingsInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/profile': {
      $get:
        | {
            input: { param: { accountId: string; userId: string } }
            output: UserProfile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } } & { json: UserProfile }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & { json: UserProfile }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/profile/image': {
      $delete:
        | {
            input: { param: { accountId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { encoding?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { encoding?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/settings': {
      $get:
        | {
            input: { param: { accountId: string; userId: string } }
            output: UserSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserSettingsInformation }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { allow_all_languages?: string | undefined }
            } & { json: UserSettingsInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/signatures': {
      $get:
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { stamp_type?: string | undefined }
            }
            output: UserSignaturesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              query: { stamp_type?: string | undefined }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: UserSignaturesInformation
            }
            output: UserSignaturesInformation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: UserSignaturesInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: UserSignaturesInformation
            }
            output: UserSignaturesInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; userId: string } } & {
              json: UserSignaturesInformation
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId': {
      $delete:
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } }
            output: UserSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } } & {
              query: { close_existing_signature?: string | undefined }
            } & { json: UserSignatureDefinition }
            output: UserSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; signatureId: string; userId: string } } & {
              query: { close_existing_signature?: string | undefined }
            } & { json: UserSignatureDefinition }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/users/:userId/signatures/:signatureId/:imageType': {
      $delete:
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            }
            output: UserSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            } & { query: { include_chrome?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            } & { query: { include_chrome?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            } & { query: { transparent_png?: string | undefined } }
            output: UserSignature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; imageType: string; signatureId: string; userId: string }
            } & { query: { transparent_png?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/views/console': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: ConsoleViewRequest }
            output: EnvelopeViews
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: ConsoleViewRequest }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/watermark': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: Watermark
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string } } & { json: Watermark }
            output: Watermark
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: Watermark }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/watermark/preview': {
      $put:
        | {
            input: { param: { accountId: string } } & { json: Watermark }
            output: Watermark
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: Watermark }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: WorkspaceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { accountId: string } } & { json: Workspace }
            output: Workspace
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string } } & { json: Workspace }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces/:workspaceId': {
      $delete:
        | {
            input: { param: { accountId: string; workspaceId: string } }
            output: Workspace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; workspaceId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; workspaceId: string } }
            output: Workspace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; workspaceId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { accountId: string; workspaceId: string } } & { json: Workspace }
            output: Workspace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; workspaceId: string } } & { json: Workspace }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId': {
      $delete:
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } } & {
              json: WorkspaceItemList
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } } & {
              json: WorkspaceItemList
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } } & {
              query: {
                count?: string | undefined
                include_files?: string | undefined
                include_sub_folders?: string | undefined
                include_thumbnails?: string | undefined
                include_user_detail?: string | undefined
                start_position?: string | undefined
                workspace_user_id?: string | undefined
              }
            }
            output: WorkspaceFolderContents
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } } & {
              query: {
                count?: string | undefined
                include_files?: string | undefined
                include_sub_folders?: string | undefined
                include_thumbnails?: string | undefined
                include_user_detail?: string | undefined
                start_position?: string | undefined
                workspace_user_id?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files': {
      $post:
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } }
            output: WorkspaceItem
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { accountId: string; folderId: string; workspaceId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files/:fileId': {
      $get:
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            } & { query: { is_download?: string | undefined; pdf_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            } & { query: { is_download?: string | undefined; pdf_version?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            }
            output: WorkspaceItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/accounts/:accountId/workspaces/:workspaceId/folders/:folderId/files/:fileId/pages': {
      $get:
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                start_position?: string | undefined
              }
            }
            output: PageImages
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { accountId: string; fileId: string; folderId: string; workspaceId: string }
            } & {
              query: {
                count?: string | undefined
                dpi?: string | undefined
                max_height?: string | undefined
                max_width?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/billing_plans': {
      $get:
        | { input: {}; output: BillingPlansResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1/billing_plans/:billingPlanId': {
      $get:
        | {
            input: { param: { billingPlanId: string } }
            output: BillingPlanResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billingPlanId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/current_user/notary': {
      $get:
        | {
            input: { query: { include_jurisdictions?: string | undefined } }
            output: NotaryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { include_jurisdictions?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $post:
        | { input: { json: Notary2 }; output: Notary2; outputFormat: 'text'; status: 201 }
        | { input: { json: Notary2 }; output: ErrorDetails; outputFormat: 'text'; status: 400 }
      $put:
        | { input: { json: Notary2 }; output: Notary2; outputFormat: 'text'; status: 200 }
        | { input: { json: Notary2 }; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1/current_user/notary/journals': {
      $get:
        | {
            input: {
              query: {
                count?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: NotaryJournalList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                count?: string | undefined
                search_text?: string | undefined
                start_position?: string | undefined
              }
            }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/current_user/notary/jurisdictions': {
      $get:
        | { input: {}; output: NotaryJurisdictionList; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
      $post:
        | {
            input: { json: NotaryJurisdiction2 }
            output: NotaryJurisdiction2
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: NotaryJurisdiction2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/current_user/notary/jurisdictions/:jurisdictionId': {
      $delete:
        | {
            input: { param: { jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { jurisdictionId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { jurisdictionId: string } }
            output: NotaryJurisdiction2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jurisdictionId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { jurisdictionId: string } } & { json: NotaryJurisdiction2 }
            output: NotaryJurisdiction2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jurisdictionId: string } } & { json: NotaryJurisdiction2 }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/current_user/password_rules': {
      $get:
        | { input: {}; output: UserPasswordRules; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/v2.1/diagnostics/request_logs': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
      $get:
        | {
            input: { query: { encoding?: string | undefined } }
            output: ApiRequestLogsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { encoding?: string | undefined } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/diagnostics/request_logs/:requestLogId': {
      $get:
        | {
            input: { param: { requestLogId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { requestLogId: string } }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v2.1/diagnostics/settings': {
      $get:
        | { input: {}; output: DiagnosticsSettingsInformation; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorDetails; outputFormat: 'text'; status: 400 }
      $put:
        | {
            input: { json: DiagnosticsSettingsInformation }
            output: DiagnosticsSettingsInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DiagnosticsSettingsInformation }
            output: ErrorDetails
            outputFormat: 'text'
            status: 400
          }
    }
  },
  '/'
>
export default routes
