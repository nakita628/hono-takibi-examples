import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteCampaignHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
