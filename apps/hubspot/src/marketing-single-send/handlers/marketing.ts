import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingEmailCampaigns202609SingleSendRoute } from '../routes'

const app = new OpenAPIHono()

export const marketingHandler = app.openapi(
  postMarketingEmailCampaigns202609SingleSendRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
