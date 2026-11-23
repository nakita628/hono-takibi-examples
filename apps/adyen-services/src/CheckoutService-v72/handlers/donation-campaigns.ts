import { OpenAPIHono } from '@hono/zod-openapi'
import { postDonationCampaignsRoute } from '../routes'

const app = new OpenAPIHono()

export const donationCampaignsHandler = app.openapi(postDonationCampaignsRoute, (c) => {
  throw new Error('Not implemented')
})
