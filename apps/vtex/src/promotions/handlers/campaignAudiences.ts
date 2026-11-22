import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRnbPvtCampaignConfigurationCampaignIdRoute,
  getApiRnbPvtCampaignConfigurationRoute,
  postApiRnbPvtCampaignConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignAudiencesHandler = app
  .openapi(getApiRnbPvtCampaignConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCampaignConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCampaignConfigurationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
