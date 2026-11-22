import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaImportNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaImportNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaImportNotebookRoute,
  (c) => {},
)
