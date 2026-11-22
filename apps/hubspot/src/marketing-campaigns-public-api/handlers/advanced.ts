import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingCampaigns202609CloneRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(postMarketingCampaigns202609CloneRoute, (c) => {
  throw new Error('Not implemented')
})
