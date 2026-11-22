import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignsIdRoute,
  getCampaignsAnalyticsTypeRoute,
  getCampaignsIdPreviewRoute,
  getCampaignsIdRoute,
  getCampaignsRoute,
  getCampaignsRunningStatsRoute,
  postCampaignsIdContentRoute,
  postCampaignsIdPreviewRoute,
  postCampaignsIdTestRoute,
  postCampaignsIdTextRoute,
  postCampaignsRoute,
  putCampaignsIdArchiveRoute,
  putCampaignsIdRoute,
  putCampaignsIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsRunningStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsAnalyticsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsIdTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCampaignsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCampaignsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
