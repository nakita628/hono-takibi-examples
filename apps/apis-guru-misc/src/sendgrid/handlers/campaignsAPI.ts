import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignsCampaignIdRoute,
  deleteCampaignsCampaignIdSchedulesRoute,
  getCampaignsCampaignIdRoute,
  getCampaignsCampaignIdSchedulesRoute,
  getCampaignsRoute,
  patchCampaignsCampaignIdRoute,
  patchCampaignsCampaignIdSchedulesRoute,
  postCampaignsCampaignIdSchedulesNowRoute,
  postCampaignsCampaignIdSchedulesRoute,
  postCampaignsCampaignIdSchedulesTestRoute,
  postCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsAPIHandler = app
  .openapi(getCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignsCampaignIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsCampaignIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsCampaignIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsCampaignIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsCampaignIdSchedulesNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsCampaignIdSchedulesTestRoute, (c) => {
    throw new Error('Not implemented')
  })
