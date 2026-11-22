import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdCampaignCampaignIdAdAdIdRoute,
  getAdCampaignCampaignIdAdAdIdRoute,
  getAdCampaignCampaignIdAdRoute,
  getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdAdAdIdUpdateBidRoute,
  postAdCampaignCampaignIdAdRoute,
  postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute,
  postAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkDeleteAdsByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceRoute,
  postAdCampaignCampaignIdBulkUpdateAdsBidByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdRoute,
  postAdCampaignCampaignIdBulkUpdateAdsStatusRoute,
  postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute,
  postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adHandler = app
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
  .openapi(postAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkCreateAdsByListingIdRoute, (c) => {
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
  .openapi(postAdCampaignCampaignIdCreateAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdDeleteAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdGetAdsByInventoryReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
