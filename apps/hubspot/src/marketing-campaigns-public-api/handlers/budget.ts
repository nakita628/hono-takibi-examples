import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute,
  getMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute,
  getMarketingCampaigns202609CampaignGuidBudgetTotalsRoute,
  postMarketingCampaigns202609CampaignGuidBudgetRoute,
  putMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetHandler = app
  .openapi(postMarketingCampaigns202609CampaignGuidBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidBudgetTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
