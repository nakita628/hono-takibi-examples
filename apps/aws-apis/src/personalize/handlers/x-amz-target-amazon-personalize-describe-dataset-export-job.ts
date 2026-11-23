import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
