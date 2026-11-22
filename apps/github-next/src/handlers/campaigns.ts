import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgCampaignsCampaignNumberRoute,
  getOrgsOrgCampaignsCampaignNumberRoute,
  getOrgsOrgCampaignsRoute,
  patchOrgsOrgCampaignsCampaignNumberRoute,
  postOrgsOrgCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getOrgsOrgCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
