import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignsIdRoute,
  deleteSegmentsIdRoute,
  getCampaignsRoute,
  getRecipientsRoute,
  getSegmentsRoute,
  patchCampaignsIdResumeRoute,
  patchCampaignsIdScheduleRoute,
  patchCampaignsIdStopRoute,
  postCampaignsIdTestRoute,
  postCampaignsRoute,
  postSegmentsRoute,
  putCampaignsIdRoute,
  putSegmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCampaignsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCampaignsIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
