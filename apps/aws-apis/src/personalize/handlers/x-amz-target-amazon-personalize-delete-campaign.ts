import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDeleteCampaignHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
