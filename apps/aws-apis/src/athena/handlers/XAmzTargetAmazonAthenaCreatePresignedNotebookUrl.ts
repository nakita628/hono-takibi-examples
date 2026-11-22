import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreatePresignedNotebookUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreatePresignedNotebookUrlRoute,
  (c) => {},
)
