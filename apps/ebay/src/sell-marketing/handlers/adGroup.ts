import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdCampaignCampaignIdAdGroupAdGroupIdRoute,
  getAdCampaignCampaignIdAdGroupRoute,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsRoute,
  postAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsRoute,
  postAdCampaignCampaignIdAdGroupRoute,
  putAdCampaignCampaignIdAdGroupAdGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adGroupHandler = app
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
