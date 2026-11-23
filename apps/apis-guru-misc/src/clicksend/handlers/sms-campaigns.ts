import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSmsCampaignsCampaignIdLinkExportFilenameFilenameRoute,
  getSmsCampaignsCampaignIdLinkStatisticsRoute,
  getSmsCampaignsCampaignIdLinkTrackingRoute,
  getSmsCampaignsRoute,
  getSmsCampaignsSmsCampaignIdRoute,
  postSmsCampaignsPriceRoute,
  postSmsCampaignsSendRoute,
  putSmsCampaignsSmsCampaignIdCancelRoute,
  putSmsCampaignsSmsCampaignIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsCampaignsHandler = app
  .openapi(getSmsCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsCampaignsCampaignIdLinkExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsCampaignsCampaignIdLinkStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsCampaignsCampaignIdLinkTrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsCampaignsSmsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsCampaignsSmsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsCampaignsSmsCampaignIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
