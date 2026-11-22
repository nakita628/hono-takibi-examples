import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListCampaignsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListCampaignsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListCampaignsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
