import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListCampaignsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListCampaignsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListCampaignsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
