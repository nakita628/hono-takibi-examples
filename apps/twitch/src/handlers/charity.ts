import { OpenAPIHono } from '@hono/zod-openapi'
import { getCharityCampaignsRoute, getCharityDonationsRoute } from '../routes'

const app = new OpenAPIHono()

export const charityHandler = app
  .openapi(getCharityCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharityDonationsRoute, (c) => {
    throw new Error('Not implemented')
  })
