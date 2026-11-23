import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaDeleteNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
