import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdCampaignsIdRoute,
  getUserprofilesProfileIdCampaignsRoute,
  patchUserprofilesProfileIdCampaignsRoute,
  postUserprofilesProfileIdCampaignsRoute,
  putUserprofilesProfileIdCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
