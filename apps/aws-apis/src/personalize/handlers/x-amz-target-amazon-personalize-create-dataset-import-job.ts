import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
