import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCampaignsIdRoute,
  getAdminCampaignsIdRoute,
  getAdminCampaignsRoute,
  postAdminCampaignsIdPromotionsRoute,
  postAdminCampaignsIdRoute,
  postAdminCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getAdminCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
