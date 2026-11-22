import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute,
  getMarketingCampaigns202609AssetTypesRoute,
  getMarketingCampaigns202609CampaignGuidAssetsAssetTypeRoute,
  getMarketingCampaigns202609CloneAssetTypesRoute,
  putMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getMarketingCampaigns202609AssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CloneAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidAssetsAssetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
