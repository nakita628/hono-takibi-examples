import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
