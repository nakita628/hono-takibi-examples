import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdCampaignCampaignIdAdAdIdRoute,
  deleteAdCampaignCampaignIdRoute,
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
  putAdCampaignCampaignIdAdGroupAdGroupIdRoute,
  putAdCampaignCampaignIdKeywordKeywordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adCampaignHandler = app
  .openapi(getAdCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignFindCampaignByAdReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignGetCampaignByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdCampaignCampaignIdAdAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdAdAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdAdAdIdUpdateBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdAdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdAdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdAdGroupAdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdCampaignCampaignIdAdGroupAdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkCreateKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkDeleteAdsByListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateAdsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdKeywordKeywordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdCampaignCampaignIdKeywordKeywordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdSuggestItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateAdRateStrategyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateCampaignBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateCampaignIdentificationRoute, (c) => {
    throw new Error('Not implemented')
  })
