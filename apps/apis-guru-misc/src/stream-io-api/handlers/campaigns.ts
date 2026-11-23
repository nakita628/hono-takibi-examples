import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCampaignsIdRoute,
  getCampaignsRoute,
  patchCampaignsIdResumeRoute,
  patchCampaignsIdScheduleRoute,
  patchCampaignsIdStopRoute,
  postCampaignsIdTestRoute,
  postCampaignsRoute,
  putCampaignsIdRoute,
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
