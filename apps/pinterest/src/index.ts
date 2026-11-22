import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abTestsHandler,
  adAccountsHandler,
  adGroupsHandler,
  adsHandler,
  advancedAuctionHandler,
  audienceInsightsHandler,
  audiencesHandler,
  audienceSharingHandler,
  billingHandler,
  boardsHandler,
  bulkHandler,
  businessAccessAnalyticsHandler,
  businessAccessAssetsHandler,
  businessAccessInviteHandler,
  businessAccessMiscHandler,
  businessAccessRelationshipsHandler,
  campaignsHandler,
  catalogFeedsHandler,
  catalogItemsHandler,
  catalogProductGroupsHandler,
  catalogReportsHandler,
  catalogsHandler,
  catalogSupplementalHandler,
  conversionDeletionRequestsHandler,
  conversionEqsHandler,
  conversionEventsHandler,
  conversionSegmentsHandler,
  conversionsHandler,
  conversionTagsHandler,
  customerListsHandler,
  customerListUploadsHandler,
  customerSegmentHandler,
  entityHistoryHandler,
  integrationsHandler,
  keywordsHandler,
  labelsHandler,
  leadAdsHandler,
  leadFormsHandler,
  leadsExportHandler,
  mediaHandler,
  mediaLibraryHandler,
  merchantStatusHandler,
  msotEventsHandler,
  notificationHandler,
  oauthHandler,
  orderLinesHandler,
  overlayAssignmentRulesHandler,
  overlaysHandler,
  pinsHandler,
  productGroupPromotionsHandler,
  productTagsHandler,
  promotionsHandler,
  publisherBlocklistsHandler,
  resourcesHandler,
  rmnBillingContractHandler,
  schedulesHandler,
  searchHandler,
  targetingTemplateHandler,
  termsHandler,
  termsOfServiceHandler,
  trendsHandler,
  userAccountHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adAccountsHandler)
  .route('/', entityHistoryHandler)
  .route('/', abTestsHandler)
  .route('/', adGroupsHandler)
  .route('/', publisherBlocklistsHandler)
  .route('/', adsHandler)
  .route('/', billingHandler)
  .route('/', conversionsHandler)
  .route('/', businessAccessMiscHandler)
  .route('/', audienceInsightsHandler)
  .route('/', audiencesHandler)
  .route('/', audienceSharingHandler)
  .route('/', bulkHandler)
  .route('/', campaignsHandler)
  .route('/', conversionDeletionRequestsHandler)
  .route('/', conversionEqsHandler)
  .route('/', conversionSegmentsHandler)
  .route('/', conversionTagsHandler)
  .route('/', customerListsHandler)
  .route('/', customerListUploadsHandler)
  .route('/', customerSegmentHandler)
  .route('/', conversionEventsHandler)
  .route('/', keywordsHandler)
  .route('/', labelsHandler)
  .route('/', leadFormsHandler)
  .route('/', leadAdsHandler)
  .route('/', leadsExportHandler)
  .route('/', msotEventsHandler)
  .route('/', orderLinesHandler)
  .route('/', productGroupPromotionsHandler)
  .route('/', promotionsHandler)
  .route('/', schedulesHandler)
  .route('/', targetingTemplateHandler)
  .route('/', termsOfServiceHandler)
  .route('/', advancedAuctionHandler)
  .route('/', boardsHandler)
  .route('/', businessAccessRelationshipsHandler)
  .route('/', businessAccessInviteHandler)
  .route('/', businessAccessAnalyticsHandler)
  .route('/', businessAccessAssetsHandler)
  .route('/', rmnBillingContractHandler)
  .route('/', catalogsHandler)
  .route('/', catalogFeedsHandler)
  .route('/', catalogItemsHandler)
  .route('/', catalogProductGroupsHandler)
  .route('/', catalogReportsHandler)
  .route('/', catalogSupplementalHandler)
  .route('/', integrationsHandler)
  .route('/', mediaHandler)
  .route('/', mediaLibraryHandler)
  .route('/', merchantStatusHandler)
  .route('/', notificationHandler)
  .route('/', oauthHandler)
  .route('/', overlayAssignmentRulesHandler)
  .route('/', overlaysHandler)
  .route('/', pinsHandler)
  .route('/', productTagsHandler)
  .route('/', resourcesHandler)
  .route('/', searchHandler)
  .route('/', termsHandler)
  .route('/', trendsHandler)
  .route('/', userAccountHandler)

export default app
