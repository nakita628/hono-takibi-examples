import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
