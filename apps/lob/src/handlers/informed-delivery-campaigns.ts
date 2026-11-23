import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInformedDeliveryCampaignsRoute,
  getInformedDeliveryCampaignsUspsCampaignIdRoute,
  patchInformedDeliveryCampaignsUspsCampaignIdRoute,
  postInformedDeliveryCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const informedDeliveryCampaignsHandler = app
  .openapi(getInformedDeliveryCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInformedDeliveryCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInformedDeliveryCampaignsUspsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInformedDeliveryCampaignsUspsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
