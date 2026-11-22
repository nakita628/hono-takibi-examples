import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaDeleteNotebookHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteNotebookRoute,
  (c) => {},
)
