import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaImportNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaImportNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaImportNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
