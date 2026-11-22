import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdCampaignAdPreviewRoute,
  getAdAccountsAdAccountIdAdsAdIdRoute,
  getAdAccountsAdAccountIdAdsAnalyticsRoute,
  getAdAccountsAdAccountIdAdsRoute,
  getAdAccountsAdAccountIdAdsTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdCampaignAdPreviewRoute,
  patchAdAccountsAdAccountIdAdsRoute,
  postAdAccountsAdAccountIdAdPreviewsRoute,
  postAdAccountsAdAccountIdAdsRoute,
  postAdAccountsAdAccountIdCampaignAdPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adsHandler = app
  .openapi(postAdAccountsAdAccountIdAdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdCampaignAdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
