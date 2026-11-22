import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketingCampaigns202609BatchArchiveRoute,
  postMarketingCampaigns202609BatchCreateRoute,
  postMarketingCampaigns202609BatchReadRoute,
  postMarketingCampaigns202609BatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postMarketingCampaigns202609BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingCampaigns202609BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingCampaigns202609BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingCampaigns202609BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
