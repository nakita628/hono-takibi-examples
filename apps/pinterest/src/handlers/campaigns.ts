import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdCampaignsAnalyticsRoute,
  getAdAccountsAdAccountIdCampaignsCampaignIdRoute,
  getAdAccountsAdAccountIdCampaignsRoute,
  getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdPinsAnalyticsRoute,
  patchAdAccountsAdAccountIdCampaignsRoute,
  postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRoute,
  postAdAccountsAdAccountIdCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignsDeliveryEstimatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPinsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
