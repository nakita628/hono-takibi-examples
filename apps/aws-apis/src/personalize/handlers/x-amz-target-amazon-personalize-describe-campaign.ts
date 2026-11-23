import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeCampaignHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
