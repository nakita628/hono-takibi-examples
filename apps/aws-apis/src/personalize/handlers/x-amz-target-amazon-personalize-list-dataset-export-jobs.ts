import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListDatasetExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListDatasetExportJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListDatasetExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
