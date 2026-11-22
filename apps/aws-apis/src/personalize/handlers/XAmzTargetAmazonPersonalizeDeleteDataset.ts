import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteDatasetHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
