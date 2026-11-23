import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCreateNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
