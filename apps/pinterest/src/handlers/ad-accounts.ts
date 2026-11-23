import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const adAccountsHandler = app
  .openapi(getAdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsEntityHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAbTestsAbTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsAudienceSizingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsCreditDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdsCreditRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAllowedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudienceInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAudiencesBusinessesSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesSharedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAudiencesAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdBidFloorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdBulkDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdBulkUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBulkBulkRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionDeletionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdConversionDeletionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionEqsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdConversionSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdConversionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsOcpmEligibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsPageVisitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsConversionTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCustomerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCustomerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCustomerListsCustomerListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCustomerListsCustomerListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdInsightsAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdKeywordsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsLabelIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsLabelIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadFormsLeadFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadsExportLeadsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdMmmReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdMmmReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdMsotEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdOrderLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdOrderLinesOrderLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPinsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPromotionAppliedEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdReportsBrandCategorySkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdReportsBrandCategorySkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdSsioInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdSsioInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioInsertionOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioOrderLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdTemplatesTemplateIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTermsOfServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
