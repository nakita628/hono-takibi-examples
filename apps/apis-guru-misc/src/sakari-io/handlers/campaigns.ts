import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdCampaignsCampaignIdRoute,
  getV1AccountsAccountIdCampaignsCampaignIdRoute,
  getV1AccountsAccountIdCampaignsRoute,
  postV1AccountsAccountIdCampaignsRoute,
  putV1AccountsAccountIdCampaignsCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
