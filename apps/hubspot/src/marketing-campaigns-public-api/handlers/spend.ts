import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingCampaigns202609CampaignGuidSpendSpendIdRoute,
  getMarketingCampaigns202609CampaignGuidSpendSpendIdRoute,
  postMarketingCampaigns202609CampaignGuidSpendRoute,
  putMarketingCampaigns202609CampaignGuidSpendSpendIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spendHandler = app
  .openapi(postMarketingCampaigns202609CampaignGuidSpendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidSpendSpendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingCampaigns202609CampaignGuidSpendSpendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingCampaigns202609CampaignGuidSpendSpendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
