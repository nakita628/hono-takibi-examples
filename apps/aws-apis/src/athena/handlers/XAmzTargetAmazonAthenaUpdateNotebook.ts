import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNotebookRoute,
  (c) => {},
)
