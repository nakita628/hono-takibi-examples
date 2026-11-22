import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignIdRoute,
  deleteV2CampaignIdRoute,
  getCampaignIdRoute,
  getCampaignRoute,
  getV2CampaignIdContactsRoute,
  getV2CampaignIdRoute,
  getV2CampaignRoute,
  patchCampaignIdRoute,
  patchV2CampaignIdRoute,
  postCampaignRoute,
  postV2CampaignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(postCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CampaignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CampaignIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
