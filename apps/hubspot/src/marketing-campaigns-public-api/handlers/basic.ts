import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingCampaigns202609CampaignGuidRoute,
  getMarketingCampaigns202609CampaignGuidRoute,
  getMarketingCampaigns202609CloneCampaignGuidStatusRoute,
  getMarketingCampaigns202609Route,
  patchMarketingCampaigns202609CampaignGuidRoute,
  postMarketingCampaigns202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getMarketingCampaigns202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingCampaigns202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CloneCampaignGuidStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingCampaigns202609CampaignGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingCampaigns202609CampaignGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingCampaigns202609CampaignGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
