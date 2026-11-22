import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreateNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateNotebookRoute,
  (c) => {},
)
