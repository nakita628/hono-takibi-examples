import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessSettingsWhitelistRoute,
  deleteAccessSettingsWhitelistRuleIdRoute,
  deleteAlertsAlertIdRoute,
  deleteApiKeysApiKeyIdRoute,
  deleteAsmGroupsGroupIdRoute,
  deleteAsmGroupsGroupIdSuppressionsEmailRoute,
  deleteAsmSuppressionsGlobalEmailRoute,
  deleteCampaignsCampaignIdRoute,
  deleteCampaignsCampaignIdSchedulesRoute,
  deleteContactdbCustomFieldsCustomFieldIdRoute,
  deleteContactdbListsListIdRecipientsRecipientIdRoute,
  deleteContactdbListsListIdRoute,
  deleteContactdbListsRoute,
  deleteContactdbRecipientsRecipientIdRoute,
  deleteContactdbRecipientsRoute,
  deleteContactdbSegmentsSegmentIdRoute,
  deleteDesignsIdRoute,
  deleteIpsPoolsPoolNameIpsIpRoute,
  deleteIpsPoolsPoolNameRoute,
  deleteIpsWarmupIpAddressRoute,
  deleteMarketingContactsRoute,
  deleteMarketingFieldDefinitionsCustomFieldIdRoute,
  deleteMarketingListsIdContactsRoute,
  deleteMarketingListsIdRoute,
  deleteMarketingSegments20SegmentIdRoute,
  deleteMarketingSegmentsSegmentIdRoute,
  deleteMarketingSinglesendsIdRoute,
  deleteMarketingSinglesendsIdScheduleRoute,
  deleteMarketingSinglesendsRoute,
  deleteScopesRequestsRequestIdRoute,
  deleteSendersSenderIdRoute,
  deleteSsoCertificatesCertIdRoute,
  deleteSsoIntegrationsIdRoute,
  deleteSubusersSubuserNameMonitorRoute,
  deleteSubusersSubuserNameRoute,
  deleteSuppressionBlocksEmailRoute,
  deleteSuppressionBlocksRoute,
  deleteSuppressionBouncesEmailRoute,
  deleteSuppressionBouncesRoute,
  deleteSuppressionInvalidEmailsEmailRoute,
  deleteSuppressionInvalidEmailsRoute,
  deleteSuppressionSpamReportsEmailRoute,
  deleteSuppressionSpamReportsRoute,
  deleteTeammatesPendingTokenRoute,
  deleteTeammatesUsernameRoute,
  deleteTemplatesTemplateIdRoute,
  deleteTemplatesTemplateIdVersionsVersionIdRoute,
  deleteUserScheduledSendsBatchIdRoute,
  deleteUserWebhooksParseSettingsHostnameRoute,
  deleteVerifiedSendersIdRoute,
  deleteWhitelabelDomainsDomainIdRoute,
  deleteWhitelabelDomainsIdIpsIpRoute,
  deleteWhitelabelDomainsSubuserRoute,
  deleteWhitelabelIpsIdRoute,
  deleteWhitelabelLinksIdRoute,
  deleteWhitelabelLinksSubuserRoute,
  getAccessSettingsActivityRoute,
  getAccessSettingsWhitelistRoute,
  getAccessSettingsWhitelistRuleIdRoute,
  getAlertsAlertIdRoute,
  getAlertsRoute,
  getApiKeysApiKeyIdRoute,
  getApiKeysRoute,
  getAsmGroupsGroupIdRoute,
  getAsmGroupsGroupIdSuppressionsRoute,
  getAsmGroupsRoute,
  getAsmSuppressionsEmailRoute,
  getAsmSuppressionsGlobalEmailRoute,
  getAsmSuppressionsRoute,
  getBrowsersStatsRoute,
  getCampaignsCampaignIdRoute,
  getCampaignsCampaignIdSchedulesRoute,
  getCampaignsRoute,
  getCategoriesRoute,
  getCategoriesStatsRoute,
  getCategoriesStatsSumsRoute,
  getClientsClientTypeStatsRoute,
  getClientsStatsRoute,
  getContactdbCustomFieldsCustomFieldIdRoute,
  getContactdbCustomFieldsRoute,
  getContactdbListsListIdRecipientsRoute,
  getContactdbListsListIdRoute,
  getContactdbListsRoute,
  getContactdbRecipientsBillableCountRoute,
  getContactdbRecipientsCountRoute,
  getContactdbRecipientsRecipientIdListsRoute,
  getContactdbRecipientsRecipientIdRoute,
  getContactdbRecipientsRoute,
  getContactdbRecipientsSearchRoute,
  getContactdbReservedFieldsRoute,
  getContactdbSegmentsRoute,
  getContactdbSegmentsSegmentIdRecipientsRoute,
  getContactdbSegmentsSegmentIdRoute,
  getContactdbStatusRoute,
  getDesignsIdRoute,
  getDesignsPreBuiltsIdRoute,
  getDesignsPreBuiltsRoute,
  getDesignsRoute,
  getDevicesStatsRoute,
  getGeoStatsRoute,
  getIpsAssignedRoute,
  getIpsIpAddressRoute,
  getIpsPoolsPoolNameRoute,
  getIpsPoolsRoute,
  getIpsRemainingRoute,
  getIpsRoute,
  getIpsWarmupIpAddressRoute,
  getIpsWarmupRoute,
  getMailBatchBatchIdRoute,
  getMailboxProvidersStatsRoute,
  getMailSettingsAddressWhitelistRoute,
  getMailSettingsBouncePurgeRoute,
  getMailSettingsFooterRoute,
  getMailSettingsForwardBounceRoute,
  getMailSettingsForwardSpamRoute,
  getMailSettingsRoute,
  getMailSettingsTemplateRoute,
  getMarketingContactsCountRoute,
  getMarketingContactsExportsIdRoute,
  getMarketingContactsExportsRoute,
  getMarketingContactsIdRoute,
  getMarketingContactsImportsIdRoute,
  getMarketingContactsRoute,
  getMarketingFieldDefinitionsRoute,
  getMarketingListsIdContactsCountRoute,
  getMarketingListsIdRoute,
  getMarketingListsRoute,
  getMarketingSegments20Route,
  getMarketingSegments20SegmentIdRoute,
  getMarketingSegmentsRoute,
  getMarketingSegmentsSegmentIdRoute,
  getMarketingSinglesendsCategoriesRoute,
  getMarketingSinglesendsIdRoute,
  getMarketingSinglesendsRoute,
  getMarketingStatsAutomationsExportRoute,
  getMarketingStatsAutomationsIdLinksRoute,
  getMarketingStatsAutomationsIdRoute,
  getMarketingStatsAutomationsRoute,
  getMarketingStatsSinglesendsExportRoute,
  getMarketingStatsSinglesendsIdLinksRoute,
  getMarketingStatsSinglesendsIdRoute,
  getMarketingStatsSinglesendsRoute,
  getMessagesDownloadDownloadUuidRoute,
  getMessagesMsgIdRoute,
  getMessagesRoute,
  getPartnerSettingsNewRelicRoute,
  getPartnerSettingsRoute,
  getScopesRequestsRoute,
  getScopesRoute,
  getSendersRoute,
  getSendersSenderIdRoute,
  getSsoCertificatesCertIdRoute,
  getSsoIntegrationsIdRoute,
  getSsoIntegrationsIntegrationIdCertificatesRoute,
  getSsoIntegrationsRoute,
  getStatsRoute,
  getSubusersReputationsRoute,
  getSubusersRoute,
  getSubusersStatsMonthlyRoute,
  getSubusersStatsRoute,
  getSubusersStatsSumsRoute,
  getSubusersSubuserNameMonitorRoute,
  getSubusersSubuserNameStatsMonthlyRoute,
  getSuppressionBlocksEmailRoute,
  getSuppressionBlocksRoute,
  getSuppressionBouncesEmailRoute,
  getSuppressionBouncesRoute,
  getSuppressionInvalidEmailsEmailRoute,
  getSuppressionInvalidEmailsRoute,
  getSuppressionSpamReportsEmailRoute,
  getSuppressionSpamReportsRoute,
  getSuppressionUnsubscribesRoute,
  getTeammatesPendingRoute,
  getTeammatesRoute,
  getTeammatesUsernameRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  getTemplatesTemplateIdVersionsVersionIdRoute,
  getTrackingSettingsClickRoute,
  getTrackingSettingsGoogleAnalyticsRoute,
  getTrackingSettingsOpenRoute,
  getTrackingSettingsRoute,
  getTrackingSettingsSubscriptionRoute,
  getUserAccountRoute,
  getUserCreditsRoute,
  getUserEmailRoute,
  getUserProfileRoute,
  getUserScheduledSendsBatchIdRoute,
  getUserScheduledSendsRoute,
  getUserSettingsEnforcedTlsRoute,
  getUserUsernameRoute,
  getUserWebhooksEventSettingsRoute,
  getUserWebhooksEventSettingsSignedRoute,
  getUserWebhooksParseSettingsHostnameRoute,
  getUserWebhooksParseSettingsRoute,
  getUserWebhooksParseStatsRoute,
  getVerifiedSendersDomainsRoute,
  getVerifiedSendersRoute,
  getVerifiedSendersStepsCompletedRoute,
  getVerifiedSendersVerifyTokenRoute,
  getWhitelabelDomainsDefaultRoute,
  getWhitelabelDomainsDomainIdRoute,
  getWhitelabelDomainsRoute,
  getWhitelabelDomainsSubuserRoute,
  getWhitelabelIpsIdRoute,
  getWhitelabelIpsRoute,
  getWhitelabelLinksDefaultRoute,
  getWhitelabelLinksIdRoute,
  getWhitelabelLinksRoute,
  getWhitelabelLinksSubuserRoute,
  patchAlertsAlertIdRoute,
  patchApiKeysApiKeyIdRoute,
  patchAsmGroupsGroupIdRoute,
  patchCampaignsCampaignIdRoute,
  patchCampaignsCampaignIdSchedulesRoute,
  patchContactdbListsListIdRoute,
  patchContactdbRecipientsRoute,
  patchContactdbSegmentsSegmentIdRoute,
  patchDesignsIdRoute,
  patchMailSettingsAddressWhitelistRoute,
  patchMailSettingsBouncePurgeRoute,
  patchMailSettingsFooterRoute,
  patchMailSettingsForwardBounceRoute,
  patchMailSettingsForwardSpamRoute,
  patchMailSettingsTemplateRoute,
  patchMarketingFieldDefinitionsCustomFieldIdRoute,
  patchMarketingListsIdRoute,
  patchMarketingSegments20SegmentIdRoute,
  patchMarketingSegmentsSegmentIdRoute,
  patchMarketingSinglesendsIdRoute,
  patchPartnerSettingsNewRelicRoute,
  patchScopesRequestsRequestIdApproveRoute,
  patchSendersSenderIdRoute,
  patchSsoCertificatesCertIdRoute,
  patchSsoIntegrationsIdRoute,
  patchSsoTeammatesUsernameRoute,
  patchSubusersSubuserNameRoute,
  patchTeammatesUsernameRoute,
  patchTemplatesTemplateIdRoute,
  patchTemplatesTemplateIdVersionsVersionIdRoute,
  patchTrackingSettingsClickRoute,
  patchTrackingSettingsGoogleAnalyticsRoute,
  patchTrackingSettingsOpenRoute,
  patchTrackingSettingsSubscriptionRoute,
  patchUserProfileRoute,
  patchUserScheduledSendsBatchIdRoute,
  patchUserSettingsEnforcedTlsRoute,
  patchUserWebhooksEventSettingsRoute,
  patchUserWebhooksEventSettingsSignedRoute,
  patchUserWebhooksParseSettingsHostnameRoute,
  patchVerifiedSendersIdRoute,
  patchWhitelabelDomainsDomainIdRoute,
  patchWhitelabelLinksIdRoute,
  postAccessSettingsWhitelistRoute,
  postAlertsRoute,
  postApiKeysRoute,
  postAsmGroupsGroupIdSuppressionsRoute,
  postAsmGroupsGroupIdSuppressionsSearchRoute,
  postAsmGroupsRoute,
  postAsmSuppressionsGlobalRoute,
  postCampaignsCampaignIdSchedulesNowRoute,
  postCampaignsCampaignIdSchedulesRoute,
  postCampaignsCampaignIdSchedulesTestRoute,
  postCampaignsRoute,
  postContactdbCustomFieldsRoute,
  postContactdbListsListIdRecipientsRecipientIdRoute,
  postContactdbListsListIdRecipientsRoute,
  postContactdbListsRoute,
  postContactdbRecipientsRoute,
  postContactdbRecipientsSearchRoute,
  postContactdbSegmentsRoute,
  postDesignsIdRoute,
  postDesignsPreBuiltsIdRoute,
  postDesignsRoute,
  postIpsPoolsPoolNameIpsRoute,
  postIpsPoolsRoute,
  postIpsRoute,
  postIpsWarmupRoute,
  postMailBatchRoute,
  postMailSendRoute,
  postMarketingContactsBatchRoute,
  postMarketingContactsExportsRoute,
  postMarketingContactsSearchEmailsRoute,
  postMarketingContactsSearchRoute,
  postMarketingFieldDefinitionsRoute,
  postMarketingListsRoute,
  postMarketingSegments20Route,
  postMarketingSegmentsDeleteRoute,
  postMarketingSegmentsRoute,
  postMarketingSendersRoute,
  postMarketingSinglesendsIdRoute,
  postMarketingSinglesendsRoute,
  postMarketingSinglesendsSearchRoute,
  postMarketingTestSendEmailRoute,
  postMessagesDownloadRoute,
  postSendersRoute,
  postSendersSenderIdResendVerificationRoute,
  postSsoCertificatesRoute,
  postSsoIntegrationsRoute,
  postSsoTeammatesRoute,
  postSubusersRoute,
  postSubusersSubuserNameMonitorRoute,
  postTeammatesPendingTokenResendRoute,
  postTeammatesRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdRoute,
  postTemplatesTemplateIdVersionsRoute,
  postTemplatesTemplateIdVersionsVersionIdActivateRoute,
  postUserScheduledSendsRoute,
  postUserWebhooksEventTestRoute,
  postUserWebhooksParseSettingsRoute,
  postValidationsEmailRoute,
  postVerifiedSendersResendIdRoute,
  postVerifiedSendersRoute,
  postWhitelabelDnsEmailRoute,
  postWhitelabelDomainsDomainIdSubuserRoute,
  postWhitelabelDomainsIdIpsRoute,
  postWhitelabelDomainsIdValidateRoute,
  postWhitelabelDomainsRoute,
  postWhitelabelIpsIdValidateRoute,
  postWhitelabelIpsRoute,
  postWhitelabelLinksIdValidateRoute,
  postWhitelabelLinksLinkIdSubuserRoute,
  postWhitelabelLinksRoute,
  putApiKeysApiKeyIdRoute,
  putIpsPoolsPoolNameRoute,
  putMarketingContactsImportsRoute,
  putMarketingContactsRoute,
  putMarketingSinglesendsIdScheduleRoute,
  putSubusersSubuserNameIpsRoute,
  putSubusersSubuserNameMonitorRoute,
  putUserEmailRoute,
  putUserPasswordRoute,
  putUserUsernameRoute,
} from './routes'
import {
  deleteAccessSettingsWhitelistRouteHandler,
  deleteAccessSettingsWhitelistRuleIdRouteHandler,
  deleteAlertsAlertIdRouteHandler,
  deleteApiKeysApiKeyIdRouteHandler,
  deleteAsmGroupsGroupIdRouteHandler,
  deleteAsmGroupsGroupIdSuppressionsEmailRouteHandler,
  deleteAsmSuppressionsGlobalEmailRouteHandler,
  deleteCampaignsCampaignIdRouteHandler,
  deleteCampaignsCampaignIdSchedulesRouteHandler,
  deleteContactdbCustomFieldsCustomFieldIdRouteHandler,
  deleteContactdbListsListIdRecipientsRecipientIdRouteHandler,
  deleteContactdbListsListIdRouteHandler,
  deleteContactdbListsRouteHandler,
  deleteContactdbRecipientsRecipientIdRouteHandler,
  deleteContactdbRecipientsRouteHandler,
  deleteContactdbSegmentsSegmentIdRouteHandler,
  deleteDesignsIdRouteHandler,
  deleteIpsPoolsPoolNameIpsIpRouteHandler,
  deleteIpsPoolsPoolNameRouteHandler,
  deleteIpsWarmupIpAddressRouteHandler,
  deleteMarketingContactsRouteHandler,
  deleteMarketingFieldDefinitionsCustomFieldIdRouteHandler,
  deleteMarketingListsIdContactsRouteHandler,
  deleteMarketingListsIdRouteHandler,
  deleteMarketingSegments20SegmentIdRouteHandler,
  deleteMarketingSegmentsSegmentIdRouteHandler,
  deleteMarketingSinglesendsIdRouteHandler,
  deleteMarketingSinglesendsIdScheduleRouteHandler,
  deleteMarketingSinglesendsRouteHandler,
  deleteScopesRequestsRequestIdRouteHandler,
  deleteSendersSenderIdRouteHandler,
  deleteSsoCertificatesCertIdRouteHandler,
  deleteSsoIntegrationsIdRouteHandler,
  deleteSubusersSubuserNameMonitorRouteHandler,
  deleteSubusersSubuserNameRouteHandler,
  deleteSuppressionBlocksEmailRouteHandler,
  deleteSuppressionBlocksRouteHandler,
  deleteSuppressionBouncesEmailRouteHandler,
  deleteSuppressionBouncesRouteHandler,
  deleteSuppressionInvalidEmailsEmailRouteHandler,
  deleteSuppressionInvalidEmailsRouteHandler,
  deleteSuppressionSpamReportsEmailRouteHandler,
  deleteSuppressionSpamReportsRouteHandler,
  deleteTeammatesPendingTokenRouteHandler,
  deleteTeammatesUsernameRouteHandler,
  deleteTemplatesTemplateIdRouteHandler,
  deleteTemplatesTemplateIdVersionsVersionIdRouteHandler,
  deleteUserScheduledSendsBatchIdRouteHandler,
  deleteUserWebhooksParseSettingsHostnameRouteHandler,
  deleteVerifiedSendersIdRouteHandler,
  deleteWhitelabelDomainsDomainIdRouteHandler,
  deleteWhitelabelDomainsIdIpsIpRouteHandler,
  deleteWhitelabelDomainsSubuserRouteHandler,
  deleteWhitelabelIpsIdRouteHandler,
  deleteWhitelabelLinksIdRouteHandler,
  deleteWhitelabelLinksSubuserRouteHandler,
  getAccessSettingsActivityRouteHandler,
  getAccessSettingsWhitelistRouteHandler,
  getAccessSettingsWhitelistRuleIdRouteHandler,
  getAlertsAlertIdRouteHandler,
  getAlertsRouteHandler,
  getApiKeysApiKeyIdRouteHandler,
  getApiKeysRouteHandler,
  getAsmGroupsGroupIdRouteHandler,
  getAsmGroupsGroupIdSuppressionsRouteHandler,
  getAsmGroupsRouteHandler,
  getAsmSuppressionsEmailRouteHandler,
  getAsmSuppressionsGlobalEmailRouteHandler,
  getAsmSuppressionsRouteHandler,
  getBrowsersStatsRouteHandler,
  getCampaignsCampaignIdRouteHandler,
  getCampaignsCampaignIdSchedulesRouteHandler,
  getCampaignsRouteHandler,
  getCategoriesRouteHandler,
  getCategoriesStatsRouteHandler,
  getCategoriesStatsSumsRouteHandler,
  getClientsClientTypeStatsRouteHandler,
  getClientsStatsRouteHandler,
  getContactdbCustomFieldsCustomFieldIdRouteHandler,
  getContactdbCustomFieldsRouteHandler,
  getContactdbListsListIdRecipientsRouteHandler,
  getContactdbListsListIdRouteHandler,
  getContactdbListsRouteHandler,
  getContactdbRecipientsBillableCountRouteHandler,
  getContactdbRecipientsCountRouteHandler,
  getContactdbRecipientsRecipientIdListsRouteHandler,
  getContactdbRecipientsRecipientIdRouteHandler,
  getContactdbRecipientsRouteHandler,
  getContactdbRecipientsSearchRouteHandler,
  getContactdbReservedFieldsRouteHandler,
  getContactdbSegmentsRouteHandler,
  getContactdbSegmentsSegmentIdRecipientsRouteHandler,
  getContactdbSegmentsSegmentIdRouteHandler,
  getContactdbStatusRouteHandler,
  getDesignsIdRouteHandler,
  getDesignsPreBuiltsIdRouteHandler,
  getDesignsPreBuiltsRouteHandler,
  getDesignsRouteHandler,
  getDevicesStatsRouteHandler,
  getGeoStatsRouteHandler,
  getIpsAssignedRouteHandler,
  getIpsIpAddressRouteHandler,
  getIpsPoolsPoolNameRouteHandler,
  getIpsPoolsRouteHandler,
  getIpsRemainingRouteHandler,
  getIpsRouteHandler,
  getIpsWarmupIpAddressRouteHandler,
  getIpsWarmupRouteHandler,
  getMailBatchBatchIdRouteHandler,
  getMailboxProvidersStatsRouteHandler,
  getMailSettingsAddressWhitelistRouteHandler,
  getMailSettingsBouncePurgeRouteHandler,
  getMailSettingsFooterRouteHandler,
  getMailSettingsForwardBounceRouteHandler,
  getMailSettingsForwardSpamRouteHandler,
  getMailSettingsRouteHandler,
  getMailSettingsTemplateRouteHandler,
  getMarketingContactsCountRouteHandler,
  getMarketingContactsExportsIdRouteHandler,
  getMarketingContactsExportsRouteHandler,
  getMarketingContactsIdRouteHandler,
  getMarketingContactsImportsIdRouteHandler,
  getMarketingContactsRouteHandler,
  getMarketingFieldDefinitionsRouteHandler,
  getMarketingListsIdContactsCountRouteHandler,
  getMarketingListsIdRouteHandler,
  getMarketingListsRouteHandler,
  getMarketingSegments20RouteHandler,
  getMarketingSegments20SegmentIdRouteHandler,
  getMarketingSegmentsRouteHandler,
  getMarketingSegmentsSegmentIdRouteHandler,
  getMarketingSinglesendsCategoriesRouteHandler,
  getMarketingSinglesendsIdRouteHandler,
  getMarketingSinglesendsRouteHandler,
  getMarketingStatsAutomationsExportRouteHandler,
  getMarketingStatsAutomationsIdLinksRouteHandler,
  getMarketingStatsAutomationsIdRouteHandler,
  getMarketingStatsAutomationsRouteHandler,
  getMarketingStatsSinglesendsExportRouteHandler,
  getMarketingStatsSinglesendsIdLinksRouteHandler,
  getMarketingStatsSinglesendsIdRouteHandler,
  getMarketingStatsSinglesendsRouteHandler,
  getMessagesDownloadDownloadUuidRouteHandler,
  getMessagesMsgIdRouteHandler,
  getMessagesRouteHandler,
  getPartnerSettingsNewRelicRouteHandler,
  getPartnerSettingsRouteHandler,
  getScopesRequestsRouteHandler,
  getScopesRouteHandler,
  getSendersRouteHandler,
  getSendersSenderIdRouteHandler,
  getSsoCertificatesCertIdRouteHandler,
  getSsoIntegrationsIdRouteHandler,
  getSsoIntegrationsIntegrationIdCertificatesRouteHandler,
  getSsoIntegrationsRouteHandler,
  getStatsRouteHandler,
  getSubusersReputationsRouteHandler,
  getSubusersRouteHandler,
  getSubusersStatsMonthlyRouteHandler,
  getSubusersStatsRouteHandler,
  getSubusersStatsSumsRouteHandler,
  getSubusersSubuserNameMonitorRouteHandler,
  getSubusersSubuserNameStatsMonthlyRouteHandler,
  getSuppressionBlocksEmailRouteHandler,
  getSuppressionBlocksRouteHandler,
  getSuppressionBouncesEmailRouteHandler,
  getSuppressionBouncesRouteHandler,
  getSuppressionInvalidEmailsEmailRouteHandler,
  getSuppressionInvalidEmailsRouteHandler,
  getSuppressionSpamReportsEmailRouteHandler,
  getSuppressionSpamReportsRouteHandler,
  getSuppressionUnsubscribesRouteHandler,
  getTeammatesPendingRouteHandler,
  getTeammatesRouteHandler,
  getTeammatesUsernameRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTemplateIdRouteHandler,
  getTemplatesTemplateIdVersionsVersionIdRouteHandler,
  getTrackingSettingsClickRouteHandler,
  getTrackingSettingsGoogleAnalyticsRouteHandler,
  getTrackingSettingsOpenRouteHandler,
  getTrackingSettingsRouteHandler,
  getTrackingSettingsSubscriptionRouteHandler,
  getUserAccountRouteHandler,
  getUserCreditsRouteHandler,
  getUserEmailRouteHandler,
  getUserProfileRouteHandler,
  getUserScheduledSendsBatchIdRouteHandler,
  getUserScheduledSendsRouteHandler,
  getUserSettingsEnforcedTlsRouteHandler,
  getUserUsernameRouteHandler,
  getUserWebhooksEventSettingsRouteHandler,
  getUserWebhooksEventSettingsSignedRouteHandler,
  getUserWebhooksParseSettingsHostnameRouteHandler,
  getUserWebhooksParseSettingsRouteHandler,
  getUserWebhooksParseStatsRouteHandler,
  getVerifiedSendersDomainsRouteHandler,
  getVerifiedSendersRouteHandler,
  getVerifiedSendersStepsCompletedRouteHandler,
  getVerifiedSendersVerifyTokenRouteHandler,
  getWhitelabelDomainsDefaultRouteHandler,
  getWhitelabelDomainsDomainIdRouteHandler,
  getWhitelabelDomainsRouteHandler,
  getWhitelabelDomainsSubuserRouteHandler,
  getWhitelabelIpsIdRouteHandler,
  getWhitelabelIpsRouteHandler,
  getWhitelabelLinksDefaultRouteHandler,
  getWhitelabelLinksIdRouteHandler,
  getWhitelabelLinksRouteHandler,
  getWhitelabelLinksSubuserRouteHandler,
  patchAlertsAlertIdRouteHandler,
  patchApiKeysApiKeyIdRouteHandler,
  patchAsmGroupsGroupIdRouteHandler,
  patchCampaignsCampaignIdRouteHandler,
  patchCampaignsCampaignIdSchedulesRouteHandler,
  patchContactdbListsListIdRouteHandler,
  patchContactdbRecipientsRouteHandler,
  patchContactdbSegmentsSegmentIdRouteHandler,
  patchDesignsIdRouteHandler,
  patchMailSettingsAddressWhitelistRouteHandler,
  patchMailSettingsBouncePurgeRouteHandler,
  patchMailSettingsFooterRouteHandler,
  patchMailSettingsForwardBounceRouteHandler,
  patchMailSettingsForwardSpamRouteHandler,
  patchMailSettingsTemplateRouteHandler,
  patchMarketingFieldDefinitionsCustomFieldIdRouteHandler,
  patchMarketingListsIdRouteHandler,
  patchMarketingSegments20SegmentIdRouteHandler,
  patchMarketingSegmentsSegmentIdRouteHandler,
  patchMarketingSinglesendsIdRouteHandler,
  patchPartnerSettingsNewRelicRouteHandler,
  patchScopesRequestsRequestIdApproveRouteHandler,
  patchSendersSenderIdRouteHandler,
  patchSsoCertificatesCertIdRouteHandler,
  patchSsoIntegrationsIdRouteHandler,
  patchSsoTeammatesUsernameRouteHandler,
  patchSubusersSubuserNameRouteHandler,
  patchTeammatesUsernameRouteHandler,
  patchTemplatesTemplateIdRouteHandler,
  patchTemplatesTemplateIdVersionsVersionIdRouteHandler,
  patchTrackingSettingsClickRouteHandler,
  patchTrackingSettingsGoogleAnalyticsRouteHandler,
  patchTrackingSettingsOpenRouteHandler,
  patchTrackingSettingsSubscriptionRouteHandler,
  patchUserProfileRouteHandler,
  patchUserScheduledSendsBatchIdRouteHandler,
  patchUserSettingsEnforcedTlsRouteHandler,
  patchUserWebhooksEventSettingsRouteHandler,
  patchUserWebhooksEventSettingsSignedRouteHandler,
  patchUserWebhooksParseSettingsHostnameRouteHandler,
  patchVerifiedSendersIdRouteHandler,
  patchWhitelabelDomainsDomainIdRouteHandler,
  patchWhitelabelLinksIdRouteHandler,
  postAccessSettingsWhitelistRouteHandler,
  postAlertsRouteHandler,
  postApiKeysRouteHandler,
  postAsmGroupsGroupIdSuppressionsRouteHandler,
  postAsmGroupsGroupIdSuppressionsSearchRouteHandler,
  postAsmGroupsRouteHandler,
  postAsmSuppressionsGlobalRouteHandler,
  postCampaignsCampaignIdSchedulesNowRouteHandler,
  postCampaignsCampaignIdSchedulesRouteHandler,
  postCampaignsCampaignIdSchedulesTestRouteHandler,
  postCampaignsRouteHandler,
  postContactdbCustomFieldsRouteHandler,
  postContactdbListsListIdRecipientsRecipientIdRouteHandler,
  postContactdbListsListIdRecipientsRouteHandler,
  postContactdbListsRouteHandler,
  postContactdbRecipientsRouteHandler,
  postContactdbRecipientsSearchRouteHandler,
  postContactdbSegmentsRouteHandler,
  postDesignsIdRouteHandler,
  postDesignsPreBuiltsIdRouteHandler,
  postDesignsRouteHandler,
  postIpsPoolsPoolNameIpsRouteHandler,
  postIpsPoolsRouteHandler,
  postIpsRouteHandler,
  postIpsWarmupRouteHandler,
  postMailBatchRouteHandler,
  postMailSendRouteHandler,
  postMarketingContactsBatchRouteHandler,
  postMarketingContactsExportsRouteHandler,
  postMarketingContactsSearchEmailsRouteHandler,
  postMarketingContactsSearchRouteHandler,
  postMarketingFieldDefinitionsRouteHandler,
  postMarketingListsRouteHandler,
  postMarketingSegments20RouteHandler,
  postMarketingSegmentsDeleteRouteHandler,
  postMarketingSegmentsRouteHandler,
  postMarketingSendersRouteHandler,
  postMarketingSinglesendsIdRouteHandler,
  postMarketingSinglesendsRouteHandler,
  postMarketingSinglesendsSearchRouteHandler,
  postMarketingTestSendEmailRouteHandler,
  postMessagesDownloadRouteHandler,
  postSendersRouteHandler,
  postSendersSenderIdResendVerificationRouteHandler,
  postSsoCertificatesRouteHandler,
  postSsoIntegrationsRouteHandler,
  postSsoTeammatesRouteHandler,
  postSubusersRouteHandler,
  postSubusersSubuserNameMonitorRouteHandler,
  postTeammatesPendingTokenResendRouteHandler,
  postTeammatesRouteHandler,
  postTemplatesRouteHandler,
  postTemplatesTemplateIdRouteHandler,
  postTemplatesTemplateIdVersionsRouteHandler,
  postTemplatesTemplateIdVersionsVersionIdActivateRouteHandler,
  postUserScheduledSendsRouteHandler,
  postUserWebhooksEventTestRouteHandler,
  postUserWebhooksParseSettingsRouteHandler,
  postValidationsEmailRouteHandler,
  postVerifiedSendersResendIdRouteHandler,
  postVerifiedSendersRouteHandler,
  postWhitelabelDnsEmailRouteHandler,
  postWhitelabelDomainsDomainIdSubuserRouteHandler,
  postWhitelabelDomainsIdIpsRouteHandler,
  postWhitelabelDomainsIdValidateRouteHandler,
  postWhitelabelDomainsRouteHandler,
  postWhitelabelIpsIdValidateRouteHandler,
  postWhitelabelIpsRouteHandler,
  postWhitelabelLinksIdValidateRouteHandler,
  postWhitelabelLinksLinkIdSubuserRouteHandler,
  postWhitelabelLinksRouteHandler,
  putApiKeysApiKeyIdRouteHandler,
  putIpsPoolsPoolNameRouteHandler,
  putMarketingContactsImportsRouteHandler,
  putMarketingContactsRouteHandler,
  putMarketingSinglesendsIdScheduleRouteHandler,
  putSubusersSubuserNameIpsRouteHandler,
  putSubusersSubuserNameMonitorRouteHandler,
  putUserEmailRouteHandler,
  putUserPasswordRouteHandler,
  putUserUsernameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccessSettingsActivityRoute, getAccessSettingsActivityRouteHandler)
  .openapi(deleteAccessSettingsWhitelistRoute, deleteAccessSettingsWhitelistRouteHandler)
  .openapi(getAccessSettingsWhitelistRoute, getAccessSettingsWhitelistRouteHandler)
  .openapi(postAccessSettingsWhitelistRoute, postAccessSettingsWhitelistRouteHandler)
  .openapi(
    deleteAccessSettingsWhitelistRuleIdRoute,
    deleteAccessSettingsWhitelistRuleIdRouteHandler,
  )
  .openapi(getAccessSettingsWhitelistRuleIdRoute, getAccessSettingsWhitelistRuleIdRouteHandler)
  .openapi(getAlertsRoute, getAlertsRouteHandler)
  .openapi(postAlertsRoute, postAlertsRouteHandler)
  .openapi(deleteAlertsAlertIdRoute, deleteAlertsAlertIdRouteHandler)
  .openapi(getAlertsAlertIdRoute, getAlertsAlertIdRouteHandler)
  .openapi(patchAlertsAlertIdRoute, patchAlertsAlertIdRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(deleteApiKeysApiKeyIdRoute, deleteApiKeysApiKeyIdRouteHandler)
  .openapi(getApiKeysApiKeyIdRoute, getApiKeysApiKeyIdRouteHandler)
  .openapi(patchApiKeysApiKeyIdRoute, patchApiKeysApiKeyIdRouteHandler)
  .openapi(putApiKeysApiKeyIdRoute, putApiKeysApiKeyIdRouteHandler)
  .openapi(getAsmGroupsRoute, getAsmGroupsRouteHandler)
  .openapi(postAsmGroupsRoute, postAsmGroupsRouteHandler)
  .openapi(deleteAsmGroupsGroupIdRoute, deleteAsmGroupsGroupIdRouteHandler)
  .openapi(getAsmGroupsGroupIdRoute, getAsmGroupsGroupIdRouteHandler)
  .openapi(patchAsmGroupsGroupIdRoute, patchAsmGroupsGroupIdRouteHandler)
  .openapi(getAsmGroupsGroupIdSuppressionsRoute, getAsmGroupsGroupIdSuppressionsRouteHandler)
  .openapi(postAsmGroupsGroupIdSuppressionsRoute, postAsmGroupsGroupIdSuppressionsRouteHandler)
  .openapi(
    postAsmGroupsGroupIdSuppressionsSearchRoute,
    postAsmGroupsGroupIdSuppressionsSearchRouteHandler,
  )
  .openapi(
    deleteAsmGroupsGroupIdSuppressionsEmailRoute,
    deleteAsmGroupsGroupIdSuppressionsEmailRouteHandler,
  )
  .openapi(getAsmSuppressionsRoute, getAsmSuppressionsRouteHandler)
  .openapi(postAsmSuppressionsGlobalRoute, postAsmSuppressionsGlobalRouteHandler)
  .openapi(deleteAsmSuppressionsGlobalEmailRoute, deleteAsmSuppressionsGlobalEmailRouteHandler)
  .openapi(getAsmSuppressionsGlobalEmailRoute, getAsmSuppressionsGlobalEmailRouteHandler)
  .openapi(getAsmSuppressionsEmailRoute, getAsmSuppressionsEmailRouteHandler)
  .openapi(getBrowsersStatsRoute, getBrowsersStatsRouteHandler)
  .openapi(getCampaignsRoute, getCampaignsRouteHandler)
  .openapi(postCampaignsRoute, postCampaignsRouteHandler)
  .openapi(deleteCampaignsCampaignIdRoute, deleteCampaignsCampaignIdRouteHandler)
  .openapi(getCampaignsCampaignIdRoute, getCampaignsCampaignIdRouteHandler)
  .openapi(patchCampaignsCampaignIdRoute, patchCampaignsCampaignIdRouteHandler)
  .openapi(deleteCampaignsCampaignIdSchedulesRoute, deleteCampaignsCampaignIdSchedulesRouteHandler)
  .openapi(getCampaignsCampaignIdSchedulesRoute, getCampaignsCampaignIdSchedulesRouteHandler)
  .openapi(patchCampaignsCampaignIdSchedulesRoute, patchCampaignsCampaignIdSchedulesRouteHandler)
  .openapi(postCampaignsCampaignIdSchedulesRoute, postCampaignsCampaignIdSchedulesRouteHandler)
  .openapi(
    postCampaignsCampaignIdSchedulesNowRoute,
    postCampaignsCampaignIdSchedulesNowRouteHandler,
  )
  .openapi(
    postCampaignsCampaignIdSchedulesTestRoute,
    postCampaignsCampaignIdSchedulesTestRouteHandler,
  )
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesStatsRoute, getCategoriesStatsRouteHandler)
  .openapi(getCategoriesStatsSumsRoute, getCategoriesStatsSumsRouteHandler)
  .openapi(getClientsStatsRoute, getClientsStatsRouteHandler)
  .openapi(getClientsClientTypeStatsRoute, getClientsClientTypeStatsRouteHandler)
  .openapi(getContactdbCustomFieldsRoute, getContactdbCustomFieldsRouteHandler)
  .openapi(postContactdbCustomFieldsRoute, postContactdbCustomFieldsRouteHandler)
  .openapi(
    deleteContactdbCustomFieldsCustomFieldIdRoute,
    deleteContactdbCustomFieldsCustomFieldIdRouteHandler,
  )
  .openapi(
    getContactdbCustomFieldsCustomFieldIdRoute,
    getContactdbCustomFieldsCustomFieldIdRouteHandler,
  )
  .openapi(deleteContactdbListsRoute, deleteContactdbListsRouteHandler)
  .openapi(getContactdbListsRoute, getContactdbListsRouteHandler)
  .openapi(postContactdbListsRoute, postContactdbListsRouteHandler)
  .openapi(deleteContactdbListsListIdRoute, deleteContactdbListsListIdRouteHandler)
  .openapi(getContactdbListsListIdRoute, getContactdbListsListIdRouteHandler)
  .openapi(patchContactdbListsListIdRoute, patchContactdbListsListIdRouteHandler)
  .openapi(getContactdbListsListIdRecipientsRoute, getContactdbListsListIdRecipientsRouteHandler)
  .openapi(postContactdbListsListIdRecipientsRoute, postContactdbListsListIdRecipientsRouteHandler)
  .openapi(
    deleteContactdbListsListIdRecipientsRecipientIdRoute,
    deleteContactdbListsListIdRecipientsRecipientIdRouteHandler,
  )
  .openapi(
    postContactdbListsListIdRecipientsRecipientIdRoute,
    postContactdbListsListIdRecipientsRecipientIdRouteHandler,
  )
  .openapi(deleteContactdbRecipientsRoute, deleteContactdbRecipientsRouteHandler)
  .openapi(getContactdbRecipientsRoute, getContactdbRecipientsRouteHandler)
  .openapi(patchContactdbRecipientsRoute, patchContactdbRecipientsRouteHandler)
  .openapi(postContactdbRecipientsRoute, postContactdbRecipientsRouteHandler)
  .openapi(
    getContactdbRecipientsBillableCountRoute,
    getContactdbRecipientsBillableCountRouteHandler,
  )
  .openapi(getContactdbRecipientsCountRoute, getContactdbRecipientsCountRouteHandler)
  .openapi(getContactdbRecipientsSearchRoute, getContactdbRecipientsSearchRouteHandler)
  .openapi(postContactdbRecipientsSearchRoute, postContactdbRecipientsSearchRouteHandler)
  .openapi(
    deleteContactdbRecipientsRecipientIdRoute,
    deleteContactdbRecipientsRecipientIdRouteHandler,
  )
  .openapi(getContactdbRecipientsRecipientIdRoute, getContactdbRecipientsRecipientIdRouteHandler)
  .openapi(
    getContactdbRecipientsRecipientIdListsRoute,
    getContactdbRecipientsRecipientIdListsRouteHandler,
  )
  .openapi(getContactdbReservedFieldsRoute, getContactdbReservedFieldsRouteHandler)
  .openapi(getContactdbSegmentsRoute, getContactdbSegmentsRouteHandler)
  .openapi(postContactdbSegmentsRoute, postContactdbSegmentsRouteHandler)
  .openapi(deleteContactdbSegmentsSegmentIdRoute, deleteContactdbSegmentsSegmentIdRouteHandler)
  .openapi(getContactdbSegmentsSegmentIdRoute, getContactdbSegmentsSegmentIdRouteHandler)
  .openapi(patchContactdbSegmentsSegmentIdRoute, patchContactdbSegmentsSegmentIdRouteHandler)
  .openapi(
    getContactdbSegmentsSegmentIdRecipientsRoute,
    getContactdbSegmentsSegmentIdRecipientsRouteHandler,
  )
  .openapi(getContactdbStatusRoute, getContactdbStatusRouteHandler)
  .openapi(getDesignsRoute, getDesignsRouteHandler)
  .openapi(postDesignsRoute, postDesignsRouteHandler)
  .openapi(getDesignsPreBuiltsRoute, getDesignsPreBuiltsRouteHandler)
  .openapi(getDesignsPreBuiltsIdRoute, getDesignsPreBuiltsIdRouteHandler)
  .openapi(postDesignsPreBuiltsIdRoute, postDesignsPreBuiltsIdRouteHandler)
  .openapi(deleteDesignsIdRoute, deleteDesignsIdRouteHandler)
  .openapi(getDesignsIdRoute, getDesignsIdRouteHandler)
  .openapi(patchDesignsIdRoute, patchDesignsIdRouteHandler)
  .openapi(postDesignsIdRoute, postDesignsIdRouteHandler)
  .openapi(getDevicesStatsRoute, getDevicesStatsRouteHandler)
  .openapi(getGeoStatsRoute, getGeoStatsRouteHandler)
  .openapi(getIpsRoute, getIpsRouteHandler)
  .openapi(postIpsRoute, postIpsRouteHandler)
  .openapi(getIpsAssignedRoute, getIpsAssignedRouteHandler)
  .openapi(getIpsPoolsRoute, getIpsPoolsRouteHandler)
  .openapi(postIpsPoolsRoute, postIpsPoolsRouteHandler)
  .openapi(deleteIpsPoolsPoolNameRoute, deleteIpsPoolsPoolNameRouteHandler)
  .openapi(getIpsPoolsPoolNameRoute, getIpsPoolsPoolNameRouteHandler)
  .openapi(putIpsPoolsPoolNameRoute, putIpsPoolsPoolNameRouteHandler)
  .openapi(postIpsPoolsPoolNameIpsRoute, postIpsPoolsPoolNameIpsRouteHandler)
  .openapi(deleteIpsPoolsPoolNameIpsIpRoute, deleteIpsPoolsPoolNameIpsIpRouteHandler)
  .openapi(getIpsRemainingRoute, getIpsRemainingRouteHandler)
  .openapi(getIpsWarmupRoute, getIpsWarmupRouteHandler)
  .openapi(postIpsWarmupRoute, postIpsWarmupRouteHandler)
  .openapi(deleteIpsWarmupIpAddressRoute, deleteIpsWarmupIpAddressRouteHandler)
  .openapi(getIpsWarmupIpAddressRoute, getIpsWarmupIpAddressRouteHandler)
  .openapi(getIpsIpAddressRoute, getIpsIpAddressRouteHandler)
  .openapi(postMailBatchRoute, postMailBatchRouteHandler)
  .openapi(getMailBatchBatchIdRoute, getMailBatchBatchIdRouteHandler)
  .openapi(postMailSendRoute, postMailSendRouteHandler)
  .openapi(getMailSettingsRoute, getMailSettingsRouteHandler)
  .openapi(getMailSettingsAddressWhitelistRoute, getMailSettingsAddressWhitelistRouteHandler)
  .openapi(patchMailSettingsAddressWhitelistRoute, patchMailSettingsAddressWhitelistRouteHandler)
  .openapi(getMailSettingsBouncePurgeRoute, getMailSettingsBouncePurgeRouteHandler)
  .openapi(patchMailSettingsBouncePurgeRoute, patchMailSettingsBouncePurgeRouteHandler)
  .openapi(getMailSettingsFooterRoute, getMailSettingsFooterRouteHandler)
  .openapi(patchMailSettingsFooterRoute, patchMailSettingsFooterRouteHandler)
  .openapi(getMailSettingsForwardBounceRoute, getMailSettingsForwardBounceRouteHandler)
  .openapi(patchMailSettingsForwardBounceRoute, patchMailSettingsForwardBounceRouteHandler)
  .openapi(getMailSettingsForwardSpamRoute, getMailSettingsForwardSpamRouteHandler)
  .openapi(patchMailSettingsForwardSpamRoute, patchMailSettingsForwardSpamRouteHandler)
  .openapi(getMailSettingsTemplateRoute, getMailSettingsTemplateRouteHandler)
  .openapi(patchMailSettingsTemplateRoute, patchMailSettingsTemplateRouteHandler)
  .openapi(getMailboxProvidersStatsRoute, getMailboxProvidersStatsRouteHandler)
  .openapi(deleteMarketingContactsRoute, deleteMarketingContactsRouteHandler)
  .openapi(getMarketingContactsRoute, getMarketingContactsRouteHandler)
  .openapi(putMarketingContactsRoute, putMarketingContactsRouteHandler)
  .openapi(postMarketingContactsBatchRoute, postMarketingContactsBatchRouteHandler)
  .openapi(getMarketingContactsCountRoute, getMarketingContactsCountRouteHandler)
  .openapi(getMarketingContactsExportsRoute, getMarketingContactsExportsRouteHandler)
  .openapi(postMarketingContactsExportsRoute, postMarketingContactsExportsRouteHandler)
  .openapi(getMarketingContactsExportsIdRoute, getMarketingContactsExportsIdRouteHandler)
  .openapi(putMarketingContactsImportsRoute, putMarketingContactsImportsRouteHandler)
  .openapi(getMarketingContactsImportsIdRoute, getMarketingContactsImportsIdRouteHandler)
  .openapi(postMarketingContactsSearchRoute, postMarketingContactsSearchRouteHandler)
  .openapi(postMarketingContactsSearchEmailsRoute, postMarketingContactsSearchEmailsRouteHandler)
  .openapi(getMarketingContactsIdRoute, getMarketingContactsIdRouteHandler)
  .openapi(getMarketingFieldDefinitionsRoute, getMarketingFieldDefinitionsRouteHandler)
  .openapi(postMarketingFieldDefinitionsRoute, postMarketingFieldDefinitionsRouteHandler)
  .openapi(
    deleteMarketingFieldDefinitionsCustomFieldIdRoute,
    deleteMarketingFieldDefinitionsCustomFieldIdRouteHandler,
  )
  .openapi(
    patchMarketingFieldDefinitionsCustomFieldIdRoute,
    patchMarketingFieldDefinitionsCustomFieldIdRouteHandler,
  )
  .openapi(getMarketingListsRoute, getMarketingListsRouteHandler)
  .openapi(postMarketingListsRoute, postMarketingListsRouteHandler)
  .openapi(deleteMarketingListsIdRoute, deleteMarketingListsIdRouteHandler)
  .openapi(getMarketingListsIdRoute, getMarketingListsIdRouteHandler)
  .openapi(patchMarketingListsIdRoute, patchMarketingListsIdRouteHandler)
  .openapi(deleteMarketingListsIdContactsRoute, deleteMarketingListsIdContactsRouteHandler)
  .openapi(getMarketingListsIdContactsCountRoute, getMarketingListsIdContactsCountRouteHandler)
  .openapi(getMarketingSegmentsRoute, getMarketingSegmentsRouteHandler)
  .openapi(postMarketingSegmentsRoute, postMarketingSegmentsRouteHandler)
  .openapi(getMarketingSegments20Route, getMarketingSegments20RouteHandler)
  .openapi(postMarketingSegments20Route, postMarketingSegments20RouteHandler)
  .openapi(deleteMarketingSegments20SegmentIdRoute, deleteMarketingSegments20SegmentIdRouteHandler)
  .openapi(getMarketingSegments20SegmentIdRoute, getMarketingSegments20SegmentIdRouteHandler)
  .openapi(patchMarketingSegments20SegmentIdRoute, patchMarketingSegments20SegmentIdRouteHandler)
  .openapi(postMarketingSegmentsDeleteRoute, postMarketingSegmentsDeleteRouteHandler)
  .openapi(deleteMarketingSegmentsSegmentIdRoute, deleteMarketingSegmentsSegmentIdRouteHandler)
  .openapi(getMarketingSegmentsSegmentIdRoute, getMarketingSegmentsSegmentIdRouteHandler)
  .openapi(patchMarketingSegmentsSegmentIdRoute, patchMarketingSegmentsSegmentIdRouteHandler)
  .openapi(postMarketingSendersRoute, postMarketingSendersRouteHandler)
  .openapi(deleteMarketingSinglesendsRoute, deleteMarketingSinglesendsRouteHandler)
  .openapi(getMarketingSinglesendsRoute, getMarketingSinglesendsRouteHandler)
  .openapi(postMarketingSinglesendsRoute, postMarketingSinglesendsRouteHandler)
  .openapi(getMarketingSinglesendsCategoriesRoute, getMarketingSinglesendsCategoriesRouteHandler)
  .openapi(postMarketingSinglesendsSearchRoute, postMarketingSinglesendsSearchRouteHandler)
  .openapi(deleteMarketingSinglesendsIdRoute, deleteMarketingSinglesendsIdRouteHandler)
  .openapi(getMarketingSinglesendsIdRoute, getMarketingSinglesendsIdRouteHandler)
  .openapi(patchMarketingSinglesendsIdRoute, patchMarketingSinglesendsIdRouteHandler)
  .openapi(postMarketingSinglesendsIdRoute, postMarketingSinglesendsIdRouteHandler)
  .openapi(
    deleteMarketingSinglesendsIdScheduleRoute,
    deleteMarketingSinglesendsIdScheduleRouteHandler,
  )
  .openapi(putMarketingSinglesendsIdScheduleRoute, putMarketingSinglesendsIdScheduleRouteHandler)
  .openapi(getMarketingStatsAutomationsRoute, getMarketingStatsAutomationsRouteHandler)
  .openapi(getMarketingStatsAutomationsExportRoute, getMarketingStatsAutomationsExportRouteHandler)
  .openapi(getMarketingStatsAutomationsIdRoute, getMarketingStatsAutomationsIdRouteHandler)
  .openapi(
    getMarketingStatsAutomationsIdLinksRoute,
    getMarketingStatsAutomationsIdLinksRouteHandler,
  )
  .openapi(getMarketingStatsSinglesendsRoute, getMarketingStatsSinglesendsRouteHandler)
  .openapi(getMarketingStatsSinglesendsExportRoute, getMarketingStatsSinglesendsExportRouteHandler)
  .openapi(getMarketingStatsSinglesendsIdRoute, getMarketingStatsSinglesendsIdRouteHandler)
  .openapi(
    getMarketingStatsSinglesendsIdLinksRoute,
    getMarketingStatsSinglesendsIdLinksRouteHandler,
  )
  .openapi(postMarketingTestSendEmailRoute, postMarketingTestSendEmailRouteHandler)
  .openapi(getMessagesRoute, getMessagesRouteHandler)
  .openapi(postMessagesDownloadRoute, postMessagesDownloadRouteHandler)
  .openapi(getMessagesDownloadDownloadUuidRoute, getMessagesDownloadDownloadUuidRouteHandler)
  .openapi(getMessagesMsgIdRoute, getMessagesMsgIdRouteHandler)
  .openapi(getPartnerSettingsRoute, getPartnerSettingsRouteHandler)
  .openapi(getPartnerSettingsNewRelicRoute, getPartnerSettingsNewRelicRouteHandler)
  .openapi(patchPartnerSettingsNewRelicRoute, patchPartnerSettingsNewRelicRouteHandler)
  .openapi(getScopesRoute, getScopesRouteHandler)
  .openapi(getScopesRequestsRoute, getScopesRequestsRouteHandler)
  .openapi(deleteScopesRequestsRequestIdRoute, deleteScopesRequestsRequestIdRouteHandler)
  .openapi(
    patchScopesRequestsRequestIdApproveRoute,
    patchScopesRequestsRequestIdApproveRouteHandler,
  )
  .openapi(getSendersRoute, getSendersRouteHandler)
  .openapi(postSendersRoute, postSendersRouteHandler)
  .openapi(deleteSendersSenderIdRoute, deleteSendersSenderIdRouteHandler)
  .openapi(getSendersSenderIdRoute, getSendersSenderIdRouteHandler)
  .openapi(patchSendersSenderIdRoute, patchSendersSenderIdRouteHandler)
  .openapi(
    postSendersSenderIdResendVerificationRoute,
    postSendersSenderIdResendVerificationRouteHandler,
  )
  .openapi(postSsoCertificatesRoute, postSsoCertificatesRouteHandler)
  .openapi(deleteSsoCertificatesCertIdRoute, deleteSsoCertificatesCertIdRouteHandler)
  .openapi(getSsoCertificatesCertIdRoute, getSsoCertificatesCertIdRouteHandler)
  .openapi(patchSsoCertificatesCertIdRoute, patchSsoCertificatesCertIdRouteHandler)
  .openapi(getSsoIntegrationsRoute, getSsoIntegrationsRouteHandler)
  .openapi(postSsoIntegrationsRoute, postSsoIntegrationsRouteHandler)
  .openapi(deleteSsoIntegrationsIdRoute, deleteSsoIntegrationsIdRouteHandler)
  .openapi(getSsoIntegrationsIdRoute, getSsoIntegrationsIdRouteHandler)
  .openapi(patchSsoIntegrationsIdRoute, patchSsoIntegrationsIdRouteHandler)
  .openapi(
    getSsoIntegrationsIntegrationIdCertificatesRoute,
    getSsoIntegrationsIntegrationIdCertificatesRouteHandler,
  )
  .openapi(postSsoTeammatesRoute, postSsoTeammatesRouteHandler)
  .openapi(patchSsoTeammatesUsernameRoute, patchSsoTeammatesUsernameRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getSubusersRoute, getSubusersRouteHandler)
  .openapi(postSubusersRoute, postSubusersRouteHandler)
  .openapi(getSubusersReputationsRoute, getSubusersReputationsRouteHandler)
  .openapi(getSubusersStatsRoute, getSubusersStatsRouteHandler)
  .openapi(getSubusersStatsMonthlyRoute, getSubusersStatsMonthlyRouteHandler)
  .openapi(getSubusersStatsSumsRoute, getSubusersStatsSumsRouteHandler)
  .openapi(deleteSubusersSubuserNameRoute, deleteSubusersSubuserNameRouteHandler)
  .openapi(patchSubusersSubuserNameRoute, patchSubusersSubuserNameRouteHandler)
  .openapi(putSubusersSubuserNameIpsRoute, putSubusersSubuserNameIpsRouteHandler)
  .openapi(deleteSubusersSubuserNameMonitorRoute, deleteSubusersSubuserNameMonitorRouteHandler)
  .openapi(getSubusersSubuserNameMonitorRoute, getSubusersSubuserNameMonitorRouteHandler)
  .openapi(postSubusersSubuserNameMonitorRoute, postSubusersSubuserNameMonitorRouteHandler)
  .openapi(putSubusersSubuserNameMonitorRoute, putSubusersSubuserNameMonitorRouteHandler)
  .openapi(getSubusersSubuserNameStatsMonthlyRoute, getSubusersSubuserNameStatsMonthlyRouteHandler)
  .openapi(deleteSuppressionBlocksRoute, deleteSuppressionBlocksRouteHandler)
  .openapi(getSuppressionBlocksRoute, getSuppressionBlocksRouteHandler)
  .openapi(deleteSuppressionBlocksEmailRoute, deleteSuppressionBlocksEmailRouteHandler)
  .openapi(getSuppressionBlocksEmailRoute, getSuppressionBlocksEmailRouteHandler)
  .openapi(deleteSuppressionBouncesRoute, deleteSuppressionBouncesRouteHandler)
  .openapi(getSuppressionBouncesRoute, getSuppressionBouncesRouteHandler)
  .openapi(deleteSuppressionBouncesEmailRoute, deleteSuppressionBouncesEmailRouteHandler)
  .openapi(getSuppressionBouncesEmailRoute, getSuppressionBouncesEmailRouteHandler)
  .openapi(deleteSuppressionInvalidEmailsRoute, deleteSuppressionInvalidEmailsRouteHandler)
  .openapi(getSuppressionInvalidEmailsRoute, getSuppressionInvalidEmailsRouteHandler)
  .openapi(
    deleteSuppressionInvalidEmailsEmailRoute,
    deleteSuppressionInvalidEmailsEmailRouteHandler,
  )
  .openapi(getSuppressionInvalidEmailsEmailRoute, getSuppressionInvalidEmailsEmailRouteHandler)
  .openapi(deleteSuppressionSpamReportsRoute, deleteSuppressionSpamReportsRouteHandler)
  .openapi(getSuppressionSpamReportsRoute, getSuppressionSpamReportsRouteHandler)
  .openapi(deleteSuppressionSpamReportsEmailRoute, deleteSuppressionSpamReportsEmailRouteHandler)
  .openapi(getSuppressionSpamReportsEmailRoute, getSuppressionSpamReportsEmailRouteHandler)
  .openapi(getSuppressionUnsubscribesRoute, getSuppressionUnsubscribesRouteHandler)
  .openapi(getTeammatesRoute, getTeammatesRouteHandler)
  .openapi(postTeammatesRoute, postTeammatesRouteHandler)
  .openapi(getTeammatesPendingRoute, getTeammatesPendingRouteHandler)
  .openapi(deleteTeammatesPendingTokenRoute, deleteTeammatesPendingTokenRouteHandler)
  .openapi(postTeammatesPendingTokenResendRoute, postTeammatesPendingTokenResendRouteHandler)
  .openapi(deleteTeammatesUsernameRoute, deleteTeammatesUsernameRouteHandler)
  .openapi(getTeammatesUsernameRoute, getTeammatesUsernameRouteHandler)
  .openapi(patchTeammatesUsernameRoute, patchTeammatesUsernameRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(deleteTemplatesTemplateIdRoute, deleteTemplatesTemplateIdRouteHandler)
  .openapi(getTemplatesTemplateIdRoute, getTemplatesTemplateIdRouteHandler)
  .openapi(patchTemplatesTemplateIdRoute, patchTemplatesTemplateIdRouteHandler)
  .openapi(postTemplatesTemplateIdRoute, postTemplatesTemplateIdRouteHandler)
  .openapi(postTemplatesTemplateIdVersionsRoute, postTemplatesTemplateIdVersionsRouteHandler)
  .openapi(
    deleteTemplatesTemplateIdVersionsVersionIdRoute,
    deleteTemplatesTemplateIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    getTemplatesTemplateIdVersionsVersionIdRoute,
    getTemplatesTemplateIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    patchTemplatesTemplateIdVersionsVersionIdRoute,
    patchTemplatesTemplateIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    postTemplatesTemplateIdVersionsVersionIdActivateRoute,
    postTemplatesTemplateIdVersionsVersionIdActivateRouteHandler,
  )
  .openapi(getTrackingSettingsRoute, getTrackingSettingsRouteHandler)
  .openapi(getTrackingSettingsClickRoute, getTrackingSettingsClickRouteHandler)
  .openapi(patchTrackingSettingsClickRoute, patchTrackingSettingsClickRouteHandler)
  .openapi(getTrackingSettingsGoogleAnalyticsRoute, getTrackingSettingsGoogleAnalyticsRouteHandler)
  .openapi(
    patchTrackingSettingsGoogleAnalyticsRoute,
    patchTrackingSettingsGoogleAnalyticsRouteHandler,
  )
  .openapi(getTrackingSettingsOpenRoute, getTrackingSettingsOpenRouteHandler)
  .openapi(patchTrackingSettingsOpenRoute, patchTrackingSettingsOpenRouteHandler)
  .openapi(getTrackingSettingsSubscriptionRoute, getTrackingSettingsSubscriptionRouteHandler)
  .openapi(patchTrackingSettingsSubscriptionRoute, patchTrackingSettingsSubscriptionRouteHandler)
  .openapi(getUserAccountRoute, getUserAccountRouteHandler)
  .openapi(getUserCreditsRoute, getUserCreditsRouteHandler)
  .openapi(getUserEmailRoute, getUserEmailRouteHandler)
  .openapi(putUserEmailRoute, putUserEmailRouteHandler)
  .openapi(putUserPasswordRoute, putUserPasswordRouteHandler)
  .openapi(getUserProfileRoute, getUserProfileRouteHandler)
  .openapi(patchUserProfileRoute, patchUserProfileRouteHandler)
  .openapi(getUserScheduledSendsRoute, getUserScheduledSendsRouteHandler)
  .openapi(postUserScheduledSendsRoute, postUserScheduledSendsRouteHandler)
  .openapi(deleteUserScheduledSendsBatchIdRoute, deleteUserScheduledSendsBatchIdRouteHandler)
  .openapi(getUserScheduledSendsBatchIdRoute, getUserScheduledSendsBatchIdRouteHandler)
  .openapi(patchUserScheduledSendsBatchIdRoute, patchUserScheduledSendsBatchIdRouteHandler)
  .openapi(getUserSettingsEnforcedTlsRoute, getUserSettingsEnforcedTlsRouteHandler)
  .openapi(patchUserSettingsEnforcedTlsRoute, patchUserSettingsEnforcedTlsRouteHandler)
  .openapi(getUserUsernameRoute, getUserUsernameRouteHandler)
  .openapi(putUserUsernameRoute, putUserUsernameRouteHandler)
  .openapi(getUserWebhooksEventSettingsRoute, getUserWebhooksEventSettingsRouteHandler)
  .openapi(patchUserWebhooksEventSettingsRoute, patchUserWebhooksEventSettingsRouteHandler)
  .openapi(getUserWebhooksEventSettingsSignedRoute, getUserWebhooksEventSettingsSignedRouteHandler)
  .openapi(
    patchUserWebhooksEventSettingsSignedRoute,
    patchUserWebhooksEventSettingsSignedRouteHandler,
  )
  .openapi(postUserWebhooksEventTestRoute, postUserWebhooksEventTestRouteHandler)
  .openapi(getUserWebhooksParseSettingsRoute, getUserWebhooksParseSettingsRouteHandler)
  .openapi(postUserWebhooksParseSettingsRoute, postUserWebhooksParseSettingsRouteHandler)
  .openapi(
    deleteUserWebhooksParseSettingsHostnameRoute,
    deleteUserWebhooksParseSettingsHostnameRouteHandler,
  )
  .openapi(
    getUserWebhooksParseSettingsHostnameRoute,
    getUserWebhooksParseSettingsHostnameRouteHandler,
  )
  .openapi(
    patchUserWebhooksParseSettingsHostnameRoute,
    patchUserWebhooksParseSettingsHostnameRouteHandler,
  )
  .openapi(getUserWebhooksParseStatsRoute, getUserWebhooksParseStatsRouteHandler)
  .openapi(postValidationsEmailRoute, postValidationsEmailRouteHandler)
  .openapi(getVerifiedSendersRoute, getVerifiedSendersRouteHandler)
  .openapi(postVerifiedSendersRoute, postVerifiedSendersRouteHandler)
  .openapi(getVerifiedSendersDomainsRoute, getVerifiedSendersDomainsRouteHandler)
  .openapi(postVerifiedSendersResendIdRoute, postVerifiedSendersResendIdRouteHandler)
  .openapi(getVerifiedSendersStepsCompletedRoute, getVerifiedSendersStepsCompletedRouteHandler)
  .openapi(getVerifiedSendersVerifyTokenRoute, getVerifiedSendersVerifyTokenRouteHandler)
  .openapi(deleteVerifiedSendersIdRoute, deleteVerifiedSendersIdRouteHandler)
  .openapi(patchVerifiedSendersIdRoute, patchVerifiedSendersIdRouteHandler)
  .openapi(postWhitelabelDnsEmailRoute, postWhitelabelDnsEmailRouteHandler)
  .openapi(getWhitelabelDomainsRoute, getWhitelabelDomainsRouteHandler)
  .openapi(postWhitelabelDomainsRoute, postWhitelabelDomainsRouteHandler)
  .openapi(getWhitelabelDomainsDefaultRoute, getWhitelabelDomainsDefaultRouteHandler)
  .openapi(deleteWhitelabelDomainsSubuserRoute, deleteWhitelabelDomainsSubuserRouteHandler)
  .openapi(getWhitelabelDomainsSubuserRoute, getWhitelabelDomainsSubuserRouteHandler)
  .openapi(deleteWhitelabelDomainsDomainIdRoute, deleteWhitelabelDomainsDomainIdRouteHandler)
  .openapi(getWhitelabelDomainsDomainIdRoute, getWhitelabelDomainsDomainIdRouteHandler)
  .openapi(patchWhitelabelDomainsDomainIdRoute, patchWhitelabelDomainsDomainIdRouteHandler)
  .openapi(
    postWhitelabelDomainsDomainIdSubuserRoute,
    postWhitelabelDomainsDomainIdSubuserRouteHandler,
  )
  .openapi(postWhitelabelDomainsIdIpsRoute, postWhitelabelDomainsIdIpsRouteHandler)
  .openapi(deleteWhitelabelDomainsIdIpsIpRoute, deleteWhitelabelDomainsIdIpsIpRouteHandler)
  .openapi(postWhitelabelDomainsIdValidateRoute, postWhitelabelDomainsIdValidateRouteHandler)
  .openapi(getWhitelabelIpsRoute, getWhitelabelIpsRouteHandler)
  .openapi(postWhitelabelIpsRoute, postWhitelabelIpsRouteHandler)
  .openapi(deleteWhitelabelIpsIdRoute, deleteWhitelabelIpsIdRouteHandler)
  .openapi(getWhitelabelIpsIdRoute, getWhitelabelIpsIdRouteHandler)
  .openapi(postWhitelabelIpsIdValidateRoute, postWhitelabelIpsIdValidateRouteHandler)
  .openapi(getWhitelabelLinksRoute, getWhitelabelLinksRouteHandler)
  .openapi(postWhitelabelLinksRoute, postWhitelabelLinksRouteHandler)
  .openapi(getWhitelabelLinksDefaultRoute, getWhitelabelLinksDefaultRouteHandler)
  .openapi(deleteWhitelabelLinksSubuserRoute, deleteWhitelabelLinksSubuserRouteHandler)
  .openapi(getWhitelabelLinksSubuserRoute, getWhitelabelLinksSubuserRouteHandler)
  .openapi(deleteWhitelabelLinksIdRoute, deleteWhitelabelLinksIdRouteHandler)
  .openapi(getWhitelabelLinksIdRoute, getWhitelabelLinksIdRouteHandler)
  .openapi(patchWhitelabelLinksIdRoute, patchWhitelabelLinksIdRouteHandler)
  .openapi(postWhitelabelLinksIdValidateRoute, postWhitelabelLinksIdValidateRouteHandler)
  .openapi(postWhitelabelLinksLinkIdSubuserRoute, postWhitelabelLinksLinkIdSubuserRouteHandler)

export default app
