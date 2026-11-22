import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaExportNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaExportNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaExportNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
