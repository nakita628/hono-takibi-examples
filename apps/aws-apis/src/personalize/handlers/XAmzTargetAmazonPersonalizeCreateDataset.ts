import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateDatasetHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
