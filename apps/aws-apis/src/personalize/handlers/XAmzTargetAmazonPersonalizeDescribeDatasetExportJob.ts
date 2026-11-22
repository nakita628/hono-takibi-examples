import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
