import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateCampaignHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
