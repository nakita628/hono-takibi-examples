import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  deleteAdAccountsAdAccountIdCampaignAdPreviewRoute,
  deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute,
  deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute,
  deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute,
  deleteAdAccountsAdAccountIdPromotionsPromotionIdRoute,
  deleteAdAccountsAdAccountIdSandboxRoute,
  getAdAccountsAdAccountIdAbTestsAbTestIdRoute,
  getAdAccountsAdAccountIdAbTestsRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute,
  getAdAccountsAdAccountIdAdGroupsAdGroupIdRoute,
  getAdAccountsAdAccountIdAdGroupsAnalyticsRoute,
  getAdAccountsAdAccountIdAdGroupsRoute,
  getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdAdsAdIdRoute,
  getAdAccountsAdAccountIdAdsAnalyticsRoute,
  getAdAccountsAdAccountIdAdsCreditDiscountsRoute,
  getAdAccountsAdAccountIdAdsRoute,
  getAdAccountsAdAccountIdAdsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  getAdAccountsAdAccountIdAllowedDomainsRoute,
  getAdAccountsAdAccountIdAnalyticsRoute,
  getAdAccountsAdAccountIdAudienceInsightsRoute,
  getAdAccountsAdAccountIdAudiencesAudienceIdRoute,
  getAdAccountsAdAccountIdAudiencesRoute,
  getAdAccountsAdAccountIdAudiencesSharedAccountsRoute,
  getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRoute,
  getAdAccountsAdAccountIdBillingInvoicesRoute,
  getAdAccountsAdAccountIdBillingProfilesRoute,
  getAdAccountsAdAccountIdBulkBulkRequestIdRoute,
  getAdAccountsAdAccountIdCampaignAdPreviewRoute,
  getAdAccountsAdAccountIdCampaignsAnalyticsRoute,
  getAdAccountsAdAccountIdCampaignsCampaignIdRoute,
  getAdAccountsAdAccountIdCampaignsRoute,
  getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute,
  getAdAccountsAdAccountIdConversionDeletionRequestsRoute,
  getAdAccountsAdAccountIdConversionEqsRoute,
  getAdAccountsAdAccountIdConversionTagsConversionTagIdRoute,
  getAdAccountsAdAccountIdConversionTagsOcpmEligibleRoute,
  getAdAccountsAdAccountIdConversionTagsPageVisitRoute,
  getAdAccountsAdAccountIdConversionTagsRoute,
  getAdAccountsAdAccountIdCustomerListsCustomerListIdRoute,
  getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRoute,
  getAdAccountsAdAccountIdCustomerListsRoute,
  getAdAccountsAdAccountIdCustomerSegmentsRoute,
  getAdAccountsAdAccountIdInsightsAudiencesRoute,
  getAdAccountsAdAccountIdKeywordsMetricsRoute,
  getAdAccountsAdAccountIdKeywordsRoute,
  getAdAccountsAdAccountIdLabelsRoute,
  getAdAccountsAdAccountIdLeadFormsLeadFormIdRoute,
  getAdAccountsAdAccountIdLeadFormsRoute,
  getAdAccountsAdAccountIdLeadsExportLeadsExportIdRoute,
  getAdAccountsAdAccountIdLeadsSubscriptionsRoute,
  getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute,
  getAdAccountsAdAccountIdMmmReportsRoute,
  getAdAccountsAdAccountIdOrderLinesOrderLineIdRoute,
  getAdAccountsAdAccountIdOrderLinesRoute,
  getAdAccountsAdAccountIdPinsAnalyticsRoute,
  getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRoute,
  getAdAccountsAdAccountIdProductGroupPromotionsRoute,
  getAdAccountsAdAccountIdProductGroupsAnalyticsRoute,
  getAdAccountsAdAccountIdPromotionAppliedEntitiesRoute,
  getAdAccountsAdAccountIdPromotionsPromotionIdRoute,
  getAdAccountsAdAccountIdPromotionsRoute,
  getAdAccountsAdAccountIdPublisherBlocklistsRoute,
  getAdAccountsAdAccountIdReportsBrandCategorySkuRoute,
  getAdAccountsAdAccountIdReportsRoute,
  getAdAccountsAdAccountIdRoute,
  getAdAccountsAdAccountIdSchedulesRoute,
  getAdAccountsAdAccountIdSsioAccountsRoute,
  getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRoute,
  getAdAccountsAdAccountIdSsioInsertionOrdersStatusRoute,
  getAdAccountsAdAccountIdSsioOrderLinesRoute,
  getAdAccountsAdAccountIdTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdTargetingTemplatesRoute,
  getAdAccountsAdAccountIdTemplatesRoute,
  getAdAccountsAdAccountIdTermsOfServiceRoute,
  getAdAccountsEntityHistoryRoute,
  getAdAccountsRoute,
  patchAdAccountsAdAccountIdAbTestsRoute,
  patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute,
  patchAdAccountsAdAccountIdAdGroupsRoute,
  patchAdAccountsAdAccountIdAdsRoute,
  patchAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRoute,
  patchAdAccountsAdAccountIdAudiencesAudienceIdRoute,
  patchAdAccountsAdAccountIdAudiencesBusinessesSharedRoute,
  patchAdAccountsAdAccountIdCampaignsRoute,
  patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute,
  patchAdAccountsAdAccountIdCustomerListsCustomerListIdRoute,
  patchAdAccountsAdAccountIdCustomerSegmentsRoute,
  patchAdAccountsAdAccountIdKeywordsRoute,
  patchAdAccountsAdAccountIdLabelsRoute,
  patchAdAccountsAdAccountIdLeadFormsRoute,
  patchAdAccountsAdAccountIdProductGroupPromotionsRoute,
  patchAdAccountsAdAccountIdPromotionsRoute,
  patchAdAccountsAdAccountIdPublisherBlocklistsRoute,
  patchAdAccountsAdAccountIdSchedulesRoute,
  patchAdAccountsAdAccountIdSsioInsertionOrdersRoute,
  patchAdAccountsAdAccountIdTargetingTemplatesRoute,
  postAdAccountsAdAccountIdAbTestsRoute,
  postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRoute,
  postAdAccountsAdAccountIdAdGroupsAudienceSizingRoute,
  postAdAccountsAdAccountIdAdGroupsRoute,
  postAdAccountsAdAccountIdAdPreviewsRoute,
  postAdAccountsAdAccountIdAdsCreditRedeemRoute,
  postAdAccountsAdAccountIdAdsRoute,
  postAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  postAdAccountsAdAccountIdAudiencesRoute,
  postAdAccountsAdAccountIdBidFloorRoute,
  postAdAccountsAdAccountIdBulkDownloadRoute,
  postAdAccountsAdAccountIdBulkUpsertRoute,
  postAdAccountsAdAccountIdCampaignAdPreviewRoute,
  postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRoute,
  postAdAccountsAdAccountIdCampaignsRoute,
  postAdAccountsAdAccountIdConversionDeletionRequestsRoute,
  postAdAccountsAdAccountIdConversionSegmentsRoute,
  postAdAccountsAdAccountIdConversionTagsRoute,
  postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRoute,
  postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRoute,
  postAdAccountsAdAccountIdCustomerListsRoute,
  postAdAccountsAdAccountIdCustomerSegmentsRoute,
  postAdAccountsAdAccountIdEventsRoute,
  postAdAccountsAdAccountIdKeywordsRoute,
  postAdAccountsAdAccountIdLabelsLabelIdApplyRoute,
  postAdAccountsAdAccountIdLabelsLabelIdRemoveRoute,
  postAdAccountsAdAccountIdLabelsRoute,
  postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRoute,
  postAdAccountsAdAccountIdLeadFormsRoute,
  postAdAccountsAdAccountIdLeadsExportRoute,
  postAdAccountsAdAccountIdLeadsSubscriptionsRoute,
  postAdAccountsAdAccountIdMmmReportsRoute,
  postAdAccountsAdAccountIdMsotEventsRoute,
  postAdAccountsAdAccountIdProductGroupPromotionsRoute,
  postAdAccountsAdAccountIdPromotionsRoute,
  postAdAccountsAdAccountIdReportsBrandCategorySkuRoute,
  postAdAccountsAdAccountIdReportsRoute,
  postAdAccountsAdAccountIdSchedulesRoute,
  postAdAccountsAdAccountIdSsioInsertionOrdersRoute,
  postAdAccountsAdAccountIdTargetingTemplatesRoute,
  postAdAccountsAdAccountIdTemplatesTemplateIdReportsRoute,
  postAdAccountsRoute,
} from '../routes'

