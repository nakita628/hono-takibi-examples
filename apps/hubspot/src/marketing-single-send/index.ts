import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingEmailCampaigns202609SingleSendRoute } from './routes'
import { postMarketingEmailCampaigns202609SingleSendRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postMarketingEmailCampaigns202609SingleSendRoute,
  postMarketingEmailCampaigns202609SingleSendRouteHandler,
)

export default app
