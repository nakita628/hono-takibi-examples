import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdCampaignCampaignIdKeywordKeywordIdRoute,
  getAdCampaignCampaignIdKeywordRoute,
  postAdCampaignCampaignIdBulkCreateKeywordRoute,
  postAdCampaignCampaignIdBulkUpdateKeywordRoute,
  postAdCampaignCampaignIdKeywordRoute,
  putAdCampaignCampaignIdKeywordKeywordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keywordHandler = app
  .openapi(postAdCampaignCampaignIdBulkCreateKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdBulkUpdateKeywordRoute, (c) => {
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
