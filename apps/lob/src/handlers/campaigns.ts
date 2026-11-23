import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignsCmpIdRoute,
  getCampaignsCmpIdRoute,
  getCampaignsRoute,
  patchCampaignsCmpIdRoute,
  postCampaignsCmpIdSendRoute,
  postCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsCmpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsCmpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignsCmpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsCmpIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
