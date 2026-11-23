import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaExportNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaExportNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaExportNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
