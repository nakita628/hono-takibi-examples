import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeRoute,
  getMarketingCampaigns202609CampaignGuidReportsMetricsRoute,
  getMarketingCampaigns202609CampaignGuidReportsRevenueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidReportsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidReportsRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