export const getAdAccountsRouteHandler: RouteHandler<typeof getAdAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsRouteHandler: RouteHandler<typeof postAdAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsEntityHistoryRouteHandler: RouteHandler<
  typeof getAdAccountsEntityHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAbTestsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAbTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAbTestsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAbTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAbTestsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAbTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAbTestsAbTestIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAbTestsAbTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdGroupsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAdGroupsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdGroupsAudienceSizingRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdGroupsAudienceSizingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAdGroupIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdPreviewsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdPreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAdsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdsAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdsTargetingAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdsTargetingAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdsAdIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdsAdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdsCreditDiscountsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdsCreditDiscountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdsCreditRedeemRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdsCreditRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAdvertiserDefinedEventsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAdvertiserDefinedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAdvertiserDefinedEventsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAdvertiserDefinedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAdvertiserDefinedEventsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAdvertiserDefinedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAllowedDomainsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAllowedDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAudienceInsightsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAudienceInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdAudiencesRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAudiencesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAudiencesBusinessesSharedRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAudiencesBusinessesSharedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAudiencesSharedAccountsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAudiencesSharedAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdAudiencesAudienceIdRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdAudiencesAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdAudiencesAudienceIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdAudiencesAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdBidFloorRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdBidFloorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdBillingInvoicesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdBillingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdBillingProfilesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdBillingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdBulkDownloadRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdBulkDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdBulkUpsertRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdBulkUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdBulkBulkRequestIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdBulkBulkRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCampaignAdPreviewRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCampaignAdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCampaignAdPreviewRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCampaignAdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdCampaignAdPreviewRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdCampaignAdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCampaignsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCampaignsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdCampaignsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCampaignsAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCampaignsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionDeletionRequestsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionDeletionRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdConversionDeletionRequestsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdConversionDeletionRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionEqsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionEqsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdConversionSegmentsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdConversionSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdConversionTagsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdConversionTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionTagsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionTagsOcpmEligibleRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionTagsOcpmEligibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionTagsPageVisitRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionTagsPageVisitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdConversionTagsConversionTagIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdConversionTagsConversionTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCustomerListsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCustomerListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCustomerListsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCustomerListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCustomerListsCustomerListIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdCustomerListsCustomerListIdRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdCustomerListsCustomerListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdCustomerSegmentsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdCustomerSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdCustomerSegmentsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdCustomerSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdCustomerSegmentsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdCustomerSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdEventsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdInsightsAudiencesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdInsightsAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdKeywordsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdKeywordsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdKeywordsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdKeywordsMetricsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdKeywordsMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLabelsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLabelsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdLabelsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLabelsLabelIdApplyRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLabelsLabelIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLabelsLabelIdRemoveRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLabelsLabelIdRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLeadFormsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLeadFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLeadFormsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLeadFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdLeadFormsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdLeadFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLeadFormsLeadFormIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLeadFormsLeadFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLeadsSubscriptionsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLeadsSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLeadsSubscriptionsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLeadsSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdLeadsExportRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdLeadsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdLeadsExportLeadsExportIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdLeadsExportLeadsExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdMmmReportsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdMmmReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdMmmReportsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdMmmReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdMsotEventsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdMsotEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdOrderLinesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdOrderLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdOrderLinesOrderLineIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdOrderLinesOrderLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdPinsAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdPinsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdProductGroupPromotionsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdProductGroupPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdProductGroupPromotionsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdProductGroupPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdProductGroupPromotionsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdProductGroupPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdProductGroupsAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdProductGroupsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdPromotionAppliedEntitiesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdPromotionAppliedEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdPromotionsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdPromotionsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdPromotionsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdPromotionsPromotionIdRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdPromotionsPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdPromotionsPromotionIdRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdPromotionsPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdPublisherBlocklistsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdPublisherBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdPublisherBlocklistsRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdPublisherBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdReportsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdReportsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdReportsBrandCategorySkuRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdReportsBrandCategorySkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdReportsBrandCategorySkuRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdReportsBrandCategorySkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdAccountsAdAccountIdSandboxRouteHandler: RouteHandler<
  typeof deleteAdAccountsAdAccountIdSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdSchedulesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdSchedulesRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdSchedulesRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdSsioAccountsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdSsioAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdSsioInsertionOrdersRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdSsioInsertionOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdSsioInsertionOrdersRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdSsioInsertionOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdSsioInsertionOrdersStatusRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdSsioInsertionOrdersStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdSsioOrderLinesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdSsioOrderLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdTargetingAnalyticsRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdTargetingAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdAccountsAdAccountIdTargetingTemplatesRouteHandler: RouteHandler<
  typeof patchAdAccountsAdAccountIdTargetingTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdTemplatesRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdAccountsAdAccountIdTemplatesTemplateIdReportsRouteHandler: RouteHandler<
  typeof postAdAccountsAdAccountIdTemplatesTemplateIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdAccountsAdAccountIdTermsOfServiceRouteHandler: RouteHandler<
  typeof getAdAccountsAdAccountIdTermsOfServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
