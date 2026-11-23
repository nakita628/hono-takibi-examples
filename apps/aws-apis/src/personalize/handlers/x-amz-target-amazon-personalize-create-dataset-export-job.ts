import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateDatasetExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateDatasetExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
