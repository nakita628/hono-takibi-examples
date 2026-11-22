import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute,
  postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignCreativeAssociationsHandler = app
  .openapi(getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
