import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListDatasetImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListDatasetImportJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListDatasetImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
