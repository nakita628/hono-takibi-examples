import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateDatasetExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateDatasetExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
