import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListDatasetImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListDatasetImportJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListDatasetImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
