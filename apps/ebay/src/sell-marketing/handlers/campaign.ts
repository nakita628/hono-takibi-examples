import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdCampaignCampaignIdRoute,
  getAdCampaignCampaignIdRoute,
  getAdCampaignCampaignIdSuggestItemsRoute,
  getAdCampaignFindCampaignByAdReferenceRoute,
  getAdCampaignGetCampaignByNameRoute,
  getAdCampaignRoute,
  postAdCampaignCampaignIdCloneRoute,
  postAdCampaignCampaignIdEndRoute,
  postAdCampaignCampaignIdPauseRoute,
  postAdCampaignCampaignIdResumeRoute,
  postAdCampaignCampaignIdUpdateAdRateStrategyRoute,
  postAdCampaignCampaignIdUpdateCampaignBudgetRoute,
  postAdCampaignCampaignIdUpdateCampaignIdentificationRoute,
  postAdCampaignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignHandler = app
  .openapi(getAdCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignFindCampaignByAdReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignGetCampaignByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdCampaignCampaignIdSuggestItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateAdRateStrategyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateCampaignBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdCampaignCampaignIdUpdateCampaignIdentificationRoute, (c) => {
    throw new Error('Not implemented')
  })
