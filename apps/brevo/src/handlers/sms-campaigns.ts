import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsCampaignsCampaignIdRoute,
  getSmsCampaignsCampaignIdRoute,
  getSmsCampaignsRoute,
  postSmsCampaignsCampaignIdExportRecipientsRoute,
  postSmsCampaignsCampaignIdSendNowRoute,
  postSmsCampaignsCampaignIdSendReportRoute,
  postSmsCampaignsCampaignIdSendTestRoute,
  postSmsCampaignsRoute,
  putSmsCampaignsCampaignIdRoute,
  putSmsCampaignsCampaignIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsCampaignsHandler = app
  .openapi(getSmsCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsCampaignIdExportRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsCampaignIdSendNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsCampaignIdSendReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsCampaignsCampaignIdSendTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsCampaignsCampaignIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
