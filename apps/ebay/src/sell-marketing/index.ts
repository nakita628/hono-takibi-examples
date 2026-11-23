import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdCampaignCampaignIdAdAdIdRoute,
  deleteAdCampaignCampaignIdRoute,
  deleteAdReportTaskReportTaskIdRoute,
  deleteItemPriceMarkdownPromotionIdRoute,
  deleteItemPromotionPromotionIdRoute,
  getAdCampaignCampaignIdAdAdIdRoute,
  getAdCampaignCampaignIdAdGroupAdGroupIdRoute,
  getAdCampaignCampaignIdAdGroupRoute,
  getAdCampaignCampaignIdAdRoute,
  getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute,
  getAdCampaignCampaignIdKeywordKeywordIdRoute,
  getAdCampaignCampaignIdKeywordRoute,
  getAdCampaignCampaignIdRoute,
  getAdCampaignCampaignIdSuggestItemsRoute,
  getAdCampaignFindCampaignByAdReferenceRoute,
  getAdCampaignGetCampaignByNameRoute,
  getAdCampaignRoute,
  getAdReportMetadataReportTypeRoute,
  getAdReportMetadataRoute,
  getAdReportReportIdRoute,
  getAdReportTaskReportTaskIdRoute,
  getAdReportTaskRoute,
  getItemPriceMarkdownPromotionIdRoute,
  getItemPromotionPromotionIdRoute,
  getNegativeKeywordNegativeKeywordIdRoute,
  getNegativeKeywordRoute,
  getPromotionPromotionIdGetListingSetRoute,
  getPromotionReportRoute,
  getPromotionRoute,
  getPromotionSummaryReportRoute,
  postAdCampaignCampaignIdAdAdIdUpdateBidRoute,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRoute,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRoute,
  postAdCampaignCampaignIdAdGroupRoute,
  postAdCampaignCampaignIdAdRoute,
  postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute,
  postAdCampaignCampaignIdBulkCreateKeywordRoute,
  postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkDeleteAdsByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsStatusRoute,
  postAdCampaignCampaignIdBulkUpdateKeywordRoute,
  postAdCampaignCampaignIdCloneRoute,
  postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdEndRoute,
  postAdCampaignCampaignIdKeywordRoute,
  postAdCampaignCampaignIdPauseRoute,
  postAdCampaignCampaignIdResumeRoute,
  postAdCampaignCampaignIdUpdateAdRateStrategyRoute,
  postAdCampaignCampaignIdUpdateCampaignBudgetRoute,
  postAdCampaignCampaignIdUpdateCampaignIdentificationRoute,
  postAdCampaignRoute,
  postAdReportTaskRoute,
  postBulkCreateNegativeKeywordRoute,
  postBulkUpdateNegativeKeywordRoute,
  postItemPriceMarkdownRoute,
  postItemPromotionRoute,
  postNegativeKeywordRoute,
  postPromotionPromotionIdPauseRoute,
  postPromotionPromotionIdResumeRoute,
  putAdCampaignCampaignIdAdGroupAdGroupIdRoute,
  putAdCampaignCampaignIdKeywordKeywordIdRoute,
  putItemPriceMarkdownPromotionIdRoute,
  putItemPromotionPromotionIdRoute,
  putNegativeKeywordNegativeKeywordIdRoute,
} from './routes'
import {
  deleteAdCampaignCampaignIdAdAdIdRouteHandler,
  deleteAdCampaignCampaignIdRouteHandler,
  deleteAdReportTaskReportTaskIdRouteHandler,
  deleteItemPriceMarkdownPromotionIdRouteHandler,
  deleteItemPromotionPromotionIdRouteHandler,
  getAdCampaignCampaignIdAdAdIdRouteHandler,
  getAdCampaignCampaignIdAdGroupAdGroupIdRouteHandler,
  getAdCampaignCampaignIdAdGroupRouteHandler,
  getAdCampaignCampaignIdAdRouteHandler,
  getAdCampaignCampaignIdGetAdsByInventoryReferenceRouteHandler,
  getAdCampaignCampaignIdKeywordKeywordIdRouteHandler,
  getAdCampaignCampaignIdKeywordRouteHandler,
  getAdCampaignCampaignIdRouteHandler,
  getAdCampaignCampaignIdSuggestItemsRouteHandler,
  getAdCampaignFindCampaignByAdReferenceRouteHandler,
  getAdCampaignGetCampaignByNameRouteHandler,
  getAdCampaignRouteHandler,
  getAdReportMetadataReportTypeRouteHandler,
  getAdReportMetadataRouteHandler,
  getAdReportReportIdRouteHandler,
  getAdReportTaskReportTaskIdRouteHandler,
  getAdReportTaskRouteHandler,
  getItemPriceMarkdownPromotionIdRouteHandler,
  getItemPromotionPromotionIdRouteHandler,
  getNegativeKeywordNegativeKeywordIdRouteHandler,
  getNegativeKeywordRouteHandler,
  getPromotionPromotionIdGetListingSetRouteHandler,
  getPromotionReportRouteHandler,
  getPromotionRouteHandler,
  getPromotionSummaryReportRouteHandler,
  postAdCampaignCampaignIdAdAdIdUpdateBidRouteHandler,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRouteHandler,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRouteHandler,
  postAdCampaignCampaignIdAdGroupRouteHandler,
  postAdCampaignCampaignIdAdRouteHandler,
  postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRouteHandler,
  postAdCampaignCampaignIdBulkCreateAdsByListingIdRouteHandler,
  postAdCampaignCampaignIdBulkCreateKeywordRouteHandler,
  postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRouteHandler,
  postAdCampaignCampaignIdBulkDeleteAdsByListingIdRouteHandler,
  postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRouteHandler,
  postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRouteHandler,
  postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRouteHandler,
  postAdCampaignCampaignIdBulkUpdateAdsStatusRouteHandler,
  postAdCampaignCampaignIdBulkUpdateKeywordRouteHandler,
  postAdCampaignCampaignIdCloneRouteHandler,
  postAdCampaignCampaignIdCreateAdsByInventoryReferenceRouteHandler,
  postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRouteHandler,
  postAdCampaignCampaignIdEndRouteHandler,
  postAdCampaignCampaignIdKeywordRouteHandler,
  postAdCampaignCampaignIdPauseRouteHandler,
  postAdCampaignCampaignIdResumeRouteHandler,
  postAdCampaignCampaignIdUpdateAdRateStrategyRouteHandler,
  postAdCampaignCampaignIdUpdateCampaignBudgetRouteHandler,
  postAdCampaignCampaignIdUpdateCampaignIdentificationRouteHandler,
  postAdCampaignRouteHandler,
  postAdReportTaskRouteHandler,
  postBulkCreateNegativeKeywordRouteHandler,
  postBulkUpdateNegativeKeywordRouteHandler,
  postItemPriceMarkdownRouteHandler,
  postItemPromotionRouteHandler,
  postNegativeKeywordRouteHandler,
  postPromotionPromotionIdPauseRouteHandler,
  postPromotionPromotionIdResumeRouteHandler,
  putAdCampaignCampaignIdAdGroupAdGroupIdRouteHandler,
  putAdCampaignCampaignIdKeywordKeywordIdRouteHandler,
  putItemPriceMarkdownPromotionIdRouteHandler,
  putItemPromotionPromotionIdRouteHandler,
  putNegativeKeywordNegativeKeywordIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdCampaignRoute, getAdCampaignRouteHandler)
  .openapi(postAdCampaignRoute, postAdCampaignRouteHandler)
  .openapi(
    getAdCampaignFindCampaignByAdReferenceRoute,
    getAdCampaignFindCampaignByAdReferenceRouteHandler,
  )
  .openapi(getAdCampaignGetCampaignByNameRoute, getAdCampaignGetCampaignByNameRouteHandler)
  .openapi(deleteAdCampaignCampaignIdRoute, deleteAdCampaignCampaignIdRouteHandler)
  .openapi(getAdCampaignCampaignIdRoute, getAdCampaignCampaignIdRouteHandler)
  .openapi(getAdCampaignCampaignIdAdRoute, getAdCampaignCampaignIdAdRouteHandler)
  .openapi(postAdCampaignCampaignIdAdRoute, postAdCampaignCampaignIdAdRouteHandler)
  .openapi(deleteAdCampaignCampaignIdAdAdIdRoute, deleteAdCampaignCampaignIdAdAdIdRouteHandler)
  .openapi(getAdCampaignCampaignIdAdAdIdRoute, getAdCampaignCampaignIdAdAdIdRouteHandler)
  .openapi(
    postAdCampaignCampaignIdAdAdIdUpdateBidRoute,
    postAdCampaignCampaignIdAdAdIdUpdateBidRouteHandler,
  )
  .openapi(getAdCampaignCampaignIdAdGroupRoute, getAdCampaignCampaignIdAdGroupRouteHandler)
  .openapi(postAdCampaignCampaignIdAdGroupRoute, postAdCampaignCampaignIdAdGroupRouteHandler)
  .openapi(
    getAdCampaignCampaignIdAdGroupAdGroupIdRoute,
    getAdCampaignCampaignIdAdGroupAdGroupIdRouteHandler,
  )
  .openapi(
    putAdCampaignCampaignIdAdGroupAdGroupIdRoute,
    putAdCampaignCampaignIdAdGroupAdGroupIdRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRoute,
    postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRoute,
    postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute,
    postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute,
    postAdCampaignCampaignIdBulkCreateAdsByListingIdRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkCreateKeywordRoute,
    postAdCampaignCampaignIdBulkCreateKeywordRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRoute,
    postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkDeleteAdsByListingIdRoute,
    postAdCampaignCampaignIdBulkDeleteAdsByListingIdRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRoute,
    postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRoute,
    postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkUpdateAdsStatusRoute,
    postAdCampaignCampaignIdBulkUpdateAdsStatusRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRoute,
    postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdBulkUpdateKeywordRoute,
    postAdCampaignCampaignIdBulkUpdateKeywordRouteHandler,
  )
  .openapi(postAdCampaignCampaignIdCloneRoute, postAdCampaignCampaignIdCloneRouteHandler)
  .openapi(
    postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute,
    postAdCampaignCampaignIdCreateAdsByInventoryReferenceRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute,
    postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRouteHandler,
  )
  .openapi(postAdCampaignCampaignIdEndRoute, postAdCampaignCampaignIdEndRouteHandler)
  .openapi(
    getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute,
    getAdCampaignCampaignIdGetAdsByInventoryReferenceRouteHandler,
  )
  .openapi(getAdCampaignCampaignIdKeywordRoute, getAdCampaignCampaignIdKeywordRouteHandler)
  .openapi(postAdCampaignCampaignIdKeywordRoute, postAdCampaignCampaignIdKeywordRouteHandler)
  .openapi(
    getAdCampaignCampaignIdKeywordKeywordIdRoute,
    getAdCampaignCampaignIdKeywordKeywordIdRouteHandler,
  )
  .openapi(
    putAdCampaignCampaignIdKeywordKeywordIdRoute,
    putAdCampaignCampaignIdKeywordKeywordIdRouteHandler,
  )
  .openapi(postAdCampaignCampaignIdPauseRoute, postAdCampaignCampaignIdPauseRouteHandler)
  .openapi(postAdCampaignCampaignIdResumeRoute, postAdCampaignCampaignIdResumeRouteHandler)
  .openapi(
    getAdCampaignCampaignIdSuggestItemsRoute,
    getAdCampaignCampaignIdSuggestItemsRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdUpdateAdRateStrategyRoute,
    postAdCampaignCampaignIdUpdateAdRateStrategyRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdUpdateCampaignBudgetRoute,
    postAdCampaignCampaignIdUpdateCampaignBudgetRouteHandler,
  )
  .openapi(
    postAdCampaignCampaignIdUpdateCampaignIdentificationRoute,
    postAdCampaignCampaignIdUpdateCampaignIdentificationRouteHandler,
  )
  .openapi(getAdReportReportIdRoute, getAdReportReportIdRouteHandler)
  .openapi(getAdReportMetadataRoute, getAdReportMetadataRouteHandler)
  .openapi(getAdReportMetadataReportTypeRoute, getAdReportMetadataReportTypeRouteHandler)
  .openapi(getAdReportTaskRoute, getAdReportTaskRouteHandler)
  .openapi(postAdReportTaskRoute, postAdReportTaskRouteHandler)
  .openapi(deleteAdReportTaskReportTaskIdRoute, deleteAdReportTaskReportTaskIdRouteHandler)
  .openapi(getAdReportTaskReportTaskIdRoute, getAdReportTaskReportTaskIdRouteHandler)
  .openapi(postBulkCreateNegativeKeywordRoute, postBulkCreateNegativeKeywordRouteHandler)
  .openapi(postBulkUpdateNegativeKeywordRoute, postBulkUpdateNegativeKeywordRouteHandler)
  .openapi(postItemPriceMarkdownRoute, postItemPriceMarkdownRouteHandler)
  .openapi(deleteItemPriceMarkdownPromotionIdRoute, deleteItemPriceMarkdownPromotionIdRouteHandler)
  .openapi(getItemPriceMarkdownPromotionIdRoute, getItemPriceMarkdownPromotionIdRouteHandler)
  .openapi(putItemPriceMarkdownPromotionIdRoute, putItemPriceMarkdownPromotionIdRouteHandler)
  .openapi(postItemPromotionRoute, postItemPromotionRouteHandler)
  .openapi(deleteItemPromotionPromotionIdRoute, deleteItemPromotionPromotionIdRouteHandler)
  .openapi(getItemPromotionPromotionIdRoute, getItemPromotionPromotionIdRouteHandler)
  .openapi(putItemPromotionPromotionIdRoute, putItemPromotionPromotionIdRouteHandler)
  .openapi(getNegativeKeywordRoute, getNegativeKeywordRouteHandler)
  .openapi(postNegativeKeywordRoute, postNegativeKeywordRouteHandler)
  .openapi(
    getNegativeKeywordNegativeKeywordIdRoute,
    getNegativeKeywordNegativeKeywordIdRouteHandler,
  )
  .openapi(
    putNegativeKeywordNegativeKeywordIdRoute,
    putNegativeKeywordNegativeKeywordIdRouteHandler,
  )
  .openapi(getPromotionRoute, getPromotionRouteHandler)
  .openapi(
    getPromotionPromotionIdGetListingSetRoute,
    getPromotionPromotionIdGetListingSetRouteHandler,
  )
  .openapi(postPromotionPromotionIdPauseRoute, postPromotionPromotionIdPauseRouteHandler)
  .openapi(postPromotionPromotionIdResumeRoute, postPromotionPromotionIdResumeRouteHandler)
  .openapi(getPromotionReportRoute, getPromotionReportRouteHandler)
  .openapi(getPromotionSummaryReportRoute, getPromotionSummaryReportRouteHandler)

export default app
