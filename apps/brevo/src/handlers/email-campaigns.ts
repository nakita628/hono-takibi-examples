import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailCampaignsCampaignIdRoute,
  getEmailCampaignsCampaignIdAbTestCampaignResultRoute,
  getEmailCampaignsCampaignIdRoute,
  getEmailCampaignsCampaignIdSharedUrlRoute,
  getEmailCampaignsRoute,
  postEmailCampaignsCampaignIdExportRecipientsRoute,
  postEmailCampaignsCampaignIdSendNowRoute,
  postEmailCampaignsCampaignIdSendReportRoute,
  postEmailCampaignsCampaignIdSendTestRoute,
  postEmailCampaignsImagesRoute,
  postEmailCampaignsRoute,
  putEmailCampaignsCampaignIdRoute,
  putEmailCampaignsCampaignIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailCampaignsHandler = app
  .openapi(getEmailCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsCampaignIdAbTestCampaignResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsCampaignIdExportRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsCampaignIdSendNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsCampaignIdSendReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailCampaignsCampaignIdSendTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailCampaignsCampaignIdSharedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailCampaignsCampaignIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
