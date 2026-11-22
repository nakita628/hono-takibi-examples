import { OpenAPIHono } from '@hono/zod-openapi'
import { postDonationCampaignsRoute, postDonationsRoute } from '../routes'

const app = new OpenAPIHono()

export const donationsHandler = app
  .openapi(postDonationCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDonationsRoute, (c) => {
    throw new Error('Not implemented')
  })
