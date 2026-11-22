import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeUpdateCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeUpdateCampaignHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeUpdateCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
