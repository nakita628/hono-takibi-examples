import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
