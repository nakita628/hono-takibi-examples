import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesIdRoute,
  deleteContactsAttributesAttributeCategoryAttributeNameRoute,
  deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRoute,
  deleteContactsConsentGroupsIdRoute,
  deleteContactsFoldersFolderIdRoute,
  deleteContactsIdentifierRoute,
  deleteContactsListsListIdRoute,
  deleteConversationsMessagesIdRoute,
  deleteConversationsPushedMessagesIdRoute,
  deleteCorporateGroupIdRoute,
  deleteCorporateSubAccountIdRoute,
  deleteCorporateUserRevokeEmailRoute,
  deleteCrmAttributesIdRoute,
  deleteCrmDealsIdRoute,
  deleteCrmFilesIdRoute,
  deleteCrmNotesIdRoute,
  deleteCrmTasksIdRoute,
  deleteEmailCampaignsCampaignIdRoute,
  deleteFeedsUuidRoute,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  deleteLoyaltyConfigProgramsPidContactCidRoute,
  deleteLoyaltyConfigProgramsPidRoute,
  deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  deleteLoyaltyOfferProgramsPidRewardsRevokeRoute,
  deleteLoyaltyTierProgramsPidTierGroupsGidRoute,
  deleteLoyaltyTierProgramsPidTiersTidRoute,
  deletePaymentsRequestsIdRoute,
  deleteSendersDomainsDomainNameRoute,
  deleteSendersSenderIdRoute,
  deleteSmsCampaignsCampaignIdRoute,
  deleteSmtpBlockedContactsEmailRoute,
  deleteSmtpBlockedDomainsDomainRoute,
  deleteSmtpEmailIdentifierRoute,
  deleteSmtpLogIdentifierRoute,
  deleteSmtpTemplatesTemplateIdRoute,
  deleteWebhooksWebhookIdRoute,
  deleteWhatsappCampaignsCampaignIdRoute,
  getAccountRoute,
  getCategoriesIdRoute,
  getCategoriesRoute,
  getCompaniesIdRoute,
  getCompaniesRoute,
  getContactsAttributesRoute,
  getContactsConsentGroupsIdRoute,
  getContactsConsentGroupsRoute,
  getContactsFoldersFolderIdListsRoute,
  getContactsFoldersFolderIdRoute,
  getContactsFoldersRoute,
  getContactsIdentifierCampaignStatsRoute,
  getContactsIdentifierRoute,
  getContactsListsListIdContactsRoute,
  getContactsListsListIdRoute,
  getContactsListsRoute,
  getContactsRoute,
  getContactsSegmentsRoute,
  getConversationsMessagesIdRoute,
  getConversationsPushedMessagesIdRoute,
  getCorporateGroupIdRoute,
  getCorporateGroupsRoute,
  getCorporateInvitedUsersRoute,
  getCorporateIpRoute,
  getCorporateMasterAccountRoute,
  getCorporateSubAccountIdRoute,
  getCorporateSubAccountRoute,
  getCorporateUserEmailPermissionsRoute,
  getCouponCollectionsIdRoute,
  getCouponCollectionsRoute,
  getCrmAttributesCompaniesRoute,
  getCrmAttributesDealsRoute,
  getCrmDealsIdRoute,
  getCrmDealsRoute,
  getCrmFilesIdDataRoute,
  getCrmFilesIdRoute,
  getCrmFilesRoute,
  getCrmNotesIdRoute,
  getCrmNotesRoute,
  getCrmPipelineDetailsAllRoute,
  getCrmPipelineDetailsPipelineIDRoute,
  getCrmPipelineDetailsRoute,
  getCrmTasksIdRoute,
  getCrmTasksRoute,
  getCrmTasktypesRoute,
  getEcommerceAttributionMetricsConversionSourceConversionSourceIdRoute,
  getEcommerceAttributionMetricsRoute,
  getEcommerceAttributionProductsConversionSourceConversionSourceIdRoute,
  getEcommerceConfigDisplayCurrencyRoute,
  getEmailCampaignsCampaignIdAbTestCampaignResultRoute,
  getEmailCampaignsCampaignIdRoute,
  getEmailCampaignsCampaignIdSharedUrlRoute,
  getEmailCampaignsRoute,
  getEventsRoute,
  getFeedsRoute,
  getFeedsUuidRoute,
  getInboundAttachmentsDownloadTokenRoute,
  getInboundEventsRoute,
  getInboundEventsUuidRoute,
  getLoyaltyBalanceProgramsPidActiveBalanceRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  getLoyaltyBalanceProgramsPidContactBalancesRoute,
  getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  getLoyaltyBalanceProgramsPidTransactionHistoryRoute,
  getLoyaltyConfigProgramsPidAccountInfoRoute,
  getLoyaltyConfigProgramsPidRoute,
  getLoyaltyConfigProgramsRoute,
  getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRoute,
  getLoyaltyOfferProgramsPidOffersRoute,
  getLoyaltyOfferProgramsPidRewardsRidRoute,
  getLoyaltyOfferProgramsPidVouchersRoute,
  getLoyaltyTierProgramsPidTierGroupsGidRoute,
  getLoyaltyTierProgramsPidTierGroupsRoute,
  getLoyaltyTierProgramsPidTiersRoute,
  getObjectsObjectTypeAssociatedRecordsRoute,
  getObjectsObjectTypeRecordsRoute,
  getOrdersRoute,
  getOrganizationActivitiesRoute,
  getOrganizationInvitedUsersRoute,
  getOrganizationUserEmailPermissionsRoute,
  getPaymentsRequestsIdRoute,
  getProcessesProcessIdRoute,
  getProcessesRoute,
  getProductsIdRoute,
  getProductsRoute,
  getSendersDomainsDomainNameRoute,
  getSendersDomainsRoute,
  getSendersIpsRoute,
  getSendersRoute,
  getSendersSenderIdIpsRoute,
  getSmsCampaignsCampaignIdRoute,
  getSmsCampaignsRoute,
  getSmtpBlockedContactsRoute,
  getSmtpBlockedDomainsRoute,
  getSmtpEmailsRoute,
  getSmtpEmailStatusIdentifierRoute,
  getSmtpEmailsUuidRoute,
  getSmtpStatisticsAggregatedReportRoute,
  getSmtpStatisticsEventsRoute,
  getSmtpStatisticsReportsRoute,
  getSmtpTemplatesRoute,
  getSmtpTemplatesTemplateIdRoute,
  getTransactionalSMSStatisticsAggregatedReportRoute,
  getTransactionalSMSStatisticsEventsRoute,
  getTransactionalSMSStatisticsReportsRoute,
  getTransactionalSMSTemplatesRoute,
  getWalletPassesPassIdInstallUrlContactIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  getWhatsappCampaignsCampaignIdRoute,
  getWhatsappCampaignsConfigRoute,
  getWhatsappCampaignsRoute,
  getWhatsappCampaignsTemplateListRoute,
  getWhatsappStatisticsEventsRoute,
  patchCompaniesIdRoute,
  patchCompaniesLinkUnlinkIdRoute,
  patchCouponCollectionsIdRoute,
  patchCrmAttributesIdRoute,
  patchCrmDealsIdRoute,
  patchCrmDealsLinkUnlinkIdRoute,
  patchCrmNotesIdRoute,
  patchCrmTasksIdRoute,
  patchLoyaltyConfigProgramsPidRoute,
  postCategoriesBatchRoute,
  postCategoriesRoute,
  postCompaniesImportRoute,
  postCompaniesRoute,
  postContactsAttributesAttributeCategoryAttributeNameRoute,
  postContactsBatchRoute,
  postContactsConsentGroupsRoute,
  postContactsDoubleOptinConfirmationRoute,
  postContactsExportRoute,
  postContactsFoldersRoute,
  postContactsImportRoute,
  postContactsListsListIdContactsAddRoute,
  postContactsListsListIdContactsRemoveRoute,
  postContactsListsRoute,
  postContactsRoute,
  postConversationsAgentOnlinePingRoute,
  postConversationsMessagesRoute,
  postConversationsPushedMessagesRoute,
  postCorporateGroupRoute,
  postCorporateSsoTokenRoute,
  postCorporateSubAccountIpAssociateRoute,
  postCorporateSubAccountKeyRoute,
  postCorporateSubAccountRoute,
  postCorporateSubAccountSsoTokenRoute,
  postCorporateUserInvitationSendRoute,
  postCouponCollectionsRoute,
  postCouponsRoute,
  postCrmAttributesRoute,
  postCrmDealsImportRoute,
  postCrmDealsRoute,
  postCrmFilesRoute,
  postCrmNotesRoute,
  postCrmTasksRoute,
  postEcommerceActivateRoute,
  postEcommerceConfigDisplayCurrencyRoute,
  postEmailCampaignsCampaignIdExportRecipientsRoute,
  postEmailCampaignsCampaignIdSendNowRoute,
  postEmailCampaignsCampaignIdSendReportRoute,
  postEmailCampaignsCampaignIdSendTestRoute,
  postEmailCampaignsImagesRoute,
  postEmailCampaignsRoute,
  postEventsBatchRoute,
  postEventsRoute,
  postFeedsRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  postLoyaltyBalanceProgramsPidCreateOrderRoute,
  postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  postLoyaltyBalanceProgramsPidTransactionsRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute,
  postLoyaltyConfigProgramsPidPublishRoute,
  postLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  postLoyaltyConfigProgramsPidSubscriptionsRoute,
  postLoyaltyConfigProgramsRoute,
  postLoyaltyOfferProgramsPidOffersRoute,
  postLoyaltyOfferProgramsPidRewardsAttributeRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRoute,
  postLoyaltyOfferProgramsPidRewardsValidateRoute,
  postLoyaltyTierProgramsPidContactsCidTiersTidRoute,
  postLoyaltyTierProgramsPidTierGroupsGidTiersRoute,
  postLoyaltyTierProgramsPidTierGroupsRoute,
  postObjectsObjectTypeBatchDeleteRoute,
  postObjectsObjectTypeBatchUpsertRoute,
  postOrdersStatusBatchRoute,
  postOrdersStatusRoute,
  postOrganizationUserInvitationSendRoute,
  postOrganizationUserUpdatePermissionsRoute,
  postPaymentsRequestsRoute,
  postProductsBatchRoute,
  postProductsIdAlertsTypeRoute,
  postProductsRoute,
  postSendersDomainsRoute,
  postSendersRoute,
  postSmsCampaignsCampaignIdExportRecipientsRoute,
  postSmsCampaignsCampaignIdSendNowRoute,
  postSmsCampaignsCampaignIdSendReportRoute,
  postSmsCampaignsCampaignIdSendTestRoute,
  postSmsCampaignsRoute,
  postSmtpBlockedDomainsRoute,
  postSmtpDeleteHardbouncesRoute,
  postSmtpEmailRoute,
  postSmtpTemplatePreviewRoute,
  postSmtpTemplatesRoute,
  postSmtpTemplatesTemplateIdSendTestRoute,
  postTransactionalSMSSendRoute,
  postTransactionalSMSSmsRoute,
  postWalletPassesInstallationIdRedeemRoute,
  postWebhooksExportRoute,
  postWebhooksRoute,
  postWhatsappCampaignsRoute,
  postWhatsappCampaignsTemplateApprovalTemplateIdRoute,
  postWhatsappCampaignsTemplateRoute,
  postWhatsappSendMessageRoute,
  putContactsAttributesAttributeCategoryAttributeNameRoute,
  putContactsConsentGroupsIdRoute,
  putContactsFoldersFolderIdRoute,
  putContactsIdentifierRoute,
  putContactsListsListIdRoute,
  putConversationsMessagesIdRoute,
  putConversationsPushedMessagesIdRoute,
  putConversationsVisitorGroupRoute,
  putCorporateGroupIdRoute,
  putCorporateGroupUnlinkGroupIdSubAccountsRoute,
  putCorporateSubAccountIdApplicationsToggleRoute,
  putCorporateSubAccountIdPlanRoute,
  putCorporateSubAccountIpDissociateRoute,
  putCorporateSubAccountsPlanRoute,
  putCorporateUserEmailPermissionsRoute,
  putCorporateUserInvitationActionEmailRoute,
  putEmailCampaignsCampaignIdRoute,
  putEmailCampaignsCampaignIdStatusRoute,
  putFeedsUuidRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  putLoyaltyConfigProgramsPidRoute,
  putLoyaltyTierProgramsPidTierGroupsGidRoute,
  putLoyaltyTierProgramsPidTiersTidRoute,
  putOrganizationUserInvitationActionEmailRoute,
  putOrganizationUserInvitationRevokeEmailRoute,
  putSendersDomainsDomainNameAuthenticateRoute,
  putSendersSenderIdRoute,
  putSendersSenderIdValidateRoute,
  putSmsCampaignsCampaignIdRoute,
  putSmsCampaignsCampaignIdStatusRoute,
  putSmtpTemplatesTemplateIdRoute,
  putWebhooksWebhookIdRoute,
  putWhatsappCampaignsCampaignIdRoute,
} from './routes'
import {
  deleteCompaniesIdRouteHandler,
  deleteContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRouteHandler,
  deleteContactsConsentGroupsIdRouteHandler,
  deleteContactsFoldersFolderIdRouteHandler,
  deleteContactsIdentifierRouteHandler,
  deleteContactsListsListIdRouteHandler,
  deleteConversationsMessagesIdRouteHandler,
  deleteConversationsPushedMessagesIdRouteHandler,
  deleteCorporateGroupIdRouteHandler,
  deleteCorporateSubAccountIdRouteHandler,
  deleteCorporateUserRevokeEmailRouteHandler,
  deleteCrmAttributesIdRouteHandler,
  deleteCrmDealsIdRouteHandler,
  deleteCrmFilesIdRouteHandler,
  deleteCrmNotesIdRouteHandler,
  deleteCrmTasksIdRouteHandler,
  deleteEmailCampaignsCampaignIdRouteHandler,
  deleteFeedsUuidRouteHandler,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  deleteLoyaltyConfigProgramsPidContactCidRouteHandler,
  deleteLoyaltyConfigProgramsPidRouteHandler,
  deleteLoyaltyConfigProgramsPidSubscriptionMembersRouteHandler,
  deleteLoyaltyOfferProgramsPidRewardsRevokeRouteHandler,
  deleteLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  deleteLoyaltyTierProgramsPidTiersTidRouteHandler,
  deletePaymentsRequestsIdRouteHandler,
  deleteSendersDomainsDomainNameRouteHandler,
  deleteSendersSenderIdRouteHandler,
  deleteSmsCampaignsCampaignIdRouteHandler,
  deleteSmtpBlockedContactsEmailRouteHandler,
  deleteSmtpBlockedDomainsDomainRouteHandler,
  deleteSmtpEmailIdentifierRouteHandler,
  deleteSmtpLogIdentifierRouteHandler,
  deleteSmtpTemplatesTemplateIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  deleteWhatsappCampaignsCampaignIdRouteHandler,
  getAccountRouteHandler,
  getCategoriesIdRouteHandler,
  getCategoriesRouteHandler,
  getCompaniesIdRouteHandler,
  getCompaniesRouteHandler,
  getContactsAttributesRouteHandler,
  getContactsConsentGroupsIdRouteHandler,
  getContactsConsentGroupsRouteHandler,
  getContactsFoldersFolderIdListsRouteHandler,
  getContactsFoldersFolderIdRouteHandler,
  getContactsFoldersRouteHandler,
  getContactsIdentifierCampaignStatsRouteHandler,
  getContactsIdentifierRouteHandler,
  getContactsListsListIdContactsRouteHandler,
  getContactsListsListIdRouteHandler,
  getContactsListsRouteHandler,
  getContactsRouteHandler,
  getContactsSegmentsRouteHandler,
  getConversationsMessagesIdRouteHandler,
  getConversationsPushedMessagesIdRouteHandler,
  getCorporateGroupIdRouteHandler,
  getCorporateGroupsRouteHandler,
  getCorporateInvitedUsersRouteHandler,
  getCorporateIpRouteHandler,
  getCorporateMasterAccountRouteHandler,
  getCorporateSubAccountIdRouteHandler,
  getCorporateSubAccountRouteHandler,
  getCorporateUserEmailPermissionsRouteHandler,
  getCouponCollectionsIdRouteHandler,
  getCouponCollectionsRouteHandler,
  getCrmAttributesCompaniesRouteHandler,
  getCrmAttributesDealsRouteHandler,
  getCrmDealsIdRouteHandler,
  getCrmDealsRouteHandler,
  getCrmFilesIdDataRouteHandler,
  getCrmFilesIdRouteHandler,
  getCrmFilesRouteHandler,
  getCrmNotesIdRouteHandler,
  getCrmNotesRouteHandler,
  getCrmPipelineDetailsAllRouteHandler,
  getCrmPipelineDetailsPipelineIDRouteHandler,
  getCrmPipelineDetailsRouteHandler,
  getCrmTasksIdRouteHandler,
  getCrmTasksRouteHandler,
  getCrmTasktypesRouteHandler,
  getEcommerceAttributionMetricsConversionSourceConversionSourceIdRouteHandler,
  getEcommerceAttributionMetricsRouteHandler,
  getEcommerceAttributionProductsConversionSourceConversionSourceIdRouteHandler,
  getEcommerceConfigDisplayCurrencyRouteHandler,
  getEmailCampaignsCampaignIdAbTestCampaignResultRouteHandler,
  getEmailCampaignsCampaignIdRouteHandler,
  getEmailCampaignsCampaignIdSharedUrlRouteHandler,
  getEmailCampaignsRouteHandler,
  getEventsRouteHandler,
  getFeedsRouteHandler,
  getFeedsUuidRouteHandler,
  getInboundAttachmentsDownloadTokenRouteHandler,
  getInboundEventsRouteHandler,
  getInboundEventsUuidRouteHandler,
  getLoyaltyBalanceProgramsPidActiveBalanceRouteHandler,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsRouteHandler,
  getLoyaltyBalanceProgramsPidContactBalancesRouteHandler,
  getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRouteHandler,
  getLoyaltyBalanceProgramsPidTransactionHistoryRouteHandler,
  getLoyaltyConfigProgramsPidAccountInfoRouteHandler,
  getLoyaltyConfigProgramsPidRouteHandler,
  getLoyaltyConfigProgramsRouteHandler,
  getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRouteHandler,
  getLoyaltyOfferProgramsPidOffersRouteHandler,
  getLoyaltyOfferProgramsPidRewardsRidRouteHandler,
  getLoyaltyOfferProgramsPidVouchersRouteHandler,
  getLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  getLoyaltyTierProgramsPidTierGroupsRouteHandler,
  getLoyaltyTierProgramsPidTiersRouteHandler,
  getObjectsObjectTypeAssociatedRecordsRouteHandler,
  getObjectsObjectTypeRecordsRouteHandler,
  getOrdersRouteHandler,
  getOrganizationActivitiesRouteHandler,
  getOrganizationInvitedUsersRouteHandler,
  getOrganizationUserEmailPermissionsRouteHandler,
  getPaymentsRequestsIdRouteHandler,
  getProcessesProcessIdRouteHandler,
  getProcessesRouteHandler,
  getProductsIdRouteHandler,
  getProductsRouteHandler,
  getSendersDomainsDomainNameRouteHandler,
  getSendersDomainsRouteHandler,
  getSendersIpsRouteHandler,
  getSendersRouteHandler,
  getSendersSenderIdIpsRouteHandler,
  getSmsCampaignsCampaignIdRouteHandler,
  getSmsCampaignsRouteHandler,
  getSmtpBlockedContactsRouteHandler,
  getSmtpBlockedDomainsRouteHandler,
  getSmtpEmailsRouteHandler,
  getSmtpEmailStatusIdentifierRouteHandler,
  getSmtpEmailsUuidRouteHandler,
  getSmtpStatisticsAggregatedReportRouteHandler,
  getSmtpStatisticsEventsRouteHandler,
  getSmtpStatisticsReportsRouteHandler,
  getSmtpTemplatesRouteHandler,
  getSmtpTemplatesTemplateIdRouteHandler,
  getTransactionalSMSStatisticsAggregatedReportRouteHandler,
  getTransactionalSMSStatisticsEventsRouteHandler,
  getTransactionalSMSStatisticsReportsRouteHandler,
  getTransactionalSMSTemplatesRouteHandler,
  getWalletPassesPassIdInstallUrlContactIdRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  getWhatsappCampaignsCampaignIdRouteHandler,
  getWhatsappCampaignsConfigRouteHandler,
  getWhatsappCampaignsRouteHandler,
  getWhatsappCampaignsTemplateListRouteHandler,
  getWhatsappStatisticsEventsRouteHandler,
  patchCompaniesIdRouteHandler,
  patchCompaniesLinkUnlinkIdRouteHandler,
  patchCouponCollectionsIdRouteHandler,
  patchCrmAttributesIdRouteHandler,
  patchCrmDealsIdRouteHandler,
  patchCrmDealsLinkUnlinkIdRouteHandler,
  patchCrmNotesIdRouteHandler,
  patchCrmTasksIdRouteHandler,
  patchLoyaltyConfigProgramsPidRouteHandler,
  postCategoriesBatchRouteHandler,
  postCategoriesRouteHandler,
  postCompaniesImportRouteHandler,
  postCompaniesRouteHandler,
  postContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  postContactsBatchRouteHandler,
  postContactsConsentGroupsRouteHandler,
  postContactsDoubleOptinConfirmationRouteHandler,
  postContactsExportRouteHandler,
  postContactsFoldersRouteHandler,
  postContactsImportRouteHandler,
  postContactsListsListIdContactsAddRouteHandler,
  postContactsListsListIdContactsRemoveRouteHandler,
  postContactsListsRouteHandler,
  postContactsRouteHandler,
  postConversationsAgentOnlinePingRouteHandler,
  postConversationsMessagesRouteHandler,
  postConversationsPushedMessagesRouteHandler,
  postCorporateGroupRouteHandler,
  postCorporateSsoTokenRouteHandler,
  postCorporateSubAccountIpAssociateRouteHandler,
  postCorporateSubAccountKeyRouteHandler,
  postCorporateSubAccountRouteHandler,
  postCorporateSubAccountSsoTokenRouteHandler,
  postCorporateUserInvitationSendRouteHandler,
  postCouponCollectionsRouteHandler,
  postCouponsRouteHandler,
  postCrmAttributesRouteHandler,
  postCrmDealsImportRouteHandler,
  postCrmDealsRouteHandler,
  postCrmFilesRouteHandler,
  postCrmNotesRouteHandler,
  postCrmTasksRouteHandler,
  postEcommerceActivateRouteHandler,
  postEcommerceConfigDisplayCurrencyRouteHandler,
  postEmailCampaignsCampaignIdExportRecipientsRouteHandler,
  postEmailCampaignsCampaignIdSendNowRouteHandler,
  postEmailCampaignsCampaignIdSendReportRouteHandler,
  postEmailCampaignsCampaignIdSendTestRouteHandler,
  postEmailCampaignsImagesRouteHandler,
  postEmailCampaignsRouteHandler,
  postEventsBatchRouteHandler,
  postEventsRouteHandler,
  postFeedsRouteHandler,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRouteHandler,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsRouteHandler,
  postLoyaltyBalanceProgramsPidCreateOrderRouteHandler,
  postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRouteHandler,
  postLoyaltyBalanceProgramsPidTransactionsRouteHandler,
  postLoyaltyBalanceProgramsPidTransactionsTidCancelRouteHandler,
  postLoyaltyBalanceProgramsPidTransactionsTidCompleteRouteHandler,
  postLoyaltyConfigProgramsPidPublishRouteHandler,
  postLoyaltyConfigProgramsPidSubscriptionMembersRouteHandler,
  postLoyaltyConfigProgramsPidSubscriptionsRouteHandler,
  postLoyaltyConfigProgramsRouteHandler,
  postLoyaltyOfferProgramsPidOffersRouteHandler,
  postLoyaltyOfferProgramsPidRewardsAttributeRouteHandler,
  postLoyaltyOfferProgramsPidRewardsRedeemRouteHandler,
  postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRouteHandler,
  postLoyaltyOfferProgramsPidRewardsValidateRouteHandler,
  postLoyaltyTierProgramsPidContactsCidTiersTidRouteHandler,
  postLoyaltyTierProgramsPidTierGroupsGidTiersRouteHandler,
  postLoyaltyTierProgramsPidTierGroupsRouteHandler,
  postObjectsObjectTypeBatchDeleteRouteHandler,
  postObjectsObjectTypeBatchUpsertRouteHandler,
  postOrdersStatusBatchRouteHandler,
  postOrdersStatusRouteHandler,
  postOrganizationUserInvitationSendRouteHandler,
  postOrganizationUserUpdatePermissionsRouteHandler,
  postPaymentsRequestsRouteHandler,
  postProductsBatchRouteHandler,
  postProductsIdAlertsTypeRouteHandler,
  postProductsRouteHandler,
  postSendersDomainsRouteHandler,
  postSendersRouteHandler,
  postSmsCampaignsCampaignIdExportRecipientsRouteHandler,
  postSmsCampaignsCampaignIdSendNowRouteHandler,
  postSmsCampaignsCampaignIdSendReportRouteHandler,
  postSmsCampaignsCampaignIdSendTestRouteHandler,
  postSmsCampaignsRouteHandler,
  postSmtpBlockedDomainsRouteHandler,
  postSmtpDeleteHardbouncesRouteHandler,
  postSmtpEmailRouteHandler,
  postSmtpTemplatePreviewRouteHandler,
  postSmtpTemplatesRouteHandler,
  postSmtpTemplatesTemplateIdSendTestRouteHandler,
  postTransactionalSMSSendRouteHandler,
  postTransactionalSMSSmsRouteHandler,
  postWalletPassesInstallationIdRedeemRouteHandler,
  postWebhooksExportRouteHandler,
  postWebhooksRouteHandler,
  postWhatsappCampaignsRouteHandler,
  postWhatsappCampaignsTemplateApprovalTemplateIdRouteHandler,
  postWhatsappCampaignsTemplateRouteHandler,
  postWhatsappSendMessageRouteHandler,
  putContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  putContactsConsentGroupsIdRouteHandler,
  putContactsFoldersFolderIdRouteHandler,
  putContactsIdentifierRouteHandler,
  putContactsListsListIdRouteHandler,
  putConversationsMessagesIdRouteHandler,
  putConversationsPushedMessagesIdRouteHandler,
  putConversationsVisitorGroupRouteHandler,
  putCorporateGroupIdRouteHandler,
  putCorporateGroupUnlinkGroupIdSubAccountsRouteHandler,
  putCorporateSubAccountIdApplicationsToggleRouteHandler,
  putCorporateSubAccountIdPlanRouteHandler,
  putCorporateSubAccountIpDissociateRouteHandler,
  putCorporateSubAccountsPlanRouteHandler,
  putCorporateUserEmailPermissionsRouteHandler,
  putCorporateUserInvitationActionEmailRouteHandler,
  putEmailCampaignsCampaignIdRouteHandler,
  putEmailCampaignsCampaignIdStatusRouteHandler,
  putFeedsUuidRouteHandler,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  putLoyaltyConfigProgramsPidRouteHandler,
  putLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  putLoyaltyTierProgramsPidTiersTidRouteHandler,
  putOrganizationUserInvitationActionEmailRouteHandler,
  putOrganizationUserInvitationRevokeEmailRouteHandler,
  putSendersDomainsDomainNameAuthenticateRouteHandler,
  putSendersSenderIdRouteHandler,
  putSendersSenderIdValidateRouteHandler,
  putSmsCampaignsCampaignIdRouteHandler,
  putSmsCampaignsCampaignIdStatusRouteHandler,
  putSmtpTemplatesTemplateIdRouteHandler,
  putWebhooksWebhookIdRouteHandler,
  putWhatsappCampaignsCampaignIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(postCorporateGroupRoute, postCorporateGroupRouteHandler)
  .openapi(
    putCorporateGroupUnlinkGroupIdSubAccountsRoute,
    putCorporateGroupUnlinkGroupIdSubAccountsRouteHandler,
  )
  .openapi(deleteCorporateGroupIdRoute, deleteCorporateGroupIdRouteHandler)
  .openapi(getCorporateGroupIdRoute, getCorporateGroupIdRouteHandler)
  .openapi(putCorporateGroupIdRoute, putCorporateGroupIdRouteHandler)
  .openapi(getCorporateGroupsRoute, getCorporateGroupsRouteHandler)
  .openapi(getCorporateInvitedUsersRoute, getCorporateInvitedUsersRouteHandler)
  .openapi(getCorporateIpRoute, getCorporateIpRouteHandler)
  .openapi(getCorporateMasterAccountRoute, getCorporateMasterAccountRouteHandler)
  .openapi(postCorporateSsoTokenRoute, postCorporateSsoTokenRouteHandler)
  .openapi(getCorporateSubAccountRoute, getCorporateSubAccountRouteHandler)
  .openapi(postCorporateSubAccountRoute, postCorporateSubAccountRouteHandler)
  .openapi(postCorporateSubAccountIpAssociateRoute, postCorporateSubAccountIpAssociateRouteHandler)
  .openapi(putCorporateSubAccountIpDissociateRoute, putCorporateSubAccountIpDissociateRouteHandler)
  .openapi(postCorporateSubAccountKeyRoute, postCorporateSubAccountKeyRouteHandler)
  .openapi(postCorporateSubAccountSsoTokenRoute, postCorporateSubAccountSsoTokenRouteHandler)
  .openapi(deleteCorporateSubAccountIdRoute, deleteCorporateSubAccountIdRouteHandler)
  .openapi(getCorporateSubAccountIdRoute, getCorporateSubAccountIdRouteHandler)
  .openapi(
    putCorporateSubAccountIdApplicationsToggleRoute,
    putCorporateSubAccountIdApplicationsToggleRouteHandler,
  )
  .openapi(putCorporateSubAccountIdPlanRoute, putCorporateSubAccountIdPlanRouteHandler)
  .openapi(putCorporateSubAccountsPlanRoute, putCorporateSubAccountsPlanRouteHandler)
  .openapi(postCorporateUserInvitationSendRoute, postCorporateUserInvitationSendRouteHandler)
  .openapi(
    putCorporateUserInvitationActionEmailRoute,
    putCorporateUserInvitationActionEmailRouteHandler,
  )
  .openapi(deleteCorporateUserRevokeEmailRoute, deleteCorporateUserRevokeEmailRouteHandler)
  .openapi(getCorporateUserEmailPermissionsRoute, getCorporateUserEmailPermissionsRouteHandler)
  .openapi(putCorporateUserEmailPermissionsRoute, putCorporateUserEmailPermissionsRouteHandler)
  .openapi(getOrganizationActivitiesRoute, getOrganizationActivitiesRouteHandler)
  .openapi(getOrganizationInvitedUsersRoute, getOrganizationInvitedUsersRouteHandler)
  .openapi(
    putOrganizationUserInvitationRevokeEmailRoute,
    putOrganizationUserInvitationRevokeEmailRouteHandler,
  )
  .openapi(postOrganizationUserInvitationSendRoute, postOrganizationUserInvitationSendRouteHandler)
  .openapi(
    putOrganizationUserInvitationActionEmailRoute,
    putOrganizationUserInvitationActionEmailRouteHandler,
  )
  .openapi(
    postOrganizationUserUpdatePermissionsRoute,
    postOrganizationUserUpdatePermissionsRouteHandler,
  )
  .openapi(
    getOrganizationUserEmailPermissionsRoute,
    getOrganizationUserEmailPermissionsRouteHandler,
  )
  .openapi(getProcessesRoute, getProcessesRouteHandler)
  .openapi(getProcessesProcessIdRoute, getProcessesProcessIdRouteHandler)
  .openapi(getSendersRoute, getSendersRouteHandler)
  .openapi(postSendersRoute, postSendersRouteHandler)
  .openapi(getSendersDomainsRoute, getSendersDomainsRouteHandler)
  .openapi(postSendersDomainsRoute, postSendersDomainsRouteHandler)
  .openapi(deleteSendersDomainsDomainNameRoute, deleteSendersDomainsDomainNameRouteHandler)
  .openapi(getSendersDomainsDomainNameRoute, getSendersDomainsDomainNameRouteHandler)
  .openapi(
    putSendersDomainsDomainNameAuthenticateRoute,
    putSendersDomainsDomainNameAuthenticateRouteHandler,
  )
  .openapi(getSendersIpsRoute, getSendersIpsRouteHandler)
  .openapi(deleteSendersSenderIdRoute, deleteSendersSenderIdRouteHandler)
  .openapi(putSendersSenderIdRoute, putSendersSenderIdRouteHandler)
  .openapi(getSendersSenderIdIpsRoute, getSendersSenderIdIpsRouteHandler)
  .openapi(putSendersSenderIdValidateRoute, putSendersSenderIdValidateRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(postWebhooksExportRoute, postWebhooksExportRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(putWebhooksWebhookIdRoute, putWebhooksWebhookIdRouteHandler)
  .openapi(getFeedsRoute, getFeedsRouteHandler)
  .openapi(postFeedsRoute, postFeedsRouteHandler)
  .openapi(deleteFeedsUuidRoute, deleteFeedsUuidRouteHandler)
  .openapi(getFeedsUuidRoute, getFeedsUuidRouteHandler)
  .openapi(putFeedsUuidRoute, putFeedsUuidRouteHandler)
  .openapi(postObjectsObjectTypeBatchUpsertRoute, postObjectsObjectTypeBatchUpsertRouteHandler)
  .openapi(getObjectsObjectTypeRecordsRoute, getObjectsObjectTypeRecordsRouteHandler)
  .openapi(postObjectsObjectTypeBatchDeleteRoute, postObjectsObjectTypeBatchDeleteRouteHandler)
  .openapi(
    getObjectsObjectTypeAssociatedRecordsRoute,
    getObjectsObjectTypeAssociatedRecordsRouteHandler,
  )
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(getContactsAttributesRoute, getContactsAttributesRouteHandler)
  .openapi(
    deleteContactsAttributesAttributeCategoryAttributeNameRoute,
    deleteContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  )
  .openapi(
    postContactsAttributesAttributeCategoryAttributeNameRoute,
    postContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  )
  .openapi(
    putContactsAttributesAttributeCategoryAttributeNameRoute,
    putContactsAttributesAttributeCategoryAttributeNameRouteHandler,
  )
  .openapi(
    deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRoute,
    deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRouteHandler,
  )
  .openapi(postContactsBatchRoute, postContactsBatchRouteHandler)
  .openapi(
    postContactsDoubleOptinConfirmationRoute,
    postContactsDoubleOptinConfirmationRouteHandler,
  )
  .openapi(postContactsExportRoute, postContactsExportRouteHandler)
  .openapi(getContactsFoldersRoute, getContactsFoldersRouteHandler)
  .openapi(postContactsFoldersRoute, postContactsFoldersRouteHandler)
  .openapi(deleteContactsFoldersFolderIdRoute, deleteContactsFoldersFolderIdRouteHandler)
  .openapi(getContactsFoldersFolderIdRoute, getContactsFoldersFolderIdRouteHandler)
  .openapi(putContactsFoldersFolderIdRoute, putContactsFoldersFolderIdRouteHandler)
  .openapi(getContactsFoldersFolderIdListsRoute, getContactsFoldersFolderIdListsRouteHandler)
  .openapi(postContactsImportRoute, postContactsImportRouteHandler)
  .openapi(getContactsListsRoute, getContactsListsRouteHandler)
  .openapi(postContactsListsRoute, postContactsListsRouteHandler)
  .openapi(deleteContactsListsListIdRoute, deleteContactsListsListIdRouteHandler)
  .openapi(getContactsListsListIdRoute, getContactsListsListIdRouteHandler)
  .openapi(putContactsListsListIdRoute, putContactsListsListIdRouteHandler)
  .openapi(getContactsListsListIdContactsRoute, getContactsListsListIdContactsRouteHandler)
  .openapi(postContactsListsListIdContactsAddRoute, postContactsListsListIdContactsAddRouteHandler)
  .openapi(
    postContactsListsListIdContactsRemoveRoute,
    postContactsListsListIdContactsRemoveRouteHandler,
  )
  .openapi(getContactsSegmentsRoute, getContactsSegmentsRouteHandler)
  .openapi(getContactsConsentGroupsRoute, getContactsConsentGroupsRouteHandler)
  .openapi(postContactsConsentGroupsRoute, postContactsConsentGroupsRouteHandler)
  .openapi(getContactsConsentGroupsIdRoute, getContactsConsentGroupsIdRouteHandler)
  .openapi(putContactsConsentGroupsIdRoute, putContactsConsentGroupsIdRouteHandler)
  .openapi(deleteContactsConsentGroupsIdRoute, deleteContactsConsentGroupsIdRouteHandler)
  .openapi(deleteContactsIdentifierRoute, deleteContactsIdentifierRouteHandler)
  .openapi(getContactsIdentifierRoute, getContactsIdentifierRouteHandler)
  .openapi(putContactsIdentifierRoute, putContactsIdentifierRouteHandler)
  .openapi(getContactsIdentifierCampaignStatsRoute, getContactsIdentifierCampaignStatsRouteHandler)
  .openapi(postConversationsAgentOnlinePingRoute, postConversationsAgentOnlinePingRouteHandler)
  .openapi(postConversationsMessagesRoute, postConversationsMessagesRouteHandler)
  .openapi(deleteConversationsMessagesIdRoute, deleteConversationsMessagesIdRouteHandler)
  .openapi(getConversationsMessagesIdRoute, getConversationsMessagesIdRouteHandler)
  .openapi(putConversationsMessagesIdRoute, putConversationsMessagesIdRouteHandler)
  .openapi(postConversationsPushedMessagesRoute, postConversationsPushedMessagesRouteHandler)
  .openapi(
    deleteConversationsPushedMessagesIdRoute,
    deleteConversationsPushedMessagesIdRouteHandler,
  )
  .openapi(getConversationsPushedMessagesIdRoute, getConversationsPushedMessagesIdRouteHandler)
  .openapi(putConversationsPushedMessagesIdRoute, putConversationsPushedMessagesIdRouteHandler)
  .openapi(putConversationsVisitorGroupRoute, putConversationsVisitorGroupRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(postCategoriesRoute, postCategoriesRouteHandler)
  .openapi(postCategoriesBatchRoute, postCategoriesBatchRouteHandler)
  .openapi(getCategoriesIdRoute, getCategoriesIdRouteHandler)
  .openapi(getCouponCollectionsRoute, getCouponCollectionsRouteHandler)
  .openapi(postCouponCollectionsRoute, postCouponCollectionsRouteHandler)
  .openapi(getCouponCollectionsIdRoute, getCouponCollectionsIdRouteHandler)
  .openapi(patchCouponCollectionsIdRoute, patchCouponCollectionsIdRouteHandler)
  .openapi(postCouponsRoute, postCouponsRouteHandler)
  .openapi(postEcommerceActivateRoute, postEcommerceActivateRouteHandler)
  .openapi(getEcommerceAttributionMetricsRoute, getEcommerceAttributionMetricsRouteHandler)
  .openapi(
    getEcommerceAttributionMetricsConversionSourceConversionSourceIdRoute,
    getEcommerceAttributionMetricsConversionSourceConversionSourceIdRouteHandler,
  )
  .openapi(
    getEcommerceAttributionProductsConversionSourceConversionSourceIdRoute,
    getEcommerceAttributionProductsConversionSourceConversionSourceIdRouteHandler,
  )
  .openapi(getEcommerceConfigDisplayCurrencyRoute, getEcommerceConfigDisplayCurrencyRouteHandler)
  .openapi(postEcommerceConfigDisplayCurrencyRoute, postEcommerceConfigDisplayCurrencyRouteHandler)
  .openapi(getOrdersRoute, getOrdersRouteHandler)
  .openapi(postOrdersStatusRoute, postOrdersStatusRouteHandler)
  .openapi(postOrdersStatusBatchRoute, postOrdersStatusBatchRouteHandler)
  .openapi(postPaymentsRequestsRoute, postPaymentsRequestsRouteHandler)
  .openapi(deletePaymentsRequestsIdRoute, deletePaymentsRequestsIdRouteHandler)
  .openapi(getPaymentsRequestsIdRoute, getPaymentsRequestsIdRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(postProductsRoute, postProductsRouteHandler)
  .openapi(postProductsBatchRoute, postProductsBatchRouteHandler)
  .openapi(getProductsIdRoute, getProductsIdRouteHandler)
  .openapi(postProductsIdAlertsTypeRoute, postProductsIdAlertsTypeRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(postEventsBatchRoute, postEventsBatchRouteHandler)
  .openapi(getInboundEventsRoute, getInboundEventsRouteHandler)
  .openapi(getInboundEventsUuidRoute, getInboundEventsUuidRouteHandler)
  .openapi(getInboundAttachmentsDownloadTokenRoute, getInboundAttachmentsDownloadTokenRouteHandler)
  .openapi(
    getLoyaltyBalanceProgramsPidActiveBalanceRoute,
    getLoyaltyBalanceProgramsPidActiveBalanceRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
    getLoyaltyBalanceProgramsPidBalanceDefinitionsRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
    postLoyaltyBalanceProgramsPidBalanceDefinitionsRouteHandler,
  )
  .openapi(
    deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
    deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
    getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  )
  .openapi(
    putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
    putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute,
    postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRouteHandler,
  )
  .openapi(
    deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
    deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
    getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  )
  .openapi(
    putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
    putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidContactBalancesRoute,
    getLoyaltyBalanceProgramsPidContactBalancesRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidCreateOrderRoute,
    postLoyaltyBalanceProgramsPidCreateOrderRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
    getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
    postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRouteHandler,
  )
  .openapi(
    getLoyaltyBalanceProgramsPidTransactionHistoryRoute,
    getLoyaltyBalanceProgramsPidTransactionHistoryRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidTransactionsRoute,
    postLoyaltyBalanceProgramsPidTransactionsRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute,
    postLoyaltyBalanceProgramsPidTransactionsTidCancelRouteHandler,
  )
  .openapi(
    postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute,
    postLoyaltyBalanceProgramsPidTransactionsTidCompleteRouteHandler,
  )
  .openapi(getLoyaltyConfigProgramsRoute, getLoyaltyConfigProgramsRouteHandler)
  .openapi(postLoyaltyConfigProgramsRoute, postLoyaltyConfigProgramsRouteHandler)
  .openapi(deleteLoyaltyConfigProgramsPidRoute, deleteLoyaltyConfigProgramsPidRouteHandler)
  .openapi(getLoyaltyConfigProgramsPidRoute, getLoyaltyConfigProgramsPidRouteHandler)
  .openapi(patchLoyaltyConfigProgramsPidRoute, patchLoyaltyConfigProgramsPidRouteHandler)
  .openapi(putLoyaltyConfigProgramsPidRoute, putLoyaltyConfigProgramsPidRouteHandler)
  .openapi(
    getLoyaltyConfigProgramsPidAccountInfoRoute,
    getLoyaltyConfigProgramsPidAccountInfoRouteHandler,
  )
  .openapi(
    deleteLoyaltyConfigProgramsPidContactCidRoute,
    deleteLoyaltyConfigProgramsPidContactCidRouteHandler,
  )
  .openapi(
    postLoyaltyConfigProgramsPidPublishRoute,
    postLoyaltyConfigProgramsPidPublishRouteHandler,
  )
  .openapi(
    deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute,
    deleteLoyaltyConfigProgramsPidSubscriptionMembersRouteHandler,
  )
  .openapi(
    postLoyaltyConfigProgramsPidSubscriptionMembersRoute,
    postLoyaltyConfigProgramsPidSubscriptionMembersRouteHandler,
  )
  .openapi(
    postLoyaltyConfigProgramsPidSubscriptionsRoute,
    postLoyaltyConfigProgramsPidSubscriptionsRouteHandler,
  )
  .openapi(
    getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRoute,
    getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRouteHandler,
  )
  .openapi(getLoyaltyOfferProgramsPidOffersRoute, getLoyaltyOfferProgramsPidOffersRouteHandler)
  .openapi(postLoyaltyOfferProgramsPidOffersRoute, postLoyaltyOfferProgramsPidOffersRouteHandler)
  .openapi(
    postLoyaltyOfferProgramsPidRewardsAttributeRoute,
    postLoyaltyOfferProgramsPidRewardsAttributeRouteHandler,
  )
  .openapi(
    postLoyaltyOfferProgramsPidRewardsRedeemRoute,
    postLoyaltyOfferProgramsPidRewardsRedeemRouteHandler,
  )
  .openapi(
    postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRoute,
    postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRouteHandler,
  )
  .openapi(
    deleteLoyaltyOfferProgramsPidRewardsRevokeRoute,
    deleteLoyaltyOfferProgramsPidRewardsRevokeRouteHandler,
  )
  .openapi(
    postLoyaltyOfferProgramsPidRewardsValidateRoute,
    postLoyaltyOfferProgramsPidRewardsValidateRouteHandler,
  )
  .openapi(
    getLoyaltyOfferProgramsPidRewardsRidRoute,
    getLoyaltyOfferProgramsPidRewardsRidRouteHandler,
  )
  .openapi(getLoyaltyOfferProgramsPidVouchersRoute, getLoyaltyOfferProgramsPidVouchersRouteHandler)
  .openapi(
    postLoyaltyTierProgramsPidContactsCidTiersTidRoute,
    postLoyaltyTierProgramsPidContactsCidTiersTidRouteHandler,
  )
  .openapi(
    getLoyaltyTierProgramsPidTierGroupsRoute,
    getLoyaltyTierProgramsPidTierGroupsRouteHandler,
  )
  .openapi(
    postLoyaltyTierProgramsPidTierGroupsRoute,
    postLoyaltyTierProgramsPidTierGroupsRouteHandler,
  )
  .openapi(
    deleteLoyaltyTierProgramsPidTierGroupsGidRoute,
    deleteLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  )
  .openapi(
    getLoyaltyTierProgramsPidTierGroupsGidRoute,
    getLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  )
  .openapi(
    putLoyaltyTierProgramsPidTierGroupsGidRoute,
    putLoyaltyTierProgramsPidTierGroupsGidRouteHandler,
  )
  .openapi(
    postLoyaltyTierProgramsPidTierGroupsGidTiersRoute,
    postLoyaltyTierProgramsPidTierGroupsGidTiersRouteHandler,
  )
  .openapi(getLoyaltyTierProgramsPidTiersRoute, getLoyaltyTierProgramsPidTiersRouteHandler)
  .openapi(
    deleteLoyaltyTierProgramsPidTiersTidRoute,
    deleteLoyaltyTierProgramsPidTiersTidRouteHandler,
  )
  .openapi(putLoyaltyTierProgramsPidTiersTidRoute, putLoyaltyTierProgramsPidTiersTidRouteHandler)
  .openapi(
    getWalletPassesPassIdInstallUrlContactIdRoute,
    getWalletPassesPassIdInstallUrlContactIdRouteHandler,
  )
  .openapi(
    postWalletPassesInstallationIdRedeemRoute,
    postWalletPassesInstallationIdRedeemRouteHandler,
  )
  .openapi(getEmailCampaignsRoute, getEmailCampaignsRouteHandler)
  .openapi(postEmailCampaignsRoute, postEmailCampaignsRouteHandler)
  .openapi(postEmailCampaignsImagesRoute, postEmailCampaignsImagesRouteHandler)
  .openapi(deleteEmailCampaignsCampaignIdRoute, deleteEmailCampaignsCampaignIdRouteHandler)
  .openapi(getEmailCampaignsCampaignIdRoute, getEmailCampaignsCampaignIdRouteHandler)
  .openapi(putEmailCampaignsCampaignIdRoute, putEmailCampaignsCampaignIdRouteHandler)
  .openapi(
    getEmailCampaignsCampaignIdAbTestCampaignResultRoute,
    getEmailCampaignsCampaignIdAbTestCampaignResultRouteHandler,
  )
  .openapi(
    postEmailCampaignsCampaignIdExportRecipientsRoute,
    postEmailCampaignsCampaignIdExportRecipientsRouteHandler,
  )
  .openapi(
    postEmailCampaignsCampaignIdSendNowRoute,
    postEmailCampaignsCampaignIdSendNowRouteHandler,
  )
  .openapi(
    postEmailCampaignsCampaignIdSendReportRoute,
    postEmailCampaignsCampaignIdSendReportRouteHandler,
  )
  .openapi(
    postEmailCampaignsCampaignIdSendTestRoute,
    postEmailCampaignsCampaignIdSendTestRouteHandler,
  )
  .openapi(
    getEmailCampaignsCampaignIdSharedUrlRoute,
    getEmailCampaignsCampaignIdSharedUrlRouteHandler,
  )
  .openapi(putEmailCampaignsCampaignIdStatusRoute, putEmailCampaignsCampaignIdStatusRouteHandler)
  .openapi(getSmsCampaignsRoute, getSmsCampaignsRouteHandler)
  .openapi(postSmsCampaignsRoute, postSmsCampaignsRouteHandler)
  .openapi(deleteSmsCampaignsCampaignIdRoute, deleteSmsCampaignsCampaignIdRouteHandler)
  .openapi(getSmsCampaignsCampaignIdRoute, getSmsCampaignsCampaignIdRouteHandler)
  .openapi(putSmsCampaignsCampaignIdRoute, putSmsCampaignsCampaignIdRouteHandler)
  .openapi(
    postSmsCampaignsCampaignIdExportRecipientsRoute,
    postSmsCampaignsCampaignIdExportRecipientsRouteHandler,
  )
  .openapi(postSmsCampaignsCampaignIdSendNowRoute, postSmsCampaignsCampaignIdSendNowRouteHandler)
  .openapi(
    postSmsCampaignsCampaignIdSendReportRoute,
    postSmsCampaignsCampaignIdSendReportRouteHandler,
  )
  .openapi(postSmsCampaignsCampaignIdSendTestRoute, postSmsCampaignsCampaignIdSendTestRouteHandler)
  .openapi(putSmsCampaignsCampaignIdStatusRoute, putSmsCampaignsCampaignIdStatusRouteHandler)
  .openapi(getWhatsappCampaignsRoute, getWhatsappCampaignsRouteHandler)
  .openapi(postWhatsappCampaignsRoute, postWhatsappCampaignsRouteHandler)
  .openapi(getWhatsappCampaignsConfigRoute, getWhatsappCampaignsConfigRouteHandler)
  .openapi(postWhatsappCampaignsTemplateRoute, postWhatsappCampaignsTemplateRouteHandler)
  .openapi(getWhatsappCampaignsTemplateListRoute, getWhatsappCampaignsTemplateListRouteHandler)
  .openapi(
    postWhatsappCampaignsTemplateApprovalTemplateIdRoute,
    postWhatsappCampaignsTemplateApprovalTemplateIdRouteHandler,
  )
  .openapi(deleteWhatsappCampaignsCampaignIdRoute, deleteWhatsappCampaignsCampaignIdRouteHandler)
  .openapi(getWhatsappCampaignsCampaignIdRoute, getWhatsappCampaignsCampaignIdRouteHandler)
  .openapi(putWhatsappCampaignsCampaignIdRoute, putWhatsappCampaignsCampaignIdRouteHandler)
  .openapi(getCompaniesRoute, getCompaniesRouteHandler)
  .openapi(postCompaniesRoute, postCompaniesRouteHandler)
  .openapi(postCompaniesImportRoute, postCompaniesImportRouteHandler)
  .openapi(patchCompaniesLinkUnlinkIdRoute, patchCompaniesLinkUnlinkIdRouteHandler)
  .openapi(deleteCompaniesIdRoute, deleteCompaniesIdRouteHandler)
  .openapi(getCompaniesIdRoute, getCompaniesIdRouteHandler)
  .openapi(patchCompaniesIdRoute, patchCompaniesIdRouteHandler)
  .openapi(postCrmAttributesRoute, postCrmAttributesRouteHandler)
  .openapi(deleteCrmAttributesIdRoute, deleteCrmAttributesIdRouteHandler)
  .openapi(patchCrmAttributesIdRoute, patchCrmAttributesIdRouteHandler)
  .openapi(getCrmAttributesCompaniesRoute, getCrmAttributesCompaniesRouteHandler)
  .openapi(getCrmAttributesDealsRoute, getCrmAttributesDealsRouteHandler)
  .openapi(getCrmDealsRoute, getCrmDealsRouteHandler)
  .openapi(postCrmDealsRoute, postCrmDealsRouteHandler)
  .openapi(postCrmDealsImportRoute, postCrmDealsImportRouteHandler)
  .openapi(patchCrmDealsLinkUnlinkIdRoute, patchCrmDealsLinkUnlinkIdRouteHandler)
  .openapi(deleteCrmDealsIdRoute, deleteCrmDealsIdRouteHandler)
  .openapi(getCrmDealsIdRoute, getCrmDealsIdRouteHandler)
  .openapi(patchCrmDealsIdRoute, patchCrmDealsIdRouteHandler)
  .openapi(getCrmFilesRoute, getCrmFilesRouteHandler)
  .openapi(postCrmFilesRoute, postCrmFilesRouteHandler)
  .openapi(deleteCrmFilesIdRoute, deleteCrmFilesIdRouteHandler)
  .openapi(getCrmFilesIdRoute, getCrmFilesIdRouteHandler)
  .openapi(getCrmFilesIdDataRoute, getCrmFilesIdDataRouteHandler)
  .openapi(getCrmNotesRoute, getCrmNotesRouteHandler)
  .openapi(postCrmNotesRoute, postCrmNotesRouteHandler)
  .openapi(deleteCrmNotesIdRoute, deleteCrmNotesIdRouteHandler)
  .openapi(getCrmNotesIdRoute, getCrmNotesIdRouteHandler)
  .openapi(patchCrmNotesIdRoute, patchCrmNotesIdRouteHandler)
  .openapi(getCrmPipelineDetailsRoute, getCrmPipelineDetailsRouteHandler)
  .openapi(getCrmPipelineDetailsAllRoute, getCrmPipelineDetailsAllRouteHandler)
  .openapi(getCrmPipelineDetailsPipelineIDRoute, getCrmPipelineDetailsPipelineIDRouteHandler)
  .openapi(getCrmTasksRoute, getCrmTasksRouteHandler)
  .openapi(postCrmTasksRoute, postCrmTasksRouteHandler)
  .openapi(deleteCrmTasksIdRoute, deleteCrmTasksIdRouteHandler)
  .openapi(getCrmTasksIdRoute, getCrmTasksIdRouteHandler)
  .openapi(patchCrmTasksIdRoute, patchCrmTasksIdRouteHandler)
  .openapi(getCrmTasktypesRoute, getCrmTasktypesRouteHandler)
  .openapi(postWhatsappSendMessageRoute, postWhatsappSendMessageRouteHandler)
  .openapi(getWhatsappStatisticsEventsRoute, getWhatsappStatisticsEventsRouteHandler)
  .openapi(getSmtpBlockedContactsRoute, getSmtpBlockedContactsRouteHandler)
  .openapi(deleteSmtpBlockedContactsEmailRoute, deleteSmtpBlockedContactsEmailRouteHandler)
  .openapi(getSmtpBlockedDomainsRoute, getSmtpBlockedDomainsRouteHandler)
  .openapi(postSmtpBlockedDomainsRoute, postSmtpBlockedDomainsRouteHandler)
  .openapi(deleteSmtpBlockedDomainsDomainRoute, deleteSmtpBlockedDomainsDomainRouteHandler)
  .openapi(postSmtpDeleteHardbouncesRoute, postSmtpDeleteHardbouncesRouteHandler)
  .openapi(postSmtpEmailRoute, postSmtpEmailRouteHandler)
  .openapi(deleteSmtpEmailIdentifierRoute, deleteSmtpEmailIdentifierRouteHandler)
  .openapi(getSmtpEmailStatusIdentifierRoute, getSmtpEmailStatusIdentifierRouteHandler)
  .openapi(getSmtpEmailsRoute, getSmtpEmailsRouteHandler)
  .openapi(getSmtpEmailsUuidRoute, getSmtpEmailsUuidRouteHandler)
  .openapi(deleteSmtpLogIdentifierRoute, deleteSmtpLogIdentifierRouteHandler)
  .openapi(getSmtpStatisticsAggregatedReportRoute, getSmtpStatisticsAggregatedReportRouteHandler)
  .openapi(getSmtpStatisticsEventsRoute, getSmtpStatisticsEventsRouteHandler)
  .openapi(getSmtpStatisticsReportsRoute, getSmtpStatisticsReportsRouteHandler)
  .openapi(postSmtpTemplatePreviewRoute, postSmtpTemplatePreviewRouteHandler)
  .openapi(getSmtpTemplatesRoute, getSmtpTemplatesRouteHandler)
  .openapi(postSmtpTemplatesRoute, postSmtpTemplatesRouteHandler)
  .openapi(deleteSmtpTemplatesTemplateIdRoute, deleteSmtpTemplatesTemplateIdRouteHandler)
  .openapi(getSmtpTemplatesTemplateIdRoute, getSmtpTemplatesTemplateIdRouteHandler)
  .openapi(putSmtpTemplatesTemplateIdRoute, putSmtpTemplatesTemplateIdRouteHandler)
  .openapi(
    postSmtpTemplatesTemplateIdSendTestRoute,
    postSmtpTemplatesTemplateIdSendTestRouteHandler,
  )
  .openapi(postTransactionalSMSSendRoute, postTransactionalSMSSendRouteHandler)
  .openapi(postTransactionalSMSSmsRoute, postTransactionalSMSSmsRouteHandler)
  .openapi(
    getTransactionalSMSStatisticsAggregatedReportRoute,
    getTransactionalSMSStatisticsAggregatedReportRouteHandler,
  )
  .openapi(
    getTransactionalSMSStatisticsEventsRoute,
    getTransactionalSMSStatisticsEventsRouteHandler,
  )
  .openapi(
    getTransactionalSMSStatisticsReportsRoute,
    getTransactionalSMSStatisticsReportsRouteHandler,
  )
  .openapi(getTransactionalSMSTemplatesRoute, getTransactionalSMSTemplatesRouteHandler)

export default app
