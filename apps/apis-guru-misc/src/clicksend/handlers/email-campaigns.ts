import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailCampaignsCampaignIdHistoryRoute,
  getEmailCampaignsEmailCampaignIdRoute,
  getEmailCampaignsRoute,
  postEmailCampaignsPriceRoute,
  postEmailCampaignsSendRoute,
  putEmailCampaignsEmailCampaignIdCancelRoute,
  putEmailCampaignsEmailCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailCampaignsHandler = app
  .openapi(getEmailCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsCampaignIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsEmailCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsEmailCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsEmailCampaignIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
