import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdCampaignsIdRoute,
  getApiV1AccountsAccountIdCampaignsIdRoute,
  getApiV1AccountsAccountIdCampaignsRoute,
  patchApiV1AccountsAccountIdCampaignsIdRoute,
  postApiV1AccountsAccountIdCampaignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getApiV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
