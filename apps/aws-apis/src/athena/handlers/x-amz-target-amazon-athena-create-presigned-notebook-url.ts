import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreatePresignedNotebookUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreatePresignedNotebookUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
